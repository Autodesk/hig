/* eslint-disable no-console */
import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { ShowMoreLess, Checkbox } from "../../hig-react";

class ShowMoreLessSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="ShowMoreLess">
        <ShowMoreLess maxHeight={350}>
          <Checkbox label="Required" required="You must check this box" />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled + Checked" checked disabled />
        </ShowMoreLess>
        <br />
        <ShowMoreLess maxHeight={30}>
          <Checkbox label="Required" required="You must check this box" />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled + Checked" checked disabled />
        </ShowMoreLess>
      </PlaygroundSection>
    );
  }
}
export default ShowMoreLessSection;
