import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';

import Dropdown from '../adapters/FormElements/DropdownAdapter';

const Option = Dropdown.Option;

const OptionData = [
  { label: 'text option label', value: 'test option value', selected: true },
  {
    label: 'text option label 1',
    value: 'test option value 1',
    selected: false
  }
];

storiesOf('Dropdown', module)
  .addWithInfo('default dropdown open with options', '', () => (
    <Dropdown
      instructions="test instructions"
      label="Dropdown Label"
      selectedOptionLabel={OptionData[0].label}
      open
      onTargetClick={action('Target clicked')}
      onClickOutside={action('onClick outside')}
      onBlur={action('on Blur')}
      onFocus={action('on Focus')}
      onKeyPress={action('onKeypress')}
      required={'This field is required'}
    >
      <Option
        label={OptionData[0].label}
        value={OptionData[0].value}
        selected
      />
      <Option
        label={OptionData[1].label}
        value={OptionData[1].value}
        selected={false}
      />
    </Dropdown>
  ))
  .addWithInfo('default dropdown closed with options', '', () => (
    <Dropdown
      instructions="test instructions"
      label="Dropdown Label"
      selectedOptionLabel={OptionData[0].label}
      open={false}
      onTargetClick={action('Target clicked')}
      onClickOutside={action('onClick outside')}
      onBlur={action('on Blur')}
      onFocus={action('on Focus')}
      onKeyPress={action('onKeypress')}
      required={'This field is required'}
    >
      <Option
        label={OptionData[0].label}
        value={OptionData[0].value}
        selected
      />
      <Option
        label={OptionData[1].label}
        value={OptionData[1].value}
        selected={false}
      />
    </Dropdown>
  ))
  .addWithInfo('disabled dropdown', '', () => (
    <Dropdown
      instructions="test instructions"
      label="Dropdown Label"
      selectedOptionLabel={OptionData[0].label}
      disabled
      open={false}
      onTargetClick={action('Target clicked')}
      onClickOutside={action('onClick outside')}
      onBlur={action('on Blur')}
      onFocus={action('on Focus')}
      onKeyPress={action('onKeypress')}
    >
      <Option
        label={OptionData[0].label}
        value={OptionData[0].value}
        selected
      />
      <Option
        label={OptionData[1].label}
        value={OptionData[1].value}
        selected={false}
      />
    </Dropdown>
  ));

