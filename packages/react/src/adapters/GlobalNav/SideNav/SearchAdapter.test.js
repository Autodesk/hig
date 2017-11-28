import React from "react";
import { mount } from "enzyme";

import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import SearchAdapter from "./SearchAdapter";

describe("SideNav SearchAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      const wrapper = mount(
        <SearchAdapter
          higInstance={mockInstance}
          onFocus={() => {}}
          onBlur={() => {}}
          onInput={() => {}}
          onClearIconClick={() => {}}
          clearIconVisible
          placeholder="Foo"
          value="Bar"
        />
      );
      wrapper.props().higInstance.hideClearIcon();
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.SideNav._partials.Search
    );
  });
});
