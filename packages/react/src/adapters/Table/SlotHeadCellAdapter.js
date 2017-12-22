import React, { Component } from "react";
import { Table as VanillaTable } from "hig-vanilla";
import PropTypes from "prop-types";
import HIGAdapter, {
  MapsPropToMethod,
  MountsAnyChild,
  MountedByHIGParentList
} from "../HIGAdapter";

export default class SlotHeadCellAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Slot"
        HIGConstructor={VanillaTable._partials.TableHead._partials.SlotHeadCell}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.width}
              setter="setWidth"
              {...adapterProps}
            />
            <MountedByHIGParentList mounter="addCell" {...adapterProps} />
            <MountsAnyChild mounter="addSlot" {...adapterProps}>
              {this.props.children}
            </MountsAnyChild>
          </div>
        )}
      </HIGAdapter>
    );
  }
}

SlotHeadCellAdapter.propTypes = {
  /**
   * Content for slot cell
   */
  children: PropTypes.node,
  /**
   * Sets {String} width of the cell
   */
  width: PropTypes.string
};
