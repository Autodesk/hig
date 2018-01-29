import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import {
  H1,
  H2,
  H3,
  Sub1,
  Sub2,
  Body,
  Bold,
  Caption,
  Disabled
} from "../../hig-react";

class TypographySection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="TYPOGRAPHY">
        <H1>H1 example text</H1>
        <H2>H2 example text</H2>
        <H3>H3 example text</H3>
        <Sub1>Sub1 example text</Sub1>
        <Sub2>Sub2 example text</Sub2>
        <div>
          <Body>Body example text</Body>
        </div>
        <div>
          <Body size="large">Large example text</Body>
        </div>
        <div>
          <Body size="large" bold>
            Large bold example text
          </Body>
        </div>
        <div>
          <Body size="medium">Medium example text</Body>
        </div>
        <div>
          <Body size="medium" bold>
            Medium bold example text
          </Body>
        </div>
        <div>
          <Body size="small">Small example text</Body>
        </div>
        <div>
          <Body size="small" bold>
            Small bold example text
          </Body>
        </div>
        <div>
          <Bold>Bold example text</Bold>
        </div>
        <div>
          <Disabled>Disabled example text</Disabled>
        </div>
        <div>
          <Caption>Caption example text</Caption>
        </div>
      </PlaygroundSection>
    );
  }
}

export default TypographySection;
