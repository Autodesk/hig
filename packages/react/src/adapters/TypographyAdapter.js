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

TypographyAdapter.propTypes = {
  /**
   * Whether to render bold text
   */
  bold: PropTypes.bool,
  /**
   * Colors the text with one of the supported HIG colors
   */
  color: PropTypes.oneOf(VanillaTypography.VALID_COLORS),
  /**
   * Whether to show text as disabled
   */
  disabled: PropTypes.bool,
  /**
   * An opacity value to modify the color, between 0.0 and 1.0
   */
  opacity: PropTypes.number,
  /**
   * Sizes the text with one of the supported modifiers
   */
  size: PropTypes.oneOf(VanillaTypography.VALID_SIZES),
  /**
   * Indicates the initial Typography style
   */
  type: PropTypes.oneOf(VanillaTypography.VALID_TYPES).isRequired,
  /**
   * Styled or unstyled text to show inside the typography
   */
  text: PropTypes.string.isRequired
};
