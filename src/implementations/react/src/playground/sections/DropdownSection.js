import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Dropdown } from "../../react-hig";

const Option = Dropdown.Option;

const optionData = [
  { label: "text option label", value: "test option value", selected: true },
  {
    label: "text option label 1",
    value: "test option value 1",
    selected: false
  }
];

class DropdownSection extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  logEvent(event, higElement) {
    let messageParts = [
      `${higElement.constructor.name} triggered an ${event.type} event`
    ];
    if (event.target.value !== undefined) {
      messageParts = messageParts.concat(`: ${event.target.value}`);
    }
    console.log(messageParts.join(""));
  }

  setSelectedValue = (selectedOption) => {
    this.setState({
      selectedOptionLabel: selectedOption.label,
      open: false
    });
  };

  openDropdown = () => {
    this.setState({ open: true });
  };

  closeDropdown = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <PlaygroundSection title="Dropdown">
        <Dropdown
          instructions="test instructions"
          label="Dropdown label"
          selectedOptionLabel={this.state.selectedOptionLabel}
          placeholder="Select an option"
          open={this.state.open}
          onTargetClick={this.openDropdown}
          onClickOutside={this.closeDropdown}
          onBlur={this.logEvent}
          onFocus={this.logEvent}
          onKeypress={this.logEvent}
        >
          {optionData.map(option => {
            return (
              <Option
                label={option.label}
                value={option.value}
                selected={
                  option.label === this.state.selectedOptionLabel ? true : false
                }
                key={option.label}
                onClick={this.setSelectedValue.bind(this, {label: option.label, value: option.value})}
              />
            );
          })};
        </Dropdown>
        
        <Dropdown
          label="Disabled Dropdown"
          instructions="instructions for disabled dropdown"
          placeholder="placeholder for disabled dropdown"
          disabled={true}/>  
      </PlaygroundSection>
    );
  }
}

export default DropdownSection;
