import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton from "../IconButton/IconButton";
import RichText from "../RichText";

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

  dismissFeaturedNotification(){
    this.props.dismissFeaturedNotification();
    this.setState({in: false});
  }

  render() {
    return (
      <div>
        { this.props.featuredNotification
          ?
          <Transition in={this.setState.inProp} >
            <div className="hig__notification" onClickCapture={this.onClickCapture}>
                <div className="hig__notification__unread-marker" />
                <div className="hig__notification__content">
                  <RichText>{this.props.content}</RichText>
                  <IconButton onClick={this.dismissFeaturedNotification} icon="close-notification" type="flat" />
                </div>

                {/* <Timestamp /> */}
              </div>
          </Transition>
          : <div className="hig__notification" onClickCapture={this.onClickCapture}>
              <div className="hig__notification__unread-marker" />
              <div className="hig__notification__content">
                <RichText>{this.props.content}</RichText>
              </div>

              {/* <Timestamp /> */}
            </div>
        }
      </div>




      }

    );
  }
}
