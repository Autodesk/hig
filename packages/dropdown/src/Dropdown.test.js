import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  const i18n = {
    foo: "Foo",
    bar: "Bar",
    baz: "Baz"
  };
  const options = Object.keys(i18n).sort();
  const rendererOptions = {
    createNodeMock(element) {
      return document.createElement(element.type);
    }
  };
  const cases = [
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
        options,
        formatOption: key => i18n[key]
      }
    },
    {
      desc: "renders non-undefined values as options",
      props: {
        options: ["foo", 1, true, false, null, [], {}, new Map()]
      }
    },
    {
      desc: "renders with default value",
      props: {
        options,
        defaultValue: "foo"
      }
    },
    {
      desc: "renders with multiple selection",
      props: {
        options,
        multiple: true
      }
    },
    {
      desc: "renders with a controlled value",
      props: {
        options,
        value: "foo"
      }
    },
    {
      desc: "renders with multiple selection and a controlled value",
      props: {
        options,
        multiple: true,
        value: ["foo", "bar"]
      }
    }
  ];

  takeSnapshotsOf(Dropdown, cases, rendererOptions);
});
