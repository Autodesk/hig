import React from "react";
import renderer from "react-test-renderer";

import PanelContainerPresenter from "./PanelContainerPresenter";

describe("flyout/presenters/PanelContainerPresenter", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        maxHeight: 150,
        innerRef: function innerRef() {},
        children: "Hello World"
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <PanelContainerPresenter {...otherProps}>
          {children}
        </PanelContainerPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
