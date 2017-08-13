import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Dropdown } from "../../react-hig";

const Option = Dropdown.Option;

const optionData = [
  { label: "text option label", value: "test option value", selected: true} ,
  { label: "text option label 1", value: "test option value 1", selected: false}
];

class DropdownSection extends Component {
  constructor() {
    super();
    this.state = {};
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

  render() {
    return (
      <PlaygroundSection title="Dropdown">
        <Dropdown
          instructions="test instructions"
          label="Dropdown label"
          value="test"
          selectedOptionLabel={optionData[0].label}
          placeholder="Select an option"
        >
          {optionData.map(option => {
            return (
              <Option
                label={option.label}
                value={option.value}
                selected={option.selected}
                key={option.label}
                
              />
            );
          })};
        </Dropdown>
      </PlaygroundSection>
    );
  }
}

export default DropdownSection;