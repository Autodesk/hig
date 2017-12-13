import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Notifications, Notification, TextLink } from "../../hig-react";

class NotificationsSection extends PureComponent {
  threeMinutesAgo = () => {
    const currentDate = new Date();
    const updatedDate = currentDate.setMinutes(currentDate.getMinutes() - 3);
    return new Date(updatedDate);
  };

  threeHoursAgo = () => {
    const currentDate = new Date();
    const updatedDate = currentDate.setHours(currentDate.getHours() - 3);
    return new Date(updatedDate);
  };

  threeMonthsAgo = () => {
    const currentDate = new Date();
    const updatedDate = currentDate.setMonth(currentDate.getMonth() - 3);
    return new Date(updatedDate);
  };
  render() {
    return (
      <PlaygroundSection title="Notifications">
        <div style={{ width: "100px" }}>
          <Notifications
            onClick={() => {
              console.log("Notifications Clicked");
            }}
            onClickOutside={() => {
              console.log("Notifications Click Outside");
            }}
            unreadCount={3}
          >
            <Notification unread>
              <p>This is our first notification</p>
              <div>
                <TextLink
                  href="https://github.com/Autodesk/hig"
                  text="This is a primary text link"
                />
              </div>
            </Notification>
            <Notification unread>
              <p>This is our second notification</p>
            </Notification>
          </Notifications>
        </div>
      </PlaygroundSection>
    );
  }
}

export default NotificationsSection;
