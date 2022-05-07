import React from "react";
import renderer from "react-test-renderer";

import PanelPresenter from "./PanelPresenter";

describe("flyout/presenters/PanelPresenter", () => {
  [
    {
      description: "renders without props",
      props: {},
    },
    {
      description: "renders with all props",
      props: {
        onScroll: function onScroll() {},
        children: "Hello World",
      },
    },
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <PanelPresenter {...otherProps}>{children}</PanelPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
