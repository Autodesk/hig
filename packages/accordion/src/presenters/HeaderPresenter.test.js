import React from "react";
import renderer from "react-test-renderer";

import HeaderPresenter from "./HeaderPresenter";
import { indicators, indicatorPositions } from "../constants";

describe("Accordion/HeaderPresenter", () => {
  it("renders defaut collapsed header", () => {
    const wrapper = <HeaderPresenter label="foo" collapsed />;
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders expanded header", () => {
    const wrapper = <HeaderPresenter label="foo" collapsed={false} />;
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders using operator as indicator", () => {
    const wrapper = (
      <HeaderPresenter label="foo" indicator={indicators.OPERATER} />
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders indicator in the right", () => {
    const wrapper = (
      <HeaderPresenter
        label="foo"
        indicatorPosition={indicatorPositions.RIGHT}
      />
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
