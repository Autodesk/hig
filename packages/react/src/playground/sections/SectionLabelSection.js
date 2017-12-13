import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { SectionLabel, Flyout, IconButton } from "../../hig-react";

class SectionLabelSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="Section Label Section">
        <SectionLabel label="Project">
          <Flyout
            anchorPoint="top-right"
            content={
              <div>
                <h3>Important flyout information</h3>
                <p>You can put what ever you want in here.</p>
              </div>
            }
          >
            <IconButton type="flat" icon="settings" title="Settings" />
          </Flyout>
        </SectionLabel>
      </PlaygroundSection>
    );
  }
}

export default SectionLabelSection;
