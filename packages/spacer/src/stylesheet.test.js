import { mount } from "enzyme/build/index";
import React from "react";

import Spacer from "./Spacer";

describe("stylesheet", () => {
  it("allows overriding spacing", () => {
    const wrapper = mount(<Spacer spacing="m" />);
    expect(wrapper.find(".hig__spacer-v1").prop("style")).toMatchObject({
      height: "16px"
    });
  });

  it("allows overriding size", () => {
    const wrapper = mount(<Spacer size="40px" />);
    expect(wrapper.find(".hig__spacer-v1").prop("style")).toMatchObject({
      height: "40px"
    });
  });

  it("preferences size over spacing", () => {
    const wrapper = mount(<Spacer spacing="m" size="40px" />);
    expect(wrapper.find(".hig__spacer-v1").prop("style")).toMatchObject({
      height: "40px"
    });
  });
});
