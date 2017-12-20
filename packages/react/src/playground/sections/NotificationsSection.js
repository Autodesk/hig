import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Notifications, Notification, TextLink } from "../../hig-react";

const sampleNotification = {
  unread: true,
  children: () => (
    <div>
      <p>This is a sample notification</p>
      <div>
        <TextLink
          href="https://github.com/Autodesk/hig"
          text="This is a primary text link"
        />
      </div>
    </div>
  )
};

const notificationProps = {
  1: sampleNotification,
  2: sampleNotification,
  3: sampleNotification,
  4: sampleNotification
};

class NotificationsSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      readIds: []
    };
  }

  onClick = notificationId => {
    this.setState({
      readIds: [...new Set([...this.state.readIds, notificationId])]
    });
  };

  render() {
    return (
      <PlaygroundSection title="Notifications">
        <div style={{ width: "100px" }}>
          <Notifications
            onClick={() => {}}
            onClickOutside={() => {}}
            unreadCount={24}
            maxHeight={225}
          >
            {Object.keys(notificationProps).map(key => (
              <Notification
                unread={!this.state.readIds.includes(key)}
                onClick={this.onClick}
                id={key}
                key={key}
              >
                {notificationProps[key].children()}
              </Notification>
            ))}
          </Notifications>
        </div>
        <div style={{ width: "100px" }}>
          <Notifications />
        </div>
      </PlaygroundSection>
    );
  }
}

export default NotificationsSection;
