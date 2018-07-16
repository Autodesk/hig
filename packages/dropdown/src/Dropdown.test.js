import renderer from "react-test-renderer";
import React from "react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with a label and an ID",
      props: {
        id: "whoaBuddy",
        label: "HIG Themes"
      }
    },
    {
      desc: "renders with custom option formatting",
      props: {
        formatOption: option => JSON.stringify(option)
      }
    }
  ].forEach(({ desc, props }) => {
    it(desc, () => {
      const tree = renderer.create(<Dropdown {...props} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
