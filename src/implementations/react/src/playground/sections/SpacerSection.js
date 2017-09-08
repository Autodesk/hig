import React, { PureComponent } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Spacer } from '../../hig-react';

class SpacerSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="SPACE">
        <Spacer type="inline" width="m" inset="xl">
          <p className="spacer_para">STACK M WIDTH</p>
          <p className="spacer_para">STACK XL INSET</p>
        </Spacer>
        <p></p>
        <Spacer type="inline" width="none" inset="none">
          <p className="spacer_para">NO WIDTH OR INSET</p>
          <p className="spacer_para">NO WIDTH OR INSET</p>
        </Spacer>
        <p></p>
        <Spacer type="stack" width="xxs" inset="xxl">
          <p className="spacer_para">STACK XXS WIDTH</p>
          <p className="spacer_para">STACK XXL INSET</p>
        </Spacer>
        <p></p>
        <Spacer type="stack" width="none" inset="none">
          <p className="spacer_para">NO WIDTH OR INSET</p>
          <p className="spacer_para">NO WIDTH OR INSET</p>
        </Spacer>
      </PlaygroundSection>
    );
  }
};
export default SpacerSection;
