import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { H1, H2, H3, Sub1, Sub2, Body, Bold, Caption, Disabled, GlobalNav} from '../../react-hig'
const Slot = GlobalNav.Slot;

function TypographySection() {
  return ( <PlaygroundSection title="TYPOGRAPHY">
    <Slot>
      <H1>H1 example text</H1>
      <H2>H2 example text</H2>
      <H3>H3 example text</H3>
      <Sub1>Sub1 example text</Sub1>
      <Sub2>Sub2 example text</Sub2>
      <Body>Body example text</Body>
      <p><Bold>Bold example text</Bold></p>
      <p><Disabled>Disabled example text</Disabled></p>
      <p><Caption>Caption example text</Caption></p>
    </Slot>
  </PlaygroundSection>)
};

export default TypographySection;