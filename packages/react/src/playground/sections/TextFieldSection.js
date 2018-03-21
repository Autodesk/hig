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

  logEvent = event => {
    let messageParts = [`TextField triggered an ${event.type} event`];
    if (event.target.value !== undefined) {
      messageParts = messageParts.concat(`: ${event.target.value}`);
    }
    console.log(messageParts.join(""));
  };

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

        <TextField
          label="Text field where instructions show errors"
          placeholder="Example text"
          onBlur={this.logEvent}
          onChange={this.logEvent}
          onClearButtonClick={this.clearValue}
          onFocus={this.logEvent}
          onInput={this.setValue}
          value={this.state.value}
          required="This field is required."
          showClearButton={this.state.value.length > 0}
          instructions="These are your instructions"
          errors="" // Can be an empty string to have the instructions appear as errors
        />

        <TextField
          label="Text field where error text is displayed instead of instructions"
          placeholder="Example text"
          onBlur={this.logEvent}
          onChange={this.logEvent}
          onClearButtonClick={this.clearValue}
          onFocus={this.logEvent}
          onInput={this.setValue}
          value={this.state.value}
          required="This field is required."
          showClearButton={this.state.value.length > 0}
          instructions="These are your instructions"
          errors="Here is your error string"
          hideInstructionsOnErrors
        />
      </PlaygroundSection>
    );
  }
}

export default TextFieldSection;
