import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Dropdown, Checkbox } from "../../hig-react";

const options = [
  {
    label: "foo",
    value: "foo value"
  },
  {
    label: "bar",
    value: "bar value"
  }
];

class DropdownSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "bar value",
      options
    };
  }

  setValue = value => {
    this.setState({ value });
  };

  toggleOptions = event => {
    this.setState({
      options: event.target.checked
        ? options
        : [
            {
              label: "foo",
              value: "foo value"
            }
          ]
    });
  };

  render() {
    return (
      <PlaygroundSection title="Dropdown">
        <Checkbox
          title="Toggle options"
          onChange={this.toggleOptions}
          checked={this.state.options.length > 1}
        />
        <Dropdown
          label="Controlled Dropdown"
          instructions="instructions for regular Controlled dropdown"
          placeholder="placeholder for regular Controlled dropdown"
          options={this.state.options}
          value={this.state.value}
          onChange={this.setValue}
        />

        <Dropdown
          label="Uncontrolled Dropdown"
          instructions="instructions for regular Uncontrolled dropdown"
          placeholder="placeholder for regular Uncontrolled dropdown"
          options={[
            {
              label: "foo",
              value: "foo value"
            },
            {
              label: "bar",
              value: "bar value"
            }
          ]}
          defaultValue="bar value"
          onChange={id => {
            console.log(id);
          }}
        />

        <Dropdown
          label="Disabled Dropdown"
          instructions="instructions for disabled dropdown"
          placeholder="placeholder for disabled dropdown"
          disabled
        />
      </PlaygroundSection>
    );
  }
}

export default DropdownSection;
