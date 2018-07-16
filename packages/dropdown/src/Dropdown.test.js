import renderer from "react-test-renderer";
import React from "react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  const i18n = {
    foo: "Foo",
    bar: "Bar",
    baz: "Baz"
  };

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
        options: Object.keys(i18n).sort(),
        formatOption: key => i18n[key]
      }
    },
    {
      desc: "renders non-undefined values as options",
      props: {
        options: ["foo", 1, true, false, null, [], {}, new Map(), new Date()]
      }
    }
  ].forEach(({ desc, props }) => {
    it(desc, () => {
      const tree = renderer.create(<Dropdown {...props} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
