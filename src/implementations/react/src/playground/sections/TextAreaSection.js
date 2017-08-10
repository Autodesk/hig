import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { TextArea } from '../../react-hig';

function logEvent(event, higElement) {
  let messageParts = [
    `${higElement.constructor.name} triggered an ${event.type} event`
  ];
  if (event.target.value !== undefined) {
    messageParts = messageParts.concat(`: ${event.target.value}`);
  }
  console.log(messageParts.join(''));
}

function TextAreaSection() {
  return (
    <PlaygroundSection title="TextArea">
      <TextArea
        label="Tab title"
        placeholder="Foo"
        required="This field is required."
        onBlur={logEvent}
        onChange={logEvent}
        onFocus={logEvent}
        onInput={logEvent}
        name="say-my-name"
      />
    </PlaygroundSection>
  )
}
export default TextAreaSection;