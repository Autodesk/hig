import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {text, select, boolean} from '@storybook/addon-knobs';

import Flyout from './Flyout';
import Button from '../../adapters/ButtonAdapter';

storiesOf('Flyout', module)
  .addWithInfo('With everything', ``, () => {

    const anchorOptions={
      topLeft: 'top-left',
      topRight: 'top-right',
      bottomLeft: 'bottom-left',
      bottomRight: 'bottom-right'
    };

    const MyFlyoutContent = () => {
      return (
        <div>
          <h3>{text("title", "Important flyout information")}</h3>
          <p>{text("paragraph","You can put what ever you want in here.")}</p>
        </div>
      );
    }
// select('Anchor point', anchorOptions, 'top-left')
    return(
      <Flyout content={ MyFlyoutContent()} anchorPoint='top-left' open={true}>
        <Button title="open flyout" type="primary" icon="gear" size="large" />
      </Flyout>
    )
  });