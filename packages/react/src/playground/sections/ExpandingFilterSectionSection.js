import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { ExpandingFilterSection, Checkbox } from "../../hig-react";

class ExpandingFilterSectionSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="ExpandingFilterSection">
        <div style={{ width: 270 }}>
          <ExpandingFilterSection label="Filters">
            <ExpandingFilterSection label="Current projects" size="s">
              <Checkbox label="2017 - Q4 projects" />
              <Checkbox label="2017 - Q3 projects" />
              <Checkbox label="2017 - Q2 projects" />
              <Checkbox label="2017 - Q1 projects" />
            </ExpandingFilterSection>
          </ExpandingFilterSection>
        </div>
      </PlaygroundSection>
    );
  }
}

export default ExpandingFilterSectionSection;
