import React from "react";
import renderer from "react-test-renderer";
import { Settings24 } from "@hig/icons";

import TabPresenter from "./TabPresenter";
import { variants, orientations } from "../constants";

describe("tabs/TabPresenter", () => {
  const cases = [
    {
      description: "renders without props",
      props: {},
    },
    {
      description: "renders with all props",
      props: {
        active: true,
        label: "Hello World",
        icon: <Settings24 />,
        closable: true,
        variant: variants.BOX,
        orientation: orientations.HORIZONTAL,
        showDivider: true,
        onBlur: function onBlur() {},
        onClick: function handleClick() {},
        onFocus: function onFocus() {},
        onKeyDown: function handleKeyDown() {},
        onMouseEnter: function onMouseEnter() {},
        onMouseLeave: function onMouseLeave() {},
      },
    },
  ];

  cases.forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const wrapper = <TabPresenter {...otherProps}>{children}</TabPresenter>;
      const tree = renderer.create(wrapper).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
