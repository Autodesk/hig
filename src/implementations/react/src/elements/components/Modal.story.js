import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';

import Modal from '../../adapters/ModalAdapter';

storiesOf('Modal', module)
  .addWithInfo('Standard Modal', ``, () => {
    const headerColorOptions = {
      default: 'Default',
      gray: 'Gray',
      slate: 'Slate'
    }

    const buttonTypeOptions = {
      primary: 'Primary',
      secondary: 'Secondary',
      flat: 'Flat'
    }

    const buttonProps = [
      {
        title: text('Button 1 title', 'Cancel'),
        type: select('Button 1 type', buttonTypeOptions, 'secondary'),
        onClick: action
      },
      {
        title: text('Button 2 title', 'Ok'),
        type: select('Button 2 type', buttonTypeOptions, 'primary'),
        onClick: action
      }
    ]

    return (
      <Modal
        title={text('Title', 'Are you sure you want to do that?')}
        headerColor={select('Header color', headerColorOptions, 'default')}
        body={text('Body', 'This action could have some pretty serious consequences. You should give this a little thought.')}
        open={boolean('Open', true)}
        onCloseClick={action}
        onOverlayClick={action}
        buttons={buttonProps}
      />
    );
  });
