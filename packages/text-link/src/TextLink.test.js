import React from "react";
import { mount } from "enzyme";
import TextLink from "./TextLink";

describe("TextLink", () => {
  it("renders children", () => {
    expect(
      mount(
        <TextLink link="https://www.autodesk.com/">
          This is a text link
        </TextLink>
      )
    ).toHaveText("This is a text link");
  });

  it("allows a click handler", () => {
    const clickHandler = jest.fn();
    const wrapper = mount(
      <TextLink link="https://www.autodesk.com/" onClick={clickHandler}>
        This is a text link
      </TextLink>
    );
    wrapper.simulate("click");
    expect(clickHandler).toHaveBeenCalled();
  });

  describe("type", () => {
    it("adds a class designating type", () => {
      expect(
        mount(
          <TextLink type="primary" link="https://www.autodesk.com/">
            Link
          </TextLink>
        ).find(".hig__text-link")
      ).toHaveClassName("hig__text-link--primary");
    });
  });
});
