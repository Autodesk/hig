import React, { Component } from "react";
import { Table as VanillaTable } from "hig-vanilla";
import PropTypes from "prop-types";
import HIGAdapter, {
  MountsAnyChild,
  MountedByHIGParentList
} from "../HIGAdapter";

export default class SlotCellAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Slot"
        HIGConstructor={VanillaTable._partials.TableRow._partials.SlotCell}
      >
        {adapterProps => (
          <div>
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

SlotCellAdapter.propTypes = {
  /**
   * Content for slot cell
   */
  children: PropTypes.node
};
