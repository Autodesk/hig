import React from 'react';
import Checkbox from '@hig/checkbox';
import Label from '@hig/label';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

const states = [
  { label: "interactive", props: {} },
  { label: "checked", props: { checked: true } },
  { label: "indeterminate", props: { indeterminate: true } },
  { label: "disabled", props: { disabled: true } },
  { label: "checked + disabled", props: { checked: true, disabled: true } },
  { label: "indeterminate + disabled", props: { indeterminate: true, disabled: true } },
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
                <Checkbox id={key} {...props}/>
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
