import React from 'react';
import RadioButton from '@hig/radio-button';
import Label from '@hig/label';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

const states = [
  { label: "interactive", props: {} },
  { label: "checked", props: { checked: true } },
  { label: "disabled", props: { disabled: true } },
  { label: "checked + disabled", props: { checked: true, disabled: true } },
];

function RadioButtonPage() {
  return (
    <ThemeRepeater>{({ id }) => (
      <div>
        {states.map(({ label, props }) => {
          const key = `${id}-${label}`;
          const name = `name-${key}`;
          return (
            <div key={label}>
              <div style={{display: 'flex'}}>
                <RadioButton name={name} id={key} {...props}/>
                <Spacer spacing="xs" />
                <Label htmlFor={key} disabled={props.disabled}>{label}</Label>
              </div>
              <Spacer />
            </div>
          )
        })}
      </div>
    )}</ThemeRepeater>
  );
}

export default RadioButtonPage;
