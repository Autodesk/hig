import { mount } from "enzyme";
import React from "react";
import { Table as VanillaTable } from "hig-vanilla";
import SlotCellAdapter from "./SlotCellAdapter";

describe("SlotCellAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SlotCellAdapter higInstance={mockInstance}>
          <h1>Slot content</h1>
        </SlotCellAdapter>
      );
    }).toImplementHIGInterfaceOf(
      VanillaTable._partials.TableRow._partials.SlotCell
    );
  });
});
