import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { default as Spacer } from './SpacerAdapter';
import {GlobalNav} from '../react-hig';
const Slot = GlobalNav.Slot;

const spacerStyle = {
  color: '#000000',
  backgroundColor: '#5e89c2',
  border: '1px solid #000000'
}

const paraStyle = {
  border: '1px solid #ffffff',
  backgroundColor: '#ffffff'
}


storiesOf('Spacer', module)
  .addWithInfo('Basic Spacer', '', () => {
    return (
      <div key='a' style={spacerStyle}>
        <Spacer
          key="b"
          type={text('spacer type', 'stack')}
          width={text('spacer with', 'xs')}
          inset={text('spacer inset', 'xs')}>
          <Slot key="dfslkfsdjlk">
            <p key='1' style={paraStyle} className="spacer_para">STACK M WIDTH</p>
            <p key='2' style={paraStyle} className="spacer_para">STACK XL INSET</p>
          </Slot>
        </Spacer>
      </div>
    );
  });
