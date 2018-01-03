import React from "react";
import { mount } from "enzyme";

import { ContainerViewRight } from "hig-vanilla";
import ContainerViewRightAdapter from "./ContainerViewRightAdapter";

describe("ContainerViewRightAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(<ContainerViewRightAdapter higInstance={mockInstance} open />);
      mount(
        <ContainerViewRightAdapter higInstance={mockInstance} open={false} />
      );
    }).toImplementHIGInterfaceOf(ContainerViewRight);
  });
});
