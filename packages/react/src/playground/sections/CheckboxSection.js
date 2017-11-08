/* eslint-disable no-console */
import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Checkbox } from "../../hig-react";

const checkboxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

function logEvent(event) {
  let messageParts = [`Checkbox triggered a ${event.type} event`];
  if (event.target.value !== undefined) {
    messageParts = messageParts.concat(`: ${event.target.value}`);
  }
  console.log(messageParts.join(""));
}

class CheckboxSection extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      controlledChecked: false
    };
  }

  setControlledChecked = event => {
    this.setState({ controlledChecked: event.target.checked });
  };

  render() {
    return (
      <PlaygroundSection title="Checkbox">
        <div style={checkboxStyle}>
          <Checkbox label="Required" required="You must check this box" />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled + Checked" checked disabled />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox
            label="Controlled"
            checked={this.state.controlledChecked}
            onChange={this.setControlledChecked}
          />
          <Checkbox label="Uncontrolled" />
          <Checkbox label="Uncontrolled w/ default" defaultChecked />
          <Checkbox
            label="With event logging"
            onHover={logEvent}
            onChange={logEvent}
            onFocus={logEvent}
          />
        </div>
      </PlaygroundSection>
    );
  }
}
export default CheckboxSection;
