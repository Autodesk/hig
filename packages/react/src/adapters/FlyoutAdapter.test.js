import React from "react";
import { mount } from "enzyme";
import { Flyout as VanillaFlyout } from "hig-vanilla";
import FlyoutAdapter from "./FlyoutAdapter";

describe("FlyoutAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <FlyoutAdapter
          higInstance={mockInstance}
          open
          onClickOutside={() => {}}
          onScroll={() => {}}
          content={<h1>Flyout content</h1>}
          maxHeight={123}
        >
          <div>Click me to see the flyout</div>
        </FlyoutAdapter>
      );
      mount(<FlyoutAdapter higInstance={mockInstance} open={false} />);
    }).toImplementHIGInterfaceOf(VanillaFlyout);
  });
});
