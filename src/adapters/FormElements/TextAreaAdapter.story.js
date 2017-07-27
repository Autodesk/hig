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
import { text, select, boolean } from '@storybook/addon-knobs';

import { default as TextAreaAdapter } from './TextAreaAdapter';

storiesOf('TextAreaAdapter', module)
  .addWithInfo('By default', ``, () => {
    return (
      <TextAreaAdapter
        disabled={boolean('Disabled', false)}
        instructions={text('Instructions', '')}
        label={text('Label', 'My text field')}
        name={text('Name', 'my-text-field')}
        onBlur={action('blur')}
        onChange={action('change')}
        onFocus={action('focus')}
        onInput={action('input')}
        placeholder={text('Placeholder', 'Tell me how you really feel')}
        required={text('Required', '')}
      />
    );
  })
  .addWithInfo('With no label and no events', ``, () => {
    const iconOptions = {
      assets: 'Assets',
      gear: 'Gear'
    };

    return (
      <TextAreaAdapter
        disabled={boolean('Disabled', false)}
        instructions={text('Instructions', '')}
        name={text('Name', 'my-text-field')}
        placeholder={text('Placeholder', 'Tell me how you really feel')}
        required={text('Required', '')}
      />
    );
  });
