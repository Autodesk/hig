import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton from "../IconButton/IconButton";
import RichText from "../RichText";

const COMPONENT_CLASS = "hig__icon";
const FEATURED_COMPONENT_CLASS = "hig__notification--featured";
const UNREAD_MARKER_CLASS = "hig__notification__unread-marker";
const CONTENT_CLASS = "hig__notification__content";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      in: false
    };
  }
  componentDidMount() {}

  onClickCapture(event) {
    if (event.target.event.target.tagName === "A") {
      this.props.onLinkClick(this.props.id);
    }
  }

  dismissFeaturedNotification() {
    this.props.dismissFeaturedNotification();
    this.setState({ in: false });
  }

  render() {
    return (
      <div>
        {this.props.featuredNotification ? (
          <Transition in={this.setState.inProp} timeout={300}>
            <div
              className={`${COMPONENT_CLASS} ${FEATURED_COMPONENT_CLASS}`}
              onClickCapture={this.onClickCapture}
            >
              <div className={`${UNREAD_MARKER_CLASS}`} />
              <div className={`${CONTENT_CLASS}`}>
                <RichText>{this.props.content}</RichText>
                <IconButton
                  onClick={this.dismissFeaturedNotification}
                  icon="close-notification"
                  type="flat"
                />
              </div>

              {/* <Timestamp /> */}
            </div>
          </Transition>
        ) : (
          <div
            className={`${COMPONENT_CLASS}`}
            onClickCapture={this.onClickCapture}
          >
            <div className={`${UNREAD_MARKER_CLASS}`} />
            <div className={`${CONTENT_CLASS}`}>
              <RichText>{this.props.content}</RichText>
            </div>

            {/* <Timestamp /> */}
          </div>
        )}
      </div>
    );
  }
}
