import React from "react";
import { mount } from "enzyme";
import ToastList from "./index";
import Toast from "../Toast";

describe("ToastList", () => {
  it("renders the first three children, at most", () => {
    const wrapper = mount(
      <ToastList>
        <Toast>1</Toast>
        <Toast>2</Toast>
        <Toast>3</Toast>
        <Toast>4</Toast>
      </ToastList>
    );

    expect(wrapper.containsMatchingElement(<Toast>1</Toast>)).toBe(true);
    expect(wrapper.containsMatchingElement(<Toast>2</Toast>)).toBe(true);
    expect(wrapper.containsMatchingElement(<Toast>3</Toast>)).toBe(true);
    expect(wrapper.containsMatchingElement(<Toast>4</Toast>)).toBe(false);
  });
});
