import React from "react";
import renderer from "react-test-renderer";
import Icon, { names as iconNames } from "@hig/icon";
import ModuleCompactPresenter from "./ModuleCompactPresenter";

describe("side-nav/Module/presenters/ModuleCompactPresenter", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with minimal props",
        props: {
          icon: <Icon name={iconNames.COLLABORATION} />
        }
      }
    ];

    cases.forEach(({ description, props }) => {
      it(description, () => {
        const wrapper = <ModuleCompactPresenter {...props} />;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
