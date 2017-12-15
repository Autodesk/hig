import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Notifications, Notification, TextLink } from "../../hig-react";

class NotificationsSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="Notifications">
        <div style={{ width: "100px" }}>
          <Notifications unreadCount={24}>
            <Notification title="This is our first notification" unread>
              <p>This is our first notification</p>
              <div>
                <TextLink
                  href="https://github.com/Autodesk/hig"
                  text="This is a primary text link"
                />
              </div>
            </Notification>
            <Notification>
              <p>This is our second notification</p>
            </Notification>
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
