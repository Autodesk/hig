import React from "react";
import { shallow } from "enzyme";
import Typography from "./Typography";
import {
  H1,
  H2,
  H3,
  Text,
  Body,
  Bold,
  Caption,
  Disabled,
  Sub1,
  Sub2
} from "./index";

describe("Typography", () => {
  const defaultTestProps = {
    type: "text",
    text: "This should render nicely."
  };

  it("renders text", () => {
    const wrapper = shallow(<Typography {...defaultTestProps} />);
    expect(wrapper).toIncludeText("This should render nicely.");
  });

  describe("type", () => {
    it("adds a class designating type", () => {
      expect(shallow(<Typography {...defaultTestProps} />)).not.toHaveClassName(
        "hig__typography__h1"
      );
      expect(
        shallow(<Typography {...defaultTestProps} type="h1" />)
      ).toHaveClassName("hig__typography__h1");
    });
  });

  describe("bold", () => {
    it("adds a bold class", () => {
      expect(shallow(<Typography {...defaultTestProps} />)).not.toHaveClassName(
        "hig__typography--bold"
      );
      expect(
        shallow(<Typography {...defaultTestProps} bold />)
      ).toHaveClassName("hig__typography--bold");
    });
  });

  describe("disabled", () => {
    it("adds a disabled class", () => {
      expect(shallow(<Typography {...defaultTestProps} />)).not.toHaveClassName(
        "hig__typography--disabled"
      );
      expect(
        shallow(<Typography {...defaultTestProps} disabled />)
      ).toHaveClassName("hig__typography--disabled");
    });
  });

  describe("size", () => {
    it("adds a class designating size", () => {
      const wrapper = shallow(
        <Typography {...defaultTestProps} size="small" />
      );

      expect(wrapper).toHaveClassName("hig__typography--small");
    });
  });

  describe("color", () => {
    it("adds a class designating color", () => {
      const wrapper = shallow(
        <Typography {...defaultTestProps} color="hig-cool-gray-70" />
      );

      expect(wrapper).toHaveClassName("hig__typography--hig-cool-gray-70");
    });
  });

  describe("opacity", () => {
    it("modifies the opacity on the style object", () => {
      const wrapper = shallow(
        <Typography {...defaultTestProps} opacity={0.3} />
      );

      expect(wrapper).toHaveProp("style", { opacity: 0.3 });
    });
  });
});

[H1, H2, H3, Text, Body, Bold, Caption, Disabled, Sub1, Sub2].forEach(
  Component => {
    describe(Component.name, () => {
      it("is a Typography component of the correct type", () => {
        const wrapper = shallow(<Component>Test text</Component>);

        expect(wrapper).toHaveProp("type", Component.name.toLowerCase());
        expect(wrapper).toHaveProp("text", "Test text");
      });
    });
  }
);
