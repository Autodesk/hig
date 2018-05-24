import React from "react";
import { mount } from "enzyme";
import TextField from "./index";
import Input from "./presenters/Input";

describe("TextField", () => {
  describe("id", () => {
    it("passes the ID prop to the underlying input", () => {
      const wrapper = mount(<TextField />);
      expect(wrapper.find(Input).prop("id")).toEqual(
        expect.stringMatching("text-field-")
      );
    });

    it("generates an ID when one is not provided", () => {
      const wrapper = mount(<TextField id="important-field" />);
      expect(wrapper.find(Input).prop("id")).toEqual("important-field");
    });
  });
});
