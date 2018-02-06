import { mount } from "enzyme";
import React from "react";
import { SkeletonItem as VanillaSkeletonItem } from "hig-vanilla";
import SkeletonItemAdapter from "./SkeletonItemAdapter";

describe("SkeletonItemAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SkeletonItemAdapter
          higInstance={mockInstance}
          marginBottom="16px"
          maxWidth="180px"
        />
      );
    }).toImplementHIGInterfaceOf(VanillaSkeletonItem);
  });
});
