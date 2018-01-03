import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextLink as VanillaTextLink } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MapsEventListener } from "./HIGAdapter";

export default class TextLinkAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="TextLink"
        HIGConstructor={VanillaTextLink}
      >
        {adapterProps => (
          <div>
            <MapsEventListener
              listener="onClick"
              handler={this.props.onClick}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setHref"
              value={this.props.href}
              {...adapterProps}
            />
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

TextLinkAdapter.propTypes = {
  /**
   * Sets the link url or path
   */
  href: PropTypes.string,
  /**
   * Triggers when you click the link
   */
  onClick: PropTypes.func,
  /**
   * Sets the text and alt-text of the link
   */
  text: PropTypes.string.isRequired,
  /**
   * Specifies type of link
   */
  type: PropTypes.oneOf(VanillaTextLink.AvailableTypes)
};
