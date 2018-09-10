import { mount } from "enzyme/build/index";
import React from "react";

import Spacer from "./Spacer";

describe("stylesheet", () => {
  it("allows overriding spacing", () => {
    const wrapper = mount(<Spacer spacing="m" />);
    expect(wrapper.props("style")).toMatchObject({
      spacing: "m"
    });
  });

  it("allows overriding size", () => {
    const wrapper = mount(<Spacer size="40px" />);
    expect(wrapper.props("style")).toMatchObject({
      size: "40px"
    });
  });

  it("preferences size over spacing", () => {
    const wrapper = mount(<Spacer spacing="m" size="40px" />);
    expect(wrapper.props("style")).toMatchObject({
      size: "40px"
    });
  });
});
