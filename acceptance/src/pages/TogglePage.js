import React from 'react';
import Toggle from '@hig/toggle';
import Label from '@hig/label';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

const states = [
  { label: "interactive", props: {} },
  { label: "on", props: { on: true } },
  { label: "disabled", props: { disabled: true } },
];

function CheckboxPage() {
  return (
    <ThemeRepeater>{({ id }) => (
      <div>
        {states.map(({ label, props }) => {
          const key= `${id}-${label}`;
          return (
            <div key={label}>
              <div style={{display: 'flex'}}>
                <Toggle id={key} {...props}/>
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

export default CheckboxPage;
