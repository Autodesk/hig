import React, { Component } from "react";
import { anchorPoints } from "@hig/flyout";
import { generateId } from "@hig/utils";
import Button from "@hig/button";
import TextLink from "@hig/text-link";
import "@hig/button/build/index.css";
import "@hig/text-link/build/index.css";

import createSampleNotifications from "../__fixtures__/createSampleNotifications";
import NotificationsFlyout from "../NotificationsFlyout";
import NotificationsFlyoutLayout from "./NotificationsFlyoutLayout";

function createNotification() {
  return {
    id: generateId("notification"),
    content: (
      <div>
        <p>
          You have 4 new seats of <b>Product Design Collection</b> subscription,
          switched from <b>Building Design Suite Premium</b>
          subscription.
        </p>
        <p>
          <TextLink>Learn how to switch</TextLink>
          {" or "}
          <TextLink>Assign users</TextLink>
        </p>
      </div>
    )
  };
}

class App extends Component {
  static defaultProps = {
    buttonText: "Add notification"
  };

  state = {
    notifications: createSampleNotifications()
  };

  handleButtonClick = () => {
    this.setState({
      notifications: [createNotification(), ...this.state.notifications]
    });
  };

  render() {
    const { handleButtonClick } = this;
    const { notifications } = this.state;
    const { buttonText } = this.props;

    return (
      <NotificationsFlyoutLayout>
        <Button title={buttonText} onClick={handleButtonClick} />
        <div style={{ width: "50px" }} />
        <NotificationsFlyout
          anchorPoint={anchorPoints.TOP_CENTER}
          notifications={notifications}
        />
      </NotificationsFlyoutLayout>
    );
  }
}

export default function notificationsFlyoutInteractive() {
  return () => <App />;
}
