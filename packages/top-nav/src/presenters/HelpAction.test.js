import React from "react";
import renderer from "react-test-renderer";

import HelpAction from "./HelpAction";

describe("top-nav/HelpAction", () => {
  const cases = [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with children",
      props: {
        children: <div className="logo" />
      }
    },
    {
      description: "renders with children and onClick",
      props: {
        children: <div className="logo" />,
        onClick: () => {}
      }
    }
  ];

  cases.forEach(({ description, props }) => {
    it(description, () => {
      const tree = renderer.create(<HelpAction {...props} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
