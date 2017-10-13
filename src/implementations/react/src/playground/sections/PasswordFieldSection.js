import React, { PureComponent } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { PasswordField } from '../../hig-react';

class PasswordFieldSection extends PureComponent {
  constructor() {
    super();
    this.state = {
      password: 'foo'
    };
  }

  setPassword = (event) => {
    // this.setState({ password: event.target.value });
  }

  logEvent(event, higElement) {
    let messageParts = [
      `PasswordField triggered an ${event.type} event`
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
          onInput={this.setPassword}
          value={this.state.password}
          onPasswordHideButtonClick={function () { 'clicked Password hide button'; }}
          onPasswordRevealButtonClick={function () { console.log('Password REVEAL clicked'); }}
          showPasswordRevealButton={false}
          showPasswordHideButton={false}
          placeholder="Enter the dragon, I mean password"
          required="Hint: It's not 'password', 'monkey', or '123456'"
        />
      </PlaygroundSection>
    );
  }
}
export default PasswordFieldSection;
