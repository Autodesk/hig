import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { TextLink } from '../../react-hig';

function TextLinkSection() {
  return (
    <PlaygroundSection title="TextLink">
      <div>
        <TextLink
          href="https://github.com/Autodesk/hig"
          text="This is a primary text link"
        />
      </div>
      <div>
        <TextLink
          text="This is a primary text link with onClick"
          onClick={() => {
            console.log('Text link on click');
          }}
        />
      </div>
      <div>
        <TextLink
          href="https://github.com/Autodesk/hig"
          type="secondary"
          title="This is a secondary text link"
        />
      </div>
    </PlaygroundSection>
  );
}
export default TextLinkSection;
