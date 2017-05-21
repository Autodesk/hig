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
import { text } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Button', module).addWithInfo(
  'regular button',
  <div>
    <p>
      A button is an element that a customer clicks or taps to trigger an action
      or change within the interface. To change the customer's location within
      or between interfaces, use a textual link.
    </p>
    <p>
      For content guidelines and common combinations of buttons, view
      the
      {' '}
      <a href="https://wiki.autodesk.com/display/HIG/Button+Text">
        button text content pattern
      </a>
      .
    </p>
  </div>,
  () => <Button onClick={action('clicked')} title="Hello Button" />
);
