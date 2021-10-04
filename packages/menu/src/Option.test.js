import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Settings24 } from "@hig/icons";
import Avatar from "@hig/avatar";
import Menu from "./Menu";
import Option from "./Option";

describe("menu/Option", () => {
  it("renders default Menu and Options", () => {
    const wrapper = (
      <Menu>
        <Option id="option-1">Option 1</Option>
        <Option id="option-2">Option 2</Option>
        <Option id="option-3">Option 3</Option>
      </Menu>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders checkmark indicator Menu and Options", () => {
    const wrapper = (
      <Menu checkmark>
        <Option id="option-1">Option 1</Option>
        <Option id="option-2">Option 2</Option>
        <Option id="option-3">Option 3</Option>
      </Menu>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Menu and Options with icons", () => {
    const wrapper = (
      <Menu>
        <Option id="option-1" asset={<Settings24 />}>
          Option 1
        </Option>
        <Option id="option-2" asset={<Settings24 />}>
          Option 2
        </Option>
        <Option id="option-3" asset={<Settings24 />}>
          Option 3
        </Option>
      </Menu>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Menu and Options with shortcuts", () => {
    const wrapper = (
      <Menu>
        <Option id="option-1" shortcut={<span>&#8984; 6</span>}>
          Option 1
        </Option>
        <Option id="option-2" shortcut={<span>&#8984; 7</span>}>
          Option 2
        </Option>
        <Option id="option-3" shortcut={<span>&#8984; 8</span>}>
          Option 3
        </Option>
      </Menu>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Menu and Options with Avatars", () => {
    const wrapper = (
      <Menu>
        <Option id="option-1" asset={<Avatar name="Cassandra Cain" />}>
          Option 1
        </Option>
        <Option id="option-2" asset={<Avatar name="Barbara Gordon" />}>
          Option 2
        </Option>
        <Option id="option-3" asset={<Avatar name="Stephanie Brown" />}>
          Option 3
        </Option>
      </Menu>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Menu and Options with Headers", () => {
    const wrapper = (
      <Menu defaultSelected={["option-2"]} checkmark>
        <Option id="option-1" role="presentation">
          Option 1
        </Option>
        <Option id="option-2">Option 2</Option>
        <Option id="option-3">Option 3</Option>
      </Menu>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Menu and Options that are disabled", () => {
    const wrapper = (
      <Menu defaultSelected={["option-2"]} checkmark>
        <Option id="option-1" disabled>
          Option 1
        </Option>
        <Option id="option-2">Option 2</Option>
        <Option id="option-3">Option 3</Option>
      </Menu>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("passes down the optionRef", () => {
    let optionEl = null;
    const setOptionEl = el => {
      optionEl = el;
    };
    const wrapper = (
      <Menu>
        <Option optionRef={setOptionEl} id="option-1">
          Option 1
        </Option>
        <Option id="option-2">Option 2</Option>
        <Option id="option-3">Option 3</Option>
      </Menu>
    );
    if (optionEl) {
      expect(mount(wrapper).matchesElement(optionEl)).toBeTruthy();
    }
  });
});
