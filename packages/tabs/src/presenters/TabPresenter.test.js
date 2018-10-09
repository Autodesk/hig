import React from "react";
import renderer from "react-test-renderer";

import TabPresenter from "./TabPresenter";

describe("tabs/TabPresenter", () => {
  const cases = [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        active: true,
        label: "Hello World",
        onClick: function handleClick() {},
        onKeyDown: function handleKeyDown() {}
      }
    }
  ];

  cases.forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const wrapper = <TabPresenter {...otherProps}>{children}</TabPresenter>;
      const tree = renderer.create(wrapper).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
