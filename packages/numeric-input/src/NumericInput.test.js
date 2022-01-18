import React from "react";
import { mount } from "enzyme";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import Input from "@hig/input";
import NumericInput from "./NumericInput";
import SpinnerPresenter from "./presenters/SpinnerPresenter";

describe("numeric-input/NumericInput", () => {
  takeSnapshotsOf(NumericInput, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with disabled",
      props: {
        disabled: true
      }
    },
    {
      desc: "renders with variant",
      props: {
        variant: "box"
      }
    },
    {
      desc: "renders with default value",
      props: {
        defaultValue: 10
      }
    },
    {
      desc: "renders with custom stylesheet",
      props: {
        stylesheet: styles => ({
          ...styles,
          spinner: {
            ...styles.spinner,
            backgroundColor: "pink"
          }
        })
      }
    },
    {
      desc: "renders with custom className",
      props: {
        className: "custom"
      }
    }
  ]);
});

describe("event handlers", () => {
  let onChangeMock;
  let wrapper;
  let interactiveElement;

  beforeEach(() => {
    onChangeMock = jest.fn();
    wrapper = mount(<NumericInput defaultValue={23} onChange={onChangeMock} />);
    interactiveElement = wrapper.find(Input);
  });

  it("sets the value", () => {
    expect(interactiveElement.props().value).toEqual("23");
  });

  it.skip("increments value", () => {
    const spinnerWrapper = wrapper.find(SpinnerPresenter);
    spinnerWrapper.props().increment();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("24");

    expect(interactiveElement.props().value).toEqual("24");
  });

  it.skip("decrements value", () => {
    const spinnerWrapper = wrapper.find(SpinnerPresenter);
    spinnerWrapper.props().decrement();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("22");

    expect(interactiveElement).toHaveProp("value", "22");
  });
});
