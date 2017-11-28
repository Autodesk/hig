import React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

describe("Container", () => {
  it("has the right class", () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toMatchSelector(".hig__container");
  });
});
