import renderer from "react-test-renderer";
import React from "react";
import { NotificationV1 } from "../../../hig-react";

const sampleNotifications = [
  {
    id: 0,
    unread: true,
    children: (
      <div>
        <p>
          <b>Your subscription expires May 5</b>
        </p>
        <p>
          Maya<br />
          Media & Entertainment Collection<br />
          Product Design Collection<br />
          2 more
        </p>
      </div>
    )
  },
  {
    id: 1,
    unread: true,
    children: (
      <div>
        <p>
          <b>Your subscription expires April 20</b>
        </p>
        <p>
          AutoCAD<br />
          Architecture Construction Engineering Collection<br />
          Product Design Collection<br />
        </p>
      </div>
    )
  }
];

describe("New Notification", () => {
  it("renders correctly with the unread prop", () => {
    const tree = renderer
      .create(
        <NotificationV1 id={1} unread>
          {sampleNotifications[0].children}
        </NotificationV1>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with the featured prop", () => {
    const tree = renderer
      .create(
        <NotificationV1 id={1} featured>
          {sampleNotifications[0].children}
        </NotificationV1>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
