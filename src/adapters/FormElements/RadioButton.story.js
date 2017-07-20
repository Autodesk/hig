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
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import RadioButton from './RadioButton';
import Slot from '../../elements/components/GlobalNav/Slot';

const containerStyle = {
  display: "flex"
};

storiesOf('RadioButton', module)
  .addWithInfo('Basic radioButton group', '', () => {
    return (
      <div style={containerStyle}>
        <RadioButton
          name={text("radioButtonName1","basic")}
          value={text("radioButtonValue1", "yes")}
          label={text("radioButtonLabel1", "yes")}
        />
        <RadioButton
          name={text("radioButtonName2","basic")}
          value={text("radioButtonValue2", "no")}
          label={text("radioButtonLabel2", "no")}
        />
        <RadioButton
          name={text("radioButtonName3","basic")}
          value={text("radioButtonValue3", "maybe")}
          label={text("radioButtonLabel3", "maybe")}
        />
      </div>
    )
  })
  .addWithInfo('with other options', '', () =>{
    const valueOptions = {
      extra: '2',
      really: '1',
      basic: '0'
    };

    return(
      <div style={containerStyle}>
        <RadioButton
            name="is_it_fancy"
            value='fanciness'
            label="Fancy!"
            checked={false}
            required={boolean('Required', true)}
        />
        <RadioButton
            name="checked"
            value="hello"
            label="checked"
            checked={boolean('Checked', true)}
        />
        <RadioButton
          name="disabled"
          value="hello"
          label="disabled"
          disabled={boolean('Disabled', true)}
        />
      </div>
    )
  })
  .addWithInfo('with Events defined', '', () => {

    return(
          <div style={containerStyle}>
            <RadioButton
                name="choisessez"
                value="un"
                label="un"
                onHover={action("hovered 'un'")}
                onChange={action("changed 'un'")}
                onFocus={action("focused 'un'")}
            />
            <RadioButton
              name="choisessez"
              value="deux"
              label="deux"
              onHover={action("hovered 'deux'")}
              onChange={action("changed 'deux'")}
              onFocus={action("focused 'deux'")}
            />
            <RadioButton
              name="choisessez"
              value="troi"
              label="troi"
              onHover={action("hovered 'troi'")}
              onChange={action("changed 'troi'")}
              onFocus={action("focused 'troi'")}
            />
          </div>
    )
  })
;
