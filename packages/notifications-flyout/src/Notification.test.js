import renderer from "react-test-renderer";
import React from "react";
import Notification from "./Notification";

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

describe("Notification", () => {
  it("renders correctly with the unread prop", () => {
    const tree = renderer
      .create(
        <Notification id={1} unread>
          {sampleNotifications[0].children}
        </Notification>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with the featured prop", () => {
    const tree = renderer
      .create(
        <Notification id={1} featured>
          {sampleNotifications[0].children}
        </Notification>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
