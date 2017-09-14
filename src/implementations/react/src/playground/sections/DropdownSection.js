import React, { Component } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Dropdown } from '../../hig-react';

class DropdownSection extends Component {
  render() {
    return (
      <PlaygroundSection title="Dropdown">
        <Dropdown
          label="Regular Dropdown"
          instructions="instructions for regular dropdown"
          placeholder="placeholder for regular dropdown"

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