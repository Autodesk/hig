import React, { PureComponent } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { IconButton } from '../../hig-react';

class IconButtonSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="IconButton">
        <IconButton
          title="Icon button"
          link="#"
          icon="settings"
          onClick={() => {
            console.log('Button with icon on click');
          }}
          onBlur={() => {
            console.log('onblur');
          }}
          onFocus={() => {
            console.log('focus');
          }}
          onHover={() => {
            console.log('hover');
          }}
        />

        <IconButton
          disabled={true}
          title="Icon button"
          link="#"
          icon="settings"
          onClick={() => {
            console.log('Button with icon on click');
          }}
          onBlur={() => {
            console.log('onblur');
          }}
          onFocus={() => {
            console.log('focus');
          }}
          onHover={() => {
            console.log('hover');
          }}
        />
      </PlaygroundSection>
    );
  }
}
export default IconButtonSection;