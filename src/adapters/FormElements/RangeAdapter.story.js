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
      <div>
        <RangeAdapter
          disabled={boolean('Disabled', false)}
          label={text('label text', "It goes to eleven")}
          minValue={number("min volume", 1)}
          maxValue={number("max volume", 11)}
          step={number("step value", 1)}
          onChange={action('change')}
          required={text('required text', 'This is the volume')}
          value={1}
        />
        <RangeAdapter
          label="Turn it up"
          instructions="Pump up the volume"
          required="this field is required."
          minValue={0}
          maxValue={21}
          value={21}
          step={1}
        />
      </div>
    );
  });
