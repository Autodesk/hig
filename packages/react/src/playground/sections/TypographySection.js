import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import {
  H1,
  H2,
  H3,
  Text,
  Sub1,
  Sub2,
  Body,
  Bold,
  Caption,
  Disabled
} from "../../hig-react";

class TypographySection extends PureComponent {
  renderTextExamples = () =>
    ["small", "medium", "large"].map(size =>
      [
        "hig-white",
        "hig-cool-gray-70",
        "hig-blue-50",
        "hig-green-good",
        "hig-yellow-warning",
        "hig-red-alert"
      ].map(color => (
        <div
          style={{ backgroundColor: `${color === "hig-white" ? "black" : ""}` }}
        >
          <div>
            <Text size={size} color={color}>
              {`${size} ${color} example`}
            </Text>
          </div>
          <div>
            <Text size={size} color={color} opacity={0.7}>
              {`${size} ${color} example at 70% opacity`}
            </Text>
          </div>
          <div>
            <Text size={size} color={color} bold>
              {`${size} ${color} bold example`}
            </Text>
          </div>
          <div>
            <Text size={size} color={color} disabled>
              {`${size} ${color} disabled example`}
            </Text>
          </div>
          <div>
            <Text size={size} color={color} bold disabled>
              {`${size} ${color} bold disabled example`}
            </Text>
          </div>
        </div>
      ))
    );

  render() {
    return (
      <PlaygroundSection title="TYPOGRAPHY">
        <H1>H1 example text</H1>
        <H2>H2 example text</H2>
        <H3>H3 example text</H3>
        <div>{this.renderTextExamples()}</div>

        <hr />

        <H1>Deprecated Examples</H1>
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
