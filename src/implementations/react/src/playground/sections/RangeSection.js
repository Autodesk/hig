import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Range } from '../../react-hig';

function RangeSection() {
  return (
    <PlaygroundSection title="Range">
      <Range
        label="What is your age?"
        instructions="You must be 21 or older."
        required="Age is required."
        minValue={21}
        maxValue={99}
        value={21}
        step={1}
      />
    </PlaygroundSection>
  )
}
export default RangeSection;