import renderer from "react-test-renderer";
import React from "react";
import { mount } from "enzyme";
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
          Maya
          <br />
          Media & Entertainment Collection
          <br />
          Product Design Collection
          <br />2 more
        </p>
      </div>
    ),
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
          AutoCAD
          <br />
          Architecture Construction Engineering Collection
          <br />
          Product Design Collection
          <br />
        </p>
      </div>
    ),
  },
];

describe("notifications-flyout/Notification", () => {
  it("renders correctly with the unread prop", () => {
    const tree = renderer
      .create(
        <Notification id="1" unread>
          {sampleNotifications[0].children}
        </Notification>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with the featured prop", () => {
    const tree = renderer
      .create(
        <Notification id="1" featured>
          {sampleNotifications[0].children}
        </Notification>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls the passed in function when clicked", () => {
    const clickCallback = jest.fn();
    const wrapper = mount(
      <Notification id="1" featured onNotificationClick={clickCallback}>
        {sampleNotifications[0].children}
      </Notification>
    );
    expect(clickCallback).toHaveBeenCalledTimes(0);
    expect(wrapper.find(Notification)).toHaveLength(1);

    wrapper.find(Notification).simulate("click");

    expect(clickCallback).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });
});
