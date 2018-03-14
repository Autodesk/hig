import React from "react";
import { mount } from "enzyme";
import Toast from "./Toast";
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

  describe("statuses", () => {
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
});
