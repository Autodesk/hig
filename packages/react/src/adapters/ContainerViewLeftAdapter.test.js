import React from "react";
import { mount } from "enzyme";

import { ContainerViewLeft } from "hig-vanilla";
import ContainerViewLeftAdapter from "./ContainerViewLeftAdapter";

describe("ContainerViewLeftAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(<ContainerViewLeftAdapter higInstance={mockInstance} open />);
      mount(
        <ContainerViewLeftAdapter higInstance={mockInstance} open={false} />
      );
    }).toImplementHIGInterfaceOf(ContainerViewLeft);
  });
});
