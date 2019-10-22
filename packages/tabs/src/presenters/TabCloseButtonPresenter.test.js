import React from "react";
import renderer from "react-test-renderer";
import TabCloseButtonPresenter from "./TabCloseButtonPresenter";

describe("tabs/TabCloseButtonPresenter", () => {
  const cases = [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        disabled: true,
        onBlur: () => {},
        onFocus: () => {},
        onMouseDown: () => {},
        onMouseEnter: () => {},
        onMouseLeave: () => {},
        onMouseUp: () => {},
        onClick: () => {}
      }
    }
  ];

  cases.forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const wrapper = <TabCloseButtonPresenter {...otherProps} />;
      const tree = renderer.create(wrapper).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
