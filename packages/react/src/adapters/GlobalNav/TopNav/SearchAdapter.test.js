import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import SearchAdapter from "./SearchAdapter";
import Option from "../../../elements/components/FormElements/Option";

describe("TopNav SearchAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      const wrapper = mount(
        <SearchAdapter
          higInstance={mockInstance}
          placeholder="Bar"
          showClearIcon
          onInput={() => {}}
          onFocus={() => {}}
          onBlur={() => {}}
          onClearIconClick={() => {}}
          onKeydown={() => {}}
          onClickOutside={() => {}}
          showOptions
        >
          <Option onClick={() => {}} value="" />
        </SearchAdapter>
      );
      mockInstance.hideOptions();
      wrapper.props().higInstance.hideClearIcon();
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.TopNav._partials.Search
    );
  });
});
