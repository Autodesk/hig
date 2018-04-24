import { shallow } from "enzyme";
import React from "react";
import { names as iconNames, sizes as iconSizes } from "@hig/icon";

import ExternalLinkIcon from "./ExternalLinkIcon";

describe("side-nav/presenters/ExternalLinkIcon", () => {
  it("uses the External Link icon", () => {
    const wrapper = shallow(<ExternalLinkIcon />);
    expect(wrapper).toHaveProp("name", iconNames.EXTERNAL_LINK);
  });

  it("defaults to size PX_24", () => {
    const wrapper = shallow(<ExternalLinkIcon />);
    expect(wrapper).toHaveProp("size", iconSizes.PX_24);
  });

  it("allows size to be overridden", () => {
    const wrapper = shallow(<ExternalLinkIcon size={iconSizes.PX_16} />);
    expect(wrapper).toHaveProp("size", iconSizes.PX_16);
  });
});
