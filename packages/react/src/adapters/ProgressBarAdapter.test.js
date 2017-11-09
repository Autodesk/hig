import React from "react";
import { mount } from "enzyme";
import * as Hig from "hig-vanilla";
import ProgressBarAdapter from "./ProgressBarAdapter";

describe("ProgressBar", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <ProgressBarAdapter higInstance={mockInstance} percentComplete={0} />
      );
    }).toImplementHIGInterfaceOf(Hig.ProgressBar);
  });
});
