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
import { text, select } from '@storybook/addon-knobs';

import TextLink from '../adapters/TextLinkAdapter';

storiesOf('TextLink', module)
  .addWithInfo('TextLink with href', ``, () => {

    const typeOptions = {
      'primary': 'Primary',
      'secondary': 'Secondary'
    };

    const type = select('Type', typeOptions, 'primary');

    return (
      <TextLink
        href="https://github.com/Autodesk/hig"
        type={type}
        text="TextLink"
      />
    );
  })
  .addWithInfo('TextLink with onClick', ``, () => {

    const typeOptions = {
      'primary': 'Primary',
      'secondary': 'Secondary'
    };

    const type = select('Type', typeOptions, 'primary');

    return (
      <TextLink
        type={type}
        text="TextLink"
        onClick={action('clicked')}
      />
    );
  })
