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

  describe("when displaying instructions", () => {
    const sampleInstructions = "Fill this out.";

    it("displays instructions without errors", () => {
      const wrapper = mount(<TextField instructions={sampleInstructions} />);
      expect(wrapper.text()).toEqual(expect.stringMatching(sampleInstructions));
    });

    it("displays instructions alongside errors", () => {
      const wrapper = mount(
        <TextField errors="Errors!" instructions={sampleInstructions} />
      );
      expect(wrapper.text()).toEqual(expect.stringMatching(sampleInstructions));
    });

    it("hides instructions when specifically configured to", () => {
      const wrapper = mount(
        <TextField
          instructions={sampleInstructions}
          errors="Errors!"
          hideInstructionsOnErrors
        />
      );
      expect(wrapper.text()).not.toEqual(
        expect.stringMatching(sampleInstructions)
      );
    });
  });
});
