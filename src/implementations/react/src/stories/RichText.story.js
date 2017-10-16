import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { RichText } from '../react-hig';

storiesOf('Typography elements', module)
  .addWithInfo('All Elements', '', () => {
    const content = text('Content', `

    `);
    return (
      <RichText>
        <h1>H1: example text</h1>
        <h2>H2: example text</h2>
        <h3>H3: example text</h3>
        <h4>H4, Sub1: example text</h4>
        <h5>H5, Sub2: example text</h5>
        <p>P: Body example text</p>
        <p><b>B, Bold: Bold example text</b></p>
      </RichText>
    );
  });
