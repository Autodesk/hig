import React from "react";
import renderer from "react-test-renderer";

import ModulePresenter from "./ModulePresenter";

describe("side-nav/Module/presenters/ModulePresenter", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with minimal props",
        props: {
          title: "ModulePresenter",
        },
      },
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = (
          <ModulePresenter {...otherProps}>{children}</ModulePresenter>
        );
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
