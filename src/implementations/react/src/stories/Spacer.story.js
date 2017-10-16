import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

import Spacer from '../adapters/SpacerAdapter';
import { GlobalNav } from '../hig-react';

const Slot = GlobalNav.Slot;

const spacerStyle = {
  color: '#000000',
  backgroundColor: '#5e89c2',
  border: '1px solid #000000'
};

const paraStyle = {
  border: '1px solid #ffffff',
  backgroundColor: '#ffffff'
};

const spanStyle = {
  border: '1px solid #ffbbbb',
  backgroundColor: '#ffbbbb',
};


const typeOptions = { inline: 'inline', stack: 'stack' };
const sizeOptions = { none: 'none', xxs: 'xxs', xs: 'xs', s: 's', m: 'm', l: 'l', xl: 'xl', xxl: 'xxl' };

storiesOf('Spacer', module)
  .addWithInfo('Basic Spacer', '', () => (
    <div>
      <div key="a" style={spacerStyle}>
        <Spacer
          key="c"
          type={select('spacer1 type', typeOptions, 'stack')}
          width={select('spacer1 width', sizeOptions, 'm')}
          inset={select('spacer1 inset', sizeOptions, 'm')}
        >
          <Slot key="foo">
            <p key="1" style={paraStyle} className="spacer_para">STACK M WIDTH</p>
            <p key="2" style={paraStyle} className="spacer_para">STACK XL INSET</p>
          </Slot>
        </Spacer>
      </div>
      <div>
        <Spacer
          key="d"
          type={select('spacer2 type', typeOptions, 'inline')}
          width={select('spacer2 width', sizeOptions, 'm')}
          inset={select('spacer2 inset', sizeOptions, 'm')}
        >
          <Slot key="bar">
            <span key="1" style={paraStyle} className="spacer_para">STACK M WIDTH</span>
            <span>&nbsp;</span>
            <span key="2" style={paraStyle} className="spacer_para">STACK XL INSET</span>
          </Slot>
        </Spacer>
      </div>
    </div>
  ));
