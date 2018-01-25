/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";
import Option from "./Option";

describe("Option", () => {
  it("raises no errors", () => {
    const errorSpy = jest.fn();
    console.error = errorSpy;

    mount(<Option name="Option" onClick={() => {}} />);

    expect(errorSpy).not.toHaveBeenCalled();
  });
});
