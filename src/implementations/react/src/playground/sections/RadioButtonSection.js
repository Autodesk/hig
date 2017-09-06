import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { RadioButton } from '../../hig-react';

const checkboxStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};

function logEvent(event) {
  let messageParts = [
    `RadioButton triggered a ${event.type} event`
  ];
  if (event.target.value !== undefined) {
    messageParts = messageParts.concat(`: ${event.target.value}`);
  }
  console.log(messageParts.join(''));
}

function RadioButtonSection() {
  return (
    <PlaygroundSection title="RadioButton">
      <div style={checkboxStyle}>
        <div>empty button<RadioButton /></div><hr />
        <RadioButton
          label="I AGREE"
          name="tsandcs"
          value="asd"
          required="Required"
        />
        <RadioButton
          label="Not required"
          name="tsandcs"
          value="dfdf"
          required={null}
        />
        <RadioButton
          label="Disabled"
          name="tsandcs"
          value="hhh"
          disabled={true}
        />
        <RadioButton
          label="Checked"
          name="tsandcs"
          value="werr"
          checked={true}
        />
        {' '}
        <hr />
        <RadioButton
          label="Click me"
          onHover={logEvent}
          onChange={logEvent}
          onFocus={logEvent}
        />
      </div>
    </PlaygroundSection>
  );
}
export default RadioButtonSection;