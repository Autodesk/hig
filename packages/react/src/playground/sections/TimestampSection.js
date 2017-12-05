import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { Timestamp } from "../../hig-react";

class TimestampSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="Timestamp">
        <Timestamp time={1512505451} />
      </PlaygroundSection>
    );
  }
}

export default TimestampSection;
