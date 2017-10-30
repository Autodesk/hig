import React from "react";
import { mount } from "enzyme";

import * as HIG from "hig-vanilla";

import TableHeadAdapter from "./TableHeadAdapter";
import SlotHeadCell from "./SlotHeadCellAdapter";
import TextHeadCell from "./TextHeadCellAdapter";

describe("TableHeadAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <TableHeadAdapter higInstance={mockInstance} selected>
          <SlotHeadCell width="60px">
            <div> text content</div>
          </SlotHeadCell>
          <TextHeadCell text="test" alignment="right" width="1fr" />
        </TableHeadAdapter>
      );

      mount(
        <TableHeadAdapter higInstance={mockInstance} selected={false}>
          <SlotHeadCell>
            <div> text content</div>
          </SlotHeadCell>
          <TextHeadCell text="test" alignment="right" />
        </TableHeadAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.Table._partials.TableHead);
  });
});
