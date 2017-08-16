import React, { Component } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { PasswordField } from '../../react-hig';

class PasswordFieldSection extends Component {
  constructor() {
    super();
    this.state = {};
  }

  setPasswordFieldValue = (event) => {    
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
      <PlaygroundSection title="PasswordField">
        <PasswordField
          disabled={false}
          instructions="Type something"
          label="What's the password?"
          onBlur={this.logEvent}
          onChange={this.logEvent}
          onFocus={this.logEvent}
          onInput={this.logEvent}
          onPasswordHideButtonClick={function() {"clicked Password hide button"}}
          onPasswordRevealButtonClick={function(){console.log('Password REVEAL clicked')}}
          showPasswordRevealButton={false}
          showPasswordHideButton={false}
          placeholder="Enter the dragon, I mean password"
          required="Hint: It's not 'password', 'monkey', or '123456'"
        />
      </PlaygroundSection>
    )
  }
}
export default PasswordFieldSection;