import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";
import SearchAdapter from "../../../../adapters/GlobalNav/TopNav/SearchAdapter";

describe("<Search />", () => {
  describe("value", () => {
    describe("with a value", () => {
      it("passes value", () => {
        const wrapper = shallow(<Search value="Foo" />);
        expect(wrapper.find(SearchAdapter)).toHaveProp("value", "Foo");
      });
    });
  });
});
