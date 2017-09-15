import React, { Component } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Dropdown } from '../../hig-react';

class DropdownSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'bar value'
    }
  }

  setValue = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <PlaygroundSection title="Dropdown">
        <Dropdown
          label="Controlled Dropdown"
          instructions="instructions for regular Controlled dropdown"
          placeholder="placeholder for regular Controlled dropdown"
          options={
            [
              {
                label: "foo",
                value: "foo value"
              }, {
                label: "bar",
                value: "bar value"
              }
            ]
          }
          value={this.state.value}
          onChange={this.setValue}
        />

        <Dropdown
          label="Uncontrolled Dropdown"
          instructions="instructions for regular Uncontrolled dropdown"
          placeholder="placeholder for regular Uncontrolled dropdown"
          options={
            [
              {
                label: "foo",
                value: "foo value"
              }, {
                label: "bar",
                value: "bar value"
              }
            ]
          }
          defaultValue="bar value"
          onChange={(id) => { console.log(id); }}
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