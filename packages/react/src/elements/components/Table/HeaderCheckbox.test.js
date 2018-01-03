import React from "react";
import { shallow } from "enzyme";

import HeaderCheckbox from "./HeaderCheckbox";
import CheckboxAdapter from "../../../adapters/FormElements/CheckboxAdapter";

describe("<HeaderCheckbox />", () => {
  describe("selected", () => {
    it("is passed as the CheckboxAdapter's checked prop", () => {
      const wrapper = shallow(<HeaderCheckbox selected />);
      expect(wrapper.find(CheckboxAdapter)).toHaveProp("checked", true);
    });
  });

  describe("onSelectAllSelectionChange", () => {
    it("is passed as the CheckboxAdapter's onChange handler", () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <HeaderCheckbox onSelectAllSelectionChange={spy} />
      );
      expect(wrapper.find(CheckboxAdapter)).toHaveProp("onChange", spy);
    });
  });
});
