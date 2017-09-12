import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import createSlotComponent from '../../adapters/createSlotComponent';
import AvatarImage from '../images/profileImage.png';

import { Avatar } from '../../hig-react';

const Slot = createSlotComponent();


function AvatarSection() {
  return ( <PlaygroundSection title="Avatar">
    <Slot>
      <Avatar name='John Snow' size='small' />
      <Avatar name='John Snow' size='medium' />
      <Avatar name='John Snow' size='large' />
      <Avatar name='John Snow' size='extralarge' />
      <Avatar name='John Snow' image={AvatarImage} size='small' />
      <Avatar name='John Snow' image={AvatarImage} size='medium' />
      <Avatar name='John Snow' image={AvatarImage} size='large' />
      <Avatar name='John Snow' image={AvatarImage} size='extralarge' />
      </Slot>
  </PlaygroundSection>)
};

export default AvatarSection;