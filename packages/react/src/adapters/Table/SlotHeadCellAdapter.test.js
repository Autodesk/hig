import { mount } from "enzyme";
import React from "react";
import { Table as VanillaTable } from "hig-vanilla";
import SlotHeadCellAdapter from "./SlotHeadCellAdapter";

describe("SlotHeadCellAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SlotHeadCellAdapter higInstance={mockInstance}>
          <h1>Slot content</h1>
        </SlotHeadCellAdapter>
      );
    }).toImplementHIGInterfaceOf(
      VanillaTable._partials.TableHead._partials.SlotHeadCell
    );
  });
});
