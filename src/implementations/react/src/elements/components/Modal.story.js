import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {text, select, boolean} from '@storybook/addon-knobs';

import Modal from './Modal';

storiesOf('Modal', module)
  .addWithInfo('Basic Modal', ``, () => {
    const headerColorOptions = {
      default: 'Default', gray: 'Gray', slate: 'Slate'
    };

    const buttonTypeOptions = {
      primary: 'Primary', secondary: 'Secondary', flat: 'Flat'
    };

    const buttonProps = [{
      title:   text('Button 1 title', 'Cancel'),
      type:    select('Button 1 type', buttonTypeOptions, 'secondary'),
      onClick: action('button 1ONE!!!')
    }, {
      title:   text('Button 2 title', 'Ok'),
      type:    select('Button 2 type', buttonTypeOptions, 'primary'),
      onClick: action("BUTTON 2")
    }, {title: "WAAAAT", type: 'Secondary', onClick: action('u cant change this')}];

    return (
      <div>
        <Modal
          title={'Wait a minute...'}
          headerColor={'Gray'}
          isOpen={boolean("isOpen", true)}
          buttons={buttonProps}
          onClose={action('onClose')}
        >
          <h2>Heads up, little buddy!</h2>
          <p>This action could have some pretty serious consequences. You should give this a little
            thought.</p>
        </Modal>
      </div>
    );
  })
  .addWithInfo('With body text instead of children', ``, () => {
    const buttonProps = [
      { title: "I can't", type: 'secondary', onClick: action('No') },
      { title: 'Yes', type: 'primary', onClick: action('Yes') },
      { title: 'Literally Yes', type: 'primary', onClick: action('Literally') },
    ];
    return (
      <div>
        <Modal
          title={'Just one question'}
          body="Can you even?"
          headerColor="Slate"
          isOpen={boolean("isOpen", true)}
          buttons={buttonProps}
          onClose={action('onClose')}
        >
        </Modal>
      </div>)
  });
