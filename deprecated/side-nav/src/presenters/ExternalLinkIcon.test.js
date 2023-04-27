import { shallow } from "enzyme";
import React from "react";
import { ExternalLink16, ExternalLink24, sizes as iconSizes } from "@weave-design/icons";

import ExternalLinkIcon from "./ExternalLinkIcon";

describe("side-nav/presenters/ExternalLinkIcon", () => {
  it("defaults to the External Link 24px icon", () => {
    const wrapper = shallow(<ExternalLinkIcon />);
    expect(wrapper.type()).toEqual(ExternalLink24);
  });

  it("allows size to be overridden", () => {
    const wrapper = shallow(<ExternalLinkIcon size={iconSizes.PX_16} />);
    expect(wrapper.type()).toEqual(ExternalLink16);
  });
});
