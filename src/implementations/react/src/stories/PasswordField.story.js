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

import PasswordFieldAdapter from '../adapters/FormElements/PasswordFieldAdapter';

storiesOf('PasswordFieldAdapter', module)
  .addWithInfo('Default', '', () => (
    <PasswordField label={text('Label', 'My text field')} />
  ))
  .addWithInfo('With knobs & events', '', () => (
    <PasswordFieldAdapter
      disabled={boolean('Disabled', false)}
      instructions={text('Instructions', 'Here are your instructions.')}
      label={text('Label', "What's the password?")}
      onBlur={action('blur')}
      onChange={action('change')}
      onFocus={action('focus')}
      onInput={action('input')}
      onPasswordHideButtonClick={action('Password HIDE Button clicked')}
      onPasswordRevealButtonClick={action('Password REVEAL Button clicked')}
      showPasswordRevealButton={boolean('Show PasswordReveal', true)}
      showPasswordHideButton={boolean('Show PasswordHide', false)}
      placeholder={text('Placeholder', "Shh! It's a secret!")}
      required={text('Required', 'Hint: it\'s not "password", "monkey", or "123456"')}
    />
  ));
