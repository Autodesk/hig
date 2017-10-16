import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { H1, H2, H3, Sub1, Sub2, Body, Bold, Caption, Disabled } from '../elements/components/Typography';

storiesOf('Typography elements', module)
  .addWithInfo('All Elements', '', () => (
    <div>
      <H1>{text('h1 text', 'H1 example text')}</H1>
      <H2>{text('h2 text', 'H2 example text')}</H2>
      <H3>{text('h3 text', 'H3 example text')}</H3>
      <br />
      <Sub1>{text('Sub1 text', 'Sub1 example text')}</Sub1>
      <br />
      <Sub2>{text('Sub2 text', 'Sub2 example text')}</Sub2>
      <br />
      <Body>{text('Body text', 'Body example text')}</Body>
      <br />
      <Bold>{text('Bold text', 'Bold example text')}</Bold>
      <br />
      <Caption>{text('Caption text', 'Caption example text')}</Caption>
      <br />
      <Disabled>{text('Disabled text', 'Disabled example text')}</Disabled>
    </div>
  ));
