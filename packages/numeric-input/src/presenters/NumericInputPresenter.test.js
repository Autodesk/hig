import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { composesLikeControlBehavior } from "@hig/behaviors/test";

import NumericInputPresenter from "./NumericInputPresenter";

describe("InputPresenter", () => {
  composesLikeControlBehavior({
    Subject: InputPresenter,
    Receiver: "input"
  });

  it("renders by default", () => {
    expect(renderer.create(<NumericInputPresenter />).toJSON()).toMatchSnapshot();
  });

  it("renders with id", () => {
    expect(
      renderer.create(<NumericInputPresenter id="my_id" />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with hover", () => {
    expect(
      renderer.create(<NumericInputPresenter hasHover />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with focus", () => {
    expect(
      renderer.create(<NumericInputPresenter hasFocus />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders when disabled", () => {
    expect(
      renderer.create(<NumericInputPresenter isDisabled />).toJSON()
    ).toMatchSnapshot();
  });

  it("sets event handlers on the input", () => {
    const onInputHandler = () => {};
    const onChangeHandler = () => {};
    const onFocusHandler = () => {};
    const onBlurHandler = () => {};
    const onMouseEnterHandler = () => {};
    const onMouseLeaveHandler = () => {};
    const wrapper = mount(
      <NumericInputPresenter
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onInput={onInputHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      />
    );

    const inputProps = wrapper.find("input").props();
    expect(inputProps.onChange).toEqual(onChangeHandler);
    expect(inputProps.onFocus).toEqual(onFocusHandler);
    expect(inputProps.onBlur).toEqual(onBlurHandler);
    expect(inputProps.onMouseEnter).toEqual(onMouseEnterHandler);
    expect(inputProps.onMouseLeave).toEqual(onMouseLeaveHandler);
    expect(inputProps.onInput).toEqual(onInputHandler);
  });
});
