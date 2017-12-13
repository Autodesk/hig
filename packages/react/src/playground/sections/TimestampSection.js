import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { Timestamp } from "../../hig-react";

class TimestampSection extends PureComponent {
  threeMinutesAgo = () => {
    const currentDate = new Date();
    const updatedDate = currentDate.setMinutes(currentDate.getMinutes() - 3);
    return new Date(updatedDate);
  };

  threeHoursAgo = () => {
    const currentDate = new Date();
    const updatedDate = currentDate.setHours(currentDate.getHours() - 3);
    return new Date(updatedDate);
  };

  threeMonthsAgo = () => {
    const currentDate = new Date();
    const updatedDate = currentDate.setMonth(currentDate.getMonth() - 3);
    return new Date(updatedDate);
  };

  render() {
    return (
      <PlaygroundSection title="Timestamp">
        <Timestamp time={this.threeMinutesAgo()} />
        <Timestamp time={this.threeHoursAgo()} />
        <Timestamp time={this.threeMonthsAgo()} />
      </PlaygroundSection>
    );
  }
}

export default TimestampSection;
