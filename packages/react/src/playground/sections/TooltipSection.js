import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Button, Tooltip } from "../../hig-react";

class TooltipSection extends Component {
  render() {
    return (
      <PlaygroundSection title="Tooltip">
        <Tooltip anchorPoint="top-center" content="Testing tooltip" open>
          <Button title="Open Tooltip" />
        </Tooltip>
      </PlaygroundSection>
    );
  }
}

export default TooltipSection;
