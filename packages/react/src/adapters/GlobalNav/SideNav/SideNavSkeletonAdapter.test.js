import React from "react";
import { mount } from "enzyme";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import SideNavSkeletonAdapter from "./SideNavSkeletonAdapter";

describe("SideNavSkeleton", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(<SideNavSkeletonAdapter higInstance={mockInstance} />);
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.SideNav._partials.SideNavSkeleton
    );
  });
});
