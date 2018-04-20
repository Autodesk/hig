import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import SkeletonItem from "./SkeletonItem";

describe("skeleton-item/SkeletonItem", () => {
  describe("style props", () => {
    it("allows overriding maxWidth", () => {
      const wrapper = mount(<SkeletonItem maxWidth="100px" />);
      expect(wrapper.find(".hig__skeleton-item").prop("style")).toMatchObject({
        maxWidth: "100px"
      });
    });

    it("allows overriding marginBottom", () => {
      const wrapper = mount(<SkeletonItem marginBottom="12px" />);
      expect(wrapper.find(".hig__skeleton-item").prop("style")).toMatchObject({
        marginBottom: "12px"
      });
    });
  });

  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {}
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <SkeletonItem {...otherProps}>{children}</SkeletonItem>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
