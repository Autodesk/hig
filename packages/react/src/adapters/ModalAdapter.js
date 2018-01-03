import React, { Component } from "react";
import PropTypes from "prop-types";

import { Modal as VanillaModal, Button as VanillaButton } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountsAnyChild
} from "./HIGAdapter";
import { Button } from "../hig-react";

export default class ModalAdapter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [];
  }

  mapButtons = (higInstance, nextButtons) => {
    this.buttons.forEach(button => {
      button.unmount();
    });

    this.buttons = nextButtons.map(buttonProps => {
      const button = new VanillaButton(buttonProps);

      higInstance.addButton(button);

      return button;
    });
  };

  render() {
    return (
      <HIGAdapter
        displayName="Modal"
        HIGConstructor={VanillaModal}
        {...this.props}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              setter="setBody"
              value={this.props.body}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setStyle"
              value={this.props.style}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setTitle"
              value={this.props.title}
              {...adapterProps}
            />
            <MapsPropToMethod value={this.props.open} {...adapterProps}>
              {(instance, value) =>
                value ? instance.open() : instance.close()}
            </MapsPropToMethod>
            <MapsEventListener
              listener="onCloseClick"
              handler={this.props.onCloseClick}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onOverlayClick"
              handler={this.props.onOverlayClick}
              {...adapterProps}
            />
            <MountsAnyChild mounter="addSlot" {...adapterProps}>
              {this.props.children}
            </MountsAnyChild>
            <MapsPropToMethod value={this.props.buttons} {...adapterProps}>
              {this.mapButtons}
            </MapsPropToMethod>
          </div>
        )}
      </HIGAdapter>
    );
  }
}

ModalAdapter.propTypes = {
  /**
   * Text or html string content of the modal
   */
  body: PropTypes.string,
  /**
   * An array of props supported by the Button component
   */
  buttons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
  /**
   * Supports adding any dom content to the body of the modal
   */
  children: PropTypes.node,
  /**
   * Triggers when you click the close button
   */
  onCloseClick: PropTypes.func,
  /**
   * Triggers when you click the overlay behind the modal
   */
  onOverlayClick: PropTypes.func,
  /**
   * Modal is visible when true
   */
  open: PropTypes.bool,
  /**
   * Style of the modal shell
   */
  style: PropTypes.oneOf(VanillaModal.AvailableStyles),
  /**
   * Title of the modal
   */
  title: PropTypes.string
};

ModalAdapter.defaultProps = {
  buttons: []
};
