import React, { Component } from "react";
import PropTypes from "prop-types";

import { Modal as VanillaModal, Button as VanillaButton } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountsAnyChild
} from "./HIGAdapter";
import { Button } from "../hig-react";

class ModalAdapter extends Component {
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
  body: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
  children: PropTypes.node,
  onCloseClick: PropTypes.func,
  onOverlayClick: PropTypes.func,
  open: PropTypes.bool,
  style: PropTypes.oneOf(VanillaModal.AvailableStyles),
  title: PropTypes.string
};

ModalAdapter.defaultProps = {
  body: undefined,
  buttons: undefined,
  children: undefined,
  onCloseClick: undefined,
  onOverlayClick: undefined,
  open: undefined,
  style: undefined,
  title: undefined
};

ModalAdapter.__docgenInfo = {
  props: {
    body: {
      description: "text or html string content of the modal"
    },
    buttons: {
      description: "an array of props supported by the Button component"
    },
    style: {
      description: "style of the modal shell"
    },
    onCloseClick: {
      description: "triggers when you click the close button"
    },
    onOverlayClick: {
      description: "triggers when you click the overlay behind the modal"
    },
    open: {
      description: "modal is visible when true"
    },
    title: {
      description: "title of the modal"
    },
    children: {
      description: "supports add any dom content to the body of the modal"
    }
  }
};

ModalAdapter.defaultProps = {
  buttons: []
};

export default ModalAdapter;
