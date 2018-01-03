import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography as VanillaTypography } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

export default class TypographyAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Typography"
        HIGConstructor={VanillaTypography}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              setter="setType"
              value={this.props.type}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setText"
              value={this.props.text}
              {...adapterProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

TypographyAdapter.propTypes = {
  /**
   * {String - 'stack', 'inline'} type of the typography
   */
  type: PropTypes.string.isRequired,
  /**
   * {String - styled or unstyled text to show inside the typography
   */
  text: PropTypes.string.isRequired
};
