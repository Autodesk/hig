import React from "react";
import renderer from "react-test-renderer";

import SideNav from "./SideNav";

describe("side-nav/presenters/SideNav", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders without props",
        props: {}
      },
      {
        description: "renders with headers",
        props: {
          headerLabel: "Storybook",
          superHeaderLabel: "HIG"
        }
      },
      {
        description: "renders headers with onClick",
        props: {
          headerLabel: "Storybook",
          onClickHeader: () => jest.fn(),
          superHeaderLabel: "HIG",
          superHeaderLink: "/",
          onClickSuperHeader: () => jest.fn()
        }
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <SideNav {...otherProps}>{children}</SideNav>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
