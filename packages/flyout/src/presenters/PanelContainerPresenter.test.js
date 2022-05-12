import React from "react";
import renderer from "react-test-renderer";

import PanelContainerPresenter from "./PanelContainerPresenter";

describe("flyout/presenters/PanelContainerPresenter", () => {
  function innerRef() {}

  [
    {
      description: "renders with only `innerRef`",
      props: {
        innerRef,
      },
    },
    {
      description: "renders with all props",
      props: {
        innerRef,
        maxHeight: 150,
        children: "Hello World",
      },
    },
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
