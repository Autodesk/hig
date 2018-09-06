import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Spacer from "./Spacer";

describe("spacer/Spacer", () => {
  describe("style props", () => {
    it("allows overriding spacing", () => {
      const wrapper = mount(<Spacer spacing="m" />);
      expect(wrapper.find(".hig__spacer-v1").prop("style")).toMatchObject({
        height: "16px"
      });
    });

    it("allows overriding size", () => {
      const wrapper = mount(<Spacer size="40px" />);
      expect(wrapper.find(".hig__spacer-v1").prop("style")).toMatchObject({
        height: "40px"
      });
    });

    it("preferences size over spacing", () => {
      const wrapper = mount(<Spacer spacing="m" size="40px" />);
      expect(wrapper.find(".hig__spacer-v1").prop("style")).toMatchObject({
        height: "40px"
      });
    });
  });

  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {}
      },
      {
        description: "renders with spacing",
        props: { spacing: "m" }
      },
      {
        description: "renders with size",
        props: { size: "40px" }
      },
      {
        description: "renders with size and spacing",
        props: { size: "40px", spacing: "m" }
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Spacer {...otherProps}>{children}</Spacer>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
