import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import createSlotComponent from '../../adapters/createSlotComponent';
import { RichText } from '../../hig-react';

const Slot = createSlotComponent();

function RichTextSection() {
  return ( <PlaygroundSection title="RichText">
    <Slot>
      <RichText>
        <h1>H1: example text</h1>
        <h2>H2: example text</h2>
        <h3>H3: example text</h3>
        <h4>H4, Sub1: example text</h4>
        <h5>H5, Sub2: example text</h5>
        <p>P: Body example text</p>
        <p><b>B, Bold: Bold example text</b></p>
      </RichText>
    </Slot>
  </PlaygroundSection>)
};

export default RichTextSection;