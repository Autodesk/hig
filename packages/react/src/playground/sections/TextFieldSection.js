/* eslint-disable no-console */
import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { TextField } from "../../hig-react";

class TextFieldSection extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  setValue = event => {
    this.setState({ value: event.target.value });
  };

  clearValue = () => {
    this.setState({ value: "" });
  };

  logEvent(event) {
    let messageParts = [`TextField triggered an ${event.type} event`];
    if (event.target.value !== undefined) {
      messageParts = messageParts.concat(`: ${event.target.value}`);
    }
    console.log(messageParts.join(""));
  }

  render() {
    return (
      <PlaygroundSection title="TextField">
        <TextField
          label="Tab title"
          placeholder="Foo"
          onBlur={this.logEvent}
          onChange={this.logEvent}
          onClearButtonClick={this.clearValue}
          onFocus={this.logEvent}
          onInput={this.setValue}
          value={this.state.value}
          required="This field is required."
          showClearButton={this.state.value.length > 0}
        />
      </PlaygroundSection>
    );
  }
}

export default TextFieldSection;
