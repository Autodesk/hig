import React from "react";
import { mount } from "enzyme";

import { Timestamp as VanillaTimestamp } from "hig-vanilla";
import Timestamp from "./TimestampAdapter";

function Context(props) {
  return <Timestamp {...props} />;
}

describe("Timestamp", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(<Context time={1234567890} higInstance={mockInstance} />);
    }).toImplementHIGInterfaceOf(VanillaTimestamp);
  });
});
