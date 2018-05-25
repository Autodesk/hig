import React from "react";
import renderer from "react-test-renderer";

import LogoText from "./LogoText";

describe("top-nav/LogoText", () => {
  const cases = [
    {
      description: "renders with children",
      props: {
        children: <span>Autodesk HIG</span>
      }
    }
  ];

  cases.forEach(({ description, props }) => {
    it(description, () => {
      const tree = renderer.create(<LogoText {...props} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
