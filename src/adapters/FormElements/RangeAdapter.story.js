/**
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number, boolean } from '@storybook/addon-knobs';

import { default as RangeAdapter } from './RangeAdapter';

storiesOf('Range', module)
  .addWithInfo('By default', ``, () => {
    return (
      <RangeAdapter
        disabled={boolean('Disabled', false)}
        label={text('Label', 'How old is your pet?')}
        minValue={number("min age", 1)}
        maxValue={number("max age", 20)}
        step={number("step value", 1)}
        onBlur={action('blur')}
        onChange={action('change')}
        onFocus={action('focus')}
        onInput={action('input')}
        required={text('Please tell us', '')}
      />
    );
  })
  .addWithInfo('With no label and no events', ``, () => {
    return (
      <RangeAdapter
        disabled={boolean('Disabled', false)}
        instructions={text('Instructions', '')}
        name={text('Name', 'my-text-field')}
        placeholder={text('Placeholder', 'Tell me how you really feel')}
        required={text('Required', '')}
      />
    );
  });
