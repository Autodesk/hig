import React, { Component } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { TextArea } from '../../hig-react';

function logEvent(event, higElement) {
  let messageParts = [
    `TextArea triggered an ${event.type} event`
  ];
  if (event.target.value !== undefined) {
    messageParts = messageParts.concat(`: ${event.target.value}`);
  }
  console.log(messageParts.join(''));
}

class TextAreaSection extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  setValue = (event) => {
    console.log(event.target.value)
    this.setState({ value: event.target.value });
  }

  render() {
      return (
        <PlaygroundSection title="TextArea">
          <TextArea
            label="Tab title"
            placeholder="Foo"
            required="This field is required."
            onBlur={logEvent}
            onChange={logEvent}
            onFocus={logEvent}
            onInput={this.setValue}
            value={this.state.value}
          />
      </PlaygroundSection>
    )
  }
}

export default TextAreaSection;
