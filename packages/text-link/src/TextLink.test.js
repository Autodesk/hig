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

  describe("target", () => {
    it("adds a target attribute", () => {
      expect(
        mount(
          <TextLink link="https://www.autodesk.com/" target="_parent">
            Link
          </TextLink>
        )
      ).toHaveProp("target", "_parent");
    });
  });

  describe("the element rendered", () => {
    describe("given a link", () => {
      it("it is an <a> tag", () => {
        expect(
          mount(
            <TextLink link="https://www.autodesk.com/">Link</TextLink>
          ).find("a")
        ).toHaveLength(1);
      });
    });
    describe("if link is not given", () => {
      it("it is a <span> tag", () => {
        expect(mount(<TextLink>Link</TextLink>).find("span")).toHaveLength(1);
      });
    });
  });
});
