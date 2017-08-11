import React, { Component } from "react";
import { Dropdown } from "../../react-hig";

const Option = Dropdown.Option;

class DropdownSection extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Dropdown instructions="test instructions" label="Dropdown label" value="test" open={true}>
        <Option label="Option Label" value="Option Value" selected={true} />
      </Dropdown>
    );
  }
}

export default DropdownSection;