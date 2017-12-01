import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";

import {
  ActionBar,
  ActionBarGroup,
  ActionBarSpacer,
  IconButton
} from "../../hig-react";

class ActionBarSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="ActionBar">
        <ActionBar>
          <ActionBarGroup>
            <IconButton icon="upload" title="upload" type="flat" />
            <IconButton icon="add" title="add" type="flat" />
          </ActionBarGroup>
          <ActionBarSpacer />
          <ActionBarGroup>
            <IconButton icon="search" title="search" type="flat" />
          </ActionBarGroup>
          <ActionBarGroup>
            <IconButton icon="grid" title="grid" type="flat" />
          </ActionBarGroup>
        </ActionBar>
      </PlaygroundSection>
    );
  }
}

export default ActionBarSection;
