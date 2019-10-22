import React from "react";
import renderer from "react-test-renderer";

import Accordion from "./Accordion";
import { indicators, indicatorPositions } from "./constants";

describe("Accordion/Accordion", () => {
  it("renders default collapsed accordion", () => {
    const wrapper = <Accordion label="foo">bar</Accordion>;
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders default expanded accordion", () => {
    const wrapper = (
      <Accordion label="foo" collapsed={false}>
        bar
      </Accordion>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders using operator as indicator", () => {
    const wrapper = (
      <Accordion label="foo" indicator={indicators.OPERATOR}>
        bar
      </Accordion>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders indicator in the right", () => {
    const wrapper = (
      <Accordion label="foo" indicatorPosition={indicatorPositions.RIGHT}>
        bar
      </Accordion>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
