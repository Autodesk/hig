import React from "react";
import { mount } from "enzyme";

import { Table as VanillaTable } from "hig-vanilla";
import TextHeadCellAdapter from "./TextHeadCellAdapter";

describe("TextHeadCellAdapter", () => {
  it("implements the text cell interface", () => {
    expect(mockInstance => {
      mount(
        <TextHeadCellAdapter
          higInstance={mockInstance}
          text="test"
          alignment="left"
          width="30px"
        />
      );
    }).toImplementHIGInterfaceOf(
      VanillaTable._partials.TableHead._partials.TextHeadCell
    );
  });
});
