import React from "react";
import { shallow } from "enzyme";
import Toast from "./Toast";
import { IconButton } from "../../../hig-react";

describe("Toast", () => {
  it("renders the message", () => {
    const wrapper = shallow(<Toast>Who wants toast?</Toast>);
    expect(wrapper).toIncludeText("Who wants toast?");
  });

  it("passes onDismiss to the dismiss IconButton", () => {
    const onDismissFn = jest.fn();
    const wrapper = shallow(
      <Toast onDismiss={onDismissFn}>Who wants toast?</Toast>
    );

    expect(wrapper.find(IconButton)).toHaveProp("onClick", onDismissFn);
  });
});
