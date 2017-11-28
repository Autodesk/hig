import React from "react";
import { mount } from "enzyme";

import { Table as VanillaTable } from "hig-vanilla";

import TableRowAdapter from "./TableRowAdapter";
import SlotCell from "./SlotCellAdapter";
import TextCell from "./TextCellAdapter";

describe("TableRowAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <TableRowAdapter higInstance={mockInstance} selected>
          <SlotCell>
            <div> text content</div>
          </SlotCell>
          <TextCell text="test" detail="new detail" alignment="right" />
        </TableRowAdapter>
      );

      mount(
        <TableRowAdapter higInstance={mockInstance} selected={false}>
          <SlotCell>
            <div> text content</div>
          </SlotCell>
          <TextCell text="test" detail="new detail" alignment="right" />
        </TableRowAdapter>
      );
    }).toImplementHIGInterfaceOf(VanillaTable._partials.TableRow);
  });
});
