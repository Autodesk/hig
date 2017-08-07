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

import IconButton from './IconButton';

storiesOf('IconButton', module)
  .addWithInfo('Icon Button', ``, () => {
    return (
      <IconButton
        title="IconButton"
        link="#"
        icon="gear"
        onClick={action('clicked')}
        onHover={action('on hover')}
        onBlur={action('on blur')}
        onFocus={action('on focus')}
      />
    );
  })
  .addWithInfo('Disabled Button', ``, () => {
    return (
      <IconButton
        title="Disabled Icon Button"
        link="#"
        icon="gear"
        onClick={action('clicked')}
        onHover={action('on hover')}
        onBlur={action('on blur')}
        onFocus={action('on focus')}
        disabled={true}
      />
    );
  });
