import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import TopNav from "./TopNav";

describe("top-nav/TopNav", () => {
  const cases = [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with actions and logo",
      props: {
        leftActions: <div className="leftActions" />,
        rightActions: <div className="rightActions" />,
        logo: <div className="logo" />
      }
    }
  ];

  cases.forEach(({ description, props }) => {
    it(description, () => {
      const wrapper = <TopNav {...props} />;
      const tree = renderer.create(wrapper).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
