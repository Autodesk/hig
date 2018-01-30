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
            <MapsPropToMethod
              setter="setSize"
              value={this.props.size}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setColor"
              value={this.props.color}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setOpacity"
              value={this.props.opacity}
              {...adapterProps}
            />
            <MapsPropToMethod value={this.props.bold} {...adapterProps}>
              {(instance, value) =>
                value ? instance.setBold() : instance.unsetBold()
              }
            </MapsPropToMethod>
            <MapsPropToMethod value={this.props.disabled} {...adapterProps}>
              {(instance, value) =>
                value ? instance.setDisabled() : instance.unsetDisabled()
              }
            </MapsPropToMethod>
          </div>
        )}
      </HIGAdapter>
    );
  }
}

TypographyAdapter.defaultProps = {
  size: "medium"
};

TypographyAdapter.propTypes = {
  /**
   * Whether to render bold text
   */
  bold: PropTypes.bool,
  /**
   * One of: 'hig-white', 'hig-cool-gray-70', 'hig-blue-50', 'hig-green-good', 'hig-yellow-warning', 'hig-red-alert'
   */
  color: PropTypes.string,
  /**
   * Whether to show text as disabled
   */
  disabled: PropTypes.bool,
  /**
   * An opacity value to modify the color, between 0.0 and 1.0
   */
  opacity: PropTypes.number,
  /**
   * One of: 'small', 'medium', 'large'
   */
  size: PropTypes.string.isRequired,
  /**
   * One of: 'h1', 'h2', 'h3', 'text', 'sub1', 'sub2', 'body', 'bold', 'disabled', 'caption'
   */
  type: PropTypes.string.isRequired,
  /**
   * Styled or unstyled text to show inside the typography
   */
  text: PropTypes.string.isRequired
};
