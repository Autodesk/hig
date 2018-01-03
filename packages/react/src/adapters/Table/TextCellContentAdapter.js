import React, { Component } from "react";
import { TextCellContent as VanillaTextCellContent } from "hig-vanilla";
import PropTypes from "prop-types";

import HIGAdapter, { MapsPropToMethod } from "../HIGAdapter";

export default class TextCellContentAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        displayName="TextCellContent"
        HIGConstructor={VanillaTextCellContent}
        {...this.props}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.text}
              setter="setText"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.detail}
              setter="setDetail"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.alignment}
              setter="setAlignment"
              {...adapterProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

TextCellContentAdapter.propTypes = {
  /**
   * Sets {String} text in cell
   */
  text: PropTypes.string,
  /**
   * Sets {String} supporting text for cell in body of table
   */
  detail: PropTypes.string,
  /**
   * Sets {String} text-position of cell
   */
  alignment: PropTypes.oneOf(VanillaTextCellContent.AvailableAlignments)
};
