import React from "react";
import { mount, shallow } from "enzyme";
import moment from "moment";
import DatePicker from "./index";

describe("DatePicker", () => {
  // snapshot testing
  test("Snapshot tests regular view", () => {
    const wrapper = shallow(
      <DatePicker selected={moment("2017-09-15 09:30:00")} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests portal view", () => {
    const wrapper = shallow(
      <DatePicker selected={moment("2017-09-15 09:30:00")} withPortal />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests disabled view", () => {
    const wrapper = shallow(
      <DatePicker selected={moment("2017-09-15 09:30:00")} disabled />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests calender Popper", () => {
    const wrapper = shallow(
      <DatePicker selected={moment("2017-09-15 09:30:00")} hidePopper={false} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  // component render testing
  it("Render the dayPicker component correctly.", () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper).toHaveLength(1);
  });

  it("Render the dayPicker input field correctly.", () => {
    const wrapper = mount(<DatePicker />);
    expect(wrapper.find("TextFieldPresenter")).toHaveLength(1);
  });

  it("Render the label correctly and placeholder correctly", () => {
    const wrapper = mount(<DatePicker label="foo" placeholderText="bar" />);
    expect(wrapper.instance().props.label).toBe("foo");
    expect(wrapper.instance().props.placeholderText).toBe("bar");
  });

  // test interactions
});
