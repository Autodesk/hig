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

[H1, H2, H3, Text, Body, Bold, Caption, Disabled, Sub1, Sub2].forEach(
  Component => {
    describe(Component.name, () => {
      it("is a Typography component of the correct type", () => {
        const wrapper = shallow(<Component>Test text</Component>);

        expect(
          wrapper.containsMatchingElement(
            <Typography type={Component.name.toLowerCase()} text="Test text" />
          )
        ).toEqual(true);
      });
    });
  }
);
