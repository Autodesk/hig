import React from "react";
import { mount } from "enzyme";

import * as HIG from "hig-vanilla";

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
    }).toImplementHIGInterfaceOf(HIG.Table._partials.TableRow);
  });
});
