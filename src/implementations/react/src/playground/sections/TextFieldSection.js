import React, { Component } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { TextField } from '../../react-hig';

class TextFieldSection extends Component {
  constructor() {
    super();
    this.state = {};
  }

  setTextFieldValue = (event) => {
    this.setState({ textFieldValue: event.target.textFieldValue });
  }

  logEvent(event, higElement) {
    let messageParts = [
      `${higElement.constructor.name} triggered an ${event.type} event`
    ];
    if (event.target.value !== undefined) {
      messageParts = messageParts.concat(`: ${event.target.value}`);
    }
    console.log(messageParts.join(''));
  }

  render() {
    return (
      <PlaygroundSection title="TextField">
        <TextField
          label="Tab title"
          placeholder="Foo"
          onBlur={this.logEvent}
          onChange={this.logEvent}
          onFocus={this.logEvent}
          onInput={this.setTextFieldValue}
          value={this.state.textFieldValue}
          required="This field is required."
        />
      </PlaygroundSection>
    )
  }
}
export default TextFieldSection;