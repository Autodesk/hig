import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton from "../IconButton/IconButton";
import RichText from "../RichText";

export default class Notification extends Component {
  componentDidMount() {}

  onClickCapture(event) {
    if (event.target.event.target.tagName === "A") {
      this.props.onLinkClick(this.props.id);
    }
    console.log("event", event);
    console.log("event target", event.target);
  }

  render() {
    return (
      <div className="hig__notification" onClickCapture={this.onClickCapture}>
        <div className="hig__notification__unread-marker" />
        <div className="hig__notification__content">
          <RichText>{this.props.content}</RichText>
          <IconButton icon="close-notification" type="flat" />
        </div>

        {/* <Timestamp /> */}
      </div>
    );
  }
}
