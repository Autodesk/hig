import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import {Spacer, GlobalNav} from '../../react-hig';
const Slot = GlobalNav.Slot;

function SpacerSection() {
  return ( <PlaygroundSection title="SPACE">
      <Spacer type="inline" width="m" inset="xl">
        <Slot>
          <p className="spacer_para">STACK M WIDTH</p>
          <p className="spacer_para">STACK XL INSET</p>
        </Slot>
      </Spacer>
      <p></p>
      <Spacer type="inline" width="none" inset="none">
        <Slot>
          <p className="spacer_para">NO WIDTH OR INSET</p>
          <p className="spacer_para">NO WIDTH OR INSET</p>
        </Slot>
      </Spacer>
      <p></p>
      <Spacer type="stack" width="xxs" inset="xxl">
        <Slot>
          <p className="spacer_para">STACK XXS WIDTH</p>
          <p className="spacer_para">STACK XXL INSET</p>
        </Slot>
      </Spacer>
      <p></p>
      <Spacer type="stack" width="none" inset="none">
        <Slot>
          <p className="spacer_para">NO WIDTH OR INSET</p>
          <p className="spacer_para">NO WIDTH OR INSET</p>
        </Slot>
      </Spacer>
      </PlaygroundSection>
  )
};
export default SpacerSection;