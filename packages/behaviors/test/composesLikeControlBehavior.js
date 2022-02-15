import React from "react";
import { mount } from "enzyme";

export default function composesLikeControlBehavior({ Subject, Receiver }) {
  describe("passing props", () => {
    [
      { attr: "autoComplete", value: true },
      { attr: "disabled", value: true },
      { attr: "inputMode", value: "email" },
      { attr: "maxLength", value: "50" },
      { attr: "minLength", value: "50" },
      { attr: "name", value: "foo" },
      { attr: "pattern", value: ".*" },
      { attr: "readOnly", value: true },
      { attr: "required", value: true },
      { attr: "spellCheck", value: true },
      { attr: "tabIndex", value: "0" }
    ].forEach(({ attr, value }) => {
      it(`passes ${attr} on the input`, () => {
        const props = {
          [attr]: value
        };
        const wrapper = mount(<Subject {...props} />);

        const receiverComponent = wrapper.find(Receiver);
        expect(receiverComponent.props()[attr]).toEqual(value);
      });
    });
  });
}
