import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Range } from "../../hig-react";

class RangeSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 21
    };
  }

  setValue = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <PlaygroundSection title="Range">
        <Range
          label="What is your age?"
          instructions="You must be 21 or older."
          required="Age is required."
          minValue={21}
          maxValue={99}
          onInput={this.setValue}
          value={this.state.value}
          step={1}
        />
      </PlaygroundSection>
    );
  }
}
export default RangeSection;
