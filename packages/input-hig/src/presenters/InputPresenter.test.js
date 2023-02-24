import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { composesLikeControlBehavior } from "@weave-design/behaviors/test";

import InputPresenter from "./InputPresenter";

let inputRef;
const onInputHandler = () => {};
const onChangeHandler = () => {};
const onFocusHandler = () => {};
const onBlurHandler = () => {};
const onMouseEnterHandler = () => {};
const onMouseLeaveHandler = () => {};
const setInputRef = (element) => {
  inputRef = element;
};

describe("InputPresenter", () => {
  composesLikeControlBehavior({
    Subject: InputPresenter,
    Receiver: "input",
  });

  it("renders by default", () => {
    expect(renderer.create(<InputPresenter />).toJSON()).toMatchSnapshot();
  });

  it("renders with id", () => {
    expect(
      renderer.create(<InputPresenter id="my_id" />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with hover", () => {
    expect(
      renderer.create(<InputPresenter hasHover />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with focus", () => {
    expect(
      renderer.create(<InputPresenter hasFocus />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders when disabled", () => {
    expect(
      renderer.create(<InputPresenter isDisabled />).toJSON()
    ).toMatchSnapshot();
  });

  it("sets event handlers on the input", () => {
    const wrapper = mount(
      <InputPresenter
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

  it("passes down the inputRef", () => {
    expect(
      mount(<InputPresenter inputRef={setInputRef} />).getDOMNode()
    ).toEqual(inputRef);
  });
});
