import { mount } from "enzyme";
import React from "react";
import * as HIG from "hig-vanilla";
import GridAdapter from "./GridAdapter";
import GridItemAdapter from "./GridItemAdapter";

describe("GridAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <GridAdapter higInstance={mockInstance}>
          <GridItemAdapter fraction="one-quarter" />
        </GridAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.Grid);
  });
});
