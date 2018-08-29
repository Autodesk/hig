import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Dropdown from "../index";
import getKnobs from "./getKnobs";
import infoOptions from "./infoOptions";

const storybook = storiesOf("Forms|Dropdown", module);

class Sample extends React.Component {
  state = {
    selected: false
  };

  handleChange = event => {
    console.log(event);
    this.setState({ selected: event.target.value });
  };

  render() {
    return (
      <Dropdown
        {...this.props}
        onChange={event => {
          console.log(event);
        }}
        onTextEntryChange={event => {
          console.log(event);
        }}
      />
    );
  }
}

storybook.add(
  "default",
  withInfo(infoOptions)(() => {
    const props = {
      hasTextEntry: true,
      instructions: "Choose one HIG theme to apply to your entire app.",
      label: "HIG Theme",
      options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"],
      placeholder: "Select a theme"
    };
    const { children, ...otherProps } = getKnobs(props);

    return <Sample {...otherProps} />;
  })
);
