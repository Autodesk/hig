import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  const i18n = {
    foo: "Foo",
    bar: "Bar",
    baz: "Baz"
  };
  const options = Object.keys(i18n).sort();

  function getOptionBackgroundColor(props) {
    if (props.selected) {
      return "blue";
    }
    if (props.highlighted) {
      return "light-blue";
    }
    return "white";
  }

  function renderCustomOption(props) {
    return (
      <div
        key={props.label}
        style={{
          padding: "2px 4px",
          backgroundColor: getOptionBackgroundColor(props)
        }}
      >
        <div
          style={{
            backgroundColor: props.value,
            width: "32px",
            height: "24px"
          }}
        />
        <p>{props.label}</p>
      </div>
    );
  }

  function renderCustomOptionWithLabel({ label }) {
    return <div key={label}>{label.toUpperCase()}</div>;
  }

  const rendererOptions = {
    createNodeMock(element) {
      return document.createElement(element.type);
    }
  };

  const cases = [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with a label and an ID",
      props: {
        id: "whoaBuddy",
        label: "HIG Themes"
      }
    },
    {
      description: "renders with custom option formatting",
      props: {
        options,
        formatOption: key => i18n[key]
      }
    },
    {
      description: "renders non-undefined values as options",
      props: {
        options: ["foo", 1, true, false, null, [], {}, new Map()]
      }
    },
    {
      description: "renders with custom option render function",
      props: {
        options: ["renders", "with", "custom", "option", "render", "function"],
        renderOption: option => <div key={option}>{option.toUpperCase()}</div>
      }
    },
    {
      description: "renders with option specific render function",
      props: {
        options: [
          { label: "Red", value: "#ff0000", render: renderCustomOption },
          { label: "Green", value: "#00ff00", render: renderCustomOption },
          { label: "Blue", value: "#0000ff", render: renderCustomOption }
        ]
      }
    },
    {
      description:
        "renders with option specific and general option render function",
      props: {
        options: [
          { label: "Red", value: "#ff0000", render: renderCustomOption },
          { label: "Green", value: "#00ff00" },
          { label: "Blue", value: "#0000ff" }
        ],
        renderOption: renderCustomOptionWithLabel
      }
    },
    {
      description: "renders with option specific, general and format rendering",
      props: {
        formatOption: option => option.label.toUpperCase(),
        options: [
          { label: "Red", value: "#ff0000", render: renderCustomOption },
          { label: "Green", value: "#00ff00" },
          { label: "Blue", value: "#0000ff" }
        ],
        renderOption: renderCustomOptionWithLabel
      }
    },
    {
      description: "renders with default value",
      props: {
        options,
        defaultValue: "foo"
      }
    },
    {
      description: "renders with multiple selection",
      props: {
        options,
        multiple: true
      }
    },
    {
      description: "renders with a controlled value",
      props: {
        options,
        value: "foo"
      }
    },
    {
      description: "renders with multiple selection and a controlled value",
      props: {
        options,
        multiple: true,
        value: ["foo", "bar"]
      }
    }
  ];

  takeSnapshotsOf(Dropdown, cases, rendererOptions);
});
