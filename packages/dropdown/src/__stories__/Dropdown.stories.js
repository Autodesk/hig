import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Dropdown from "../index";
import getKnobs from "./getKnobs";
import infoOptions from "./infoOptions";

const storybook = storiesOf("Forms|Dropdown", module);

class Sample extends React.Component {
  state = {
    item: "HIG Light Theme",
    filter: ""
  };

  handleOptionChange = optionValue => {
    console.log("option changed: ", optionValue);
    this.setState({ item: optionValue, filter: "" });
  };

  handleTextEntryChange = inputValue => {
    console.log("input value changed: ", inputValue);
    this.setState({ item: inputValue, filter: inputValue });
  };

  filterOptions = () =>
    this.props.options.filter(o =>
      o.toLowerCase().match(this.state.filter.toLowerCase())
    );

  render() {
    const options = this.filterOptions();
    return (
      <Dropdown
        {...this.props}
        options={options}
        onChange={this.handleOptionChange}
        inputValue={
          this.state.filter.length > 0 ? this.state.filter : this.state.item
        }
        onInputValueChange={this.handleTextEntryChange}
        value={this.state.item}
      />
    );
  }
}

storybook.add(
  "default",
  withInfo(infoOptions)(() => {
    const props = {
      hasTextEntry: false,
      instructions: "Choose one HIG theme to apply to your entire app.",
      label: "HIG Theme",
      options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"],
      placeholder: "Select a theme"
    };
    const { children, ...otherProps } = getKnobs(props);

    return <Sample {...otherProps} />;
  })
);
