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

  const optionSpecificRender = optionProps => {
    const optionBackgroundColor = props => {
      if (props.selected) {
        return "blue";
      }
      if (props.highlighted) {
        return "light-blue";
      }
      return "white";
    };

    return (
      <div
        style={{
          padding: "2px 4px",
          backgroundColor: optionBackgroundColor(optionProps)
        }}
      >
        <div
          style={{
            backgroundColor: optionProps.value,
            width: "32px",
            height: "24px"
          }}
        />
        <p>{optionProps.label}</p>
      </div>
    );
  };

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
      desc: "renders with custom option render function",
      props: {
        options: ["renders", "with", "custom", "option", "render", "function"],
        renderOption: option => <div>{option.toUpperCase()}</div>
      }
    },
    {
      desc: "renders with option specific render function",
      props: {
        options: [
          { label: "Red", value: "#ff0000", render: optionSpecificRender },
          { label: "Green", value: "#00ff00", render: optionSpecificRender },
          { label: "Blue", value: "#0000ff", render: optionSpecificRender }
        ]
      }
    },
    {
      desc: "renders with option specific and general option render function",
      props: {
        options: [
          { label: "Red", value: "#ff0000", render: optionSpecificRender },
          { label: "Green", value: "#00ff00" },
          { label: "Blue", value: "#0000ff" }
        ],
        renderOption: option => <div>{option.label.toUpperCase()}</div>
      }
    },
    {
      desc: "renders with option specific, general and format rendering",
      props: {
        formatOption: option => option.label.toUpperCase(),
        options: [
          { label: "Red", value: "#ff0000", render: optionSpecificRender },
          { label: "Green", value: "#00ff00" },
          { label: "Blue", value: "#0000ff" }
        ],
        renderOption: option => <div>{option.label.toUpperCase()}</div>
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
