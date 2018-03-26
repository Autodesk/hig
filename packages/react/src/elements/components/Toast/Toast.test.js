import React from "react";
import { mount } from "enzyme";
import Toast from "./index";
import { IconButton } from "../../../hig-react";

describe("Toast", () => {
  it("renders the message", () => {
    const wrapper = mount(<Toast>Who wants toast?</Toast>);
    expect(wrapper).toIncludeText("Who wants toast?");
  });

  it("passes onDismiss to the dismiss IconButton", () => {
    const onDismissFn = jest.fn();
    const wrapper = mount(
      <Toast onDismiss={onDismissFn}>Who wants toast?</Toast>
    );

    expect(wrapper.find(IconButton)).toHaveProp("onClick", onDismissFn);
  });

  describe("images", () => {
    it("adds an image to the expected container", () => {
      const thumbnail = (
        <img src="placekitten.com/g/60/60" alt="placekitten 60x60" />
      );
      const wrapper = mount(<Toast image={thumbnail}>Who wants toast?</Toast>);

      expect(
        wrapper.containsMatchingElement(
          <div className="hig__toast__image-container">{thumbnail}</div>
        )
      ).toBe(true);
    });

    it("prefers rendering an image over a status icon", () => {
      const thumbnail = (
        <img src="placekitten.com/g/60/60" alt="placekitten 60x60" />
      );
      const wrapper = mount(
        <Toast showStatusIcon image={thumbnail}>
          Who wants toast?
        </Toast>
      );

      expect(
        wrapper.containsMatchingElement(
          <div className="hig__toast__image-container">{thumbnail}</div>
        )
      ).toBe(true);
    });
  });

  describe("statuses", () => {
    it("is primary by default", () => {
      const wrapper = mount(<Toast>Who wants toast?</Toast>);
      expect(wrapper).toHaveProp("status", "primary");
    });

    it("adds the appropriate style to the component", () => {
      const withoutStatus = mount(<Toast>Who wants toast?</Toast>);
      expect(withoutStatus.find(".hig__toast")).not.toHaveClassName(
        "hig__toast--success"
      );

      const withStatus = mount(
        <Toast status="success">Who wants toast?</Toast>
      );
      expect(withStatus.find(".hig__toast")).toHaveClassName(
        "hig__toast--success"
      );
    });
  });

  describe("status icons", () => {
    it("is true by default", () => {
      const wrapper = mount(<Toast>Who wants toast?</Toast>);
      expect(wrapper).toHaveProp("showStatusIcon", true);
    });

    it("renders an icon into the expected container", () => {
      const withoutIcon = mount(
        <Toast status="success" showStatusIcon={false}>
          Who wants toast?
        </Toast>
      );
      expect(withoutIcon.find(".hig__toast__image-container")).toHaveLength(0);

      const withIcon = mount(
        <Toast status="success" showStatusIcon>
          Who wants toast?
        </Toast>
      );
      expect(withIcon.find(".hig__toast__image-container")).toHaveLength(1);
    });
  });
});
