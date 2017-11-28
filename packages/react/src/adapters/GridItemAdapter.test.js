import { mount } from "enzyme";
import React from "react";
import { Grid as VanillaGrid } from "hig-vanilla";
import GridItemAdapter from "./GridItemAdapter";

describe("GridItemAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <GridItemAdapter higInstance={mockInstance} fraction="one-quarter">
          <h1>Slot content</h1>
        </GridItemAdapter>
      );
    }).toImplementHIGInterfaceOf(VanillaGrid._partials.GridItem);
  });
});
