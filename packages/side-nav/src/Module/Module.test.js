import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Module from "./Module";

describe("side-nav/Module", () => {
  describe("onClickTitle", () => {
    it("adds click handler to title", () => {
      const onClickTitle = jest.fn();
      const wrapper = mount(
        <Module title="Module" onClickTitle={onClickTitle} />
      );

      wrapper.find(".hig__side-nav__module__link__title").simulate("click");
      expect(onClickTitle).toHaveBeenCalled();
    });
  });

  describe("onClickCollapseButton", () => {
    it("adds click handler to collapse button", () => {
      const onClickCollapseButton = jest.fn();
      const wrapper = mount(
        <Module title="Module" onClickCollapseButton={onClickCollapseButton}>
          Content
        </Module>
      );

      wrapper.find(".hig__side-nav__module__collapse-button").simulate("click");
      expect(onClickCollapseButton).toHaveBeenCalled();
    });
  });

  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with mionimal props",
        props: {
          title: "Module"
        }
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Module {...otherProps}>{children}</Module>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
