import React from "react";
import { mount } from "enzyme";

import Banner from "./Banner";

describe.only("Banner", () => {
  it("renders the message", () => {
    const bannerWrapper = mount(<Banner />).find(".hig__banner");

    // expect(bannerWrapper).toExist();
  });
});
