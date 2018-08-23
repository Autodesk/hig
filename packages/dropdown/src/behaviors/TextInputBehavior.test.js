import React from "react";
import { mount } from "enzyme";
import TextInputBehavior from "./TextInputBehavior";

describe("Dropdown/behaviors/TextInputBehavior", () => {
  it("renders children", () => {
    const renderMock = jest.fn(({ handleChange, value }) => (
      <input onChange={handleChange} value={value} />
    ));
    mount(<TextInputBehavior value="test">{renderMock}</TextInputBehavior>);

    expect(renderMock).toHaveBeenCalledWith({
      handleChange: expect.any(Function),
      value: "test"
    });
  });
});
