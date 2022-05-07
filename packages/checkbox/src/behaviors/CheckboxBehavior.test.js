import React from "react";
import { shallow } from "enzyme";
import { lastCallOfMock } from "@hig/jest-preset/helpers";

import CheckboxBehavior from "./CheckboxBehavior";

describe("checkbox/behaviors/CheckboxBehavior", () => {
  const children = jest.fn(() => <input />);
  const onChange = jest.fn();
  const onClick = jest.fn();

  function render(props) {
    return shallow(
      <CheckboxBehavior {...props} onChange={onChange} onClick={onClick}>
        {children}
      </CheckboxBehavior>
    );
  }

  function getPayload() {
    return lastCallOfMock(children)[0];
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("render", () => {
    it("calls the `children` render prop", () => {
      expect(children).not.toHaveBeenCalled();
      render();
      expect(children).toHaveBeenCalledWith({
        checked: expect.any(Boolean),
        handleChange: expect.any(Function),
        handleClick: expect.any(Function),
      });
    });
  });

  describe("props", () => {
    describe("defaultChecked", () => {
      describe("when uncontrolled", () => {
        it("is false by default", () => {
          render();
          expect(getPayload()).toHaveProperty("checked", false);
        });

        it("sets the default input checked value", () => {
          render({ defaultChecked: true });
          expect(getPayload()).toHaveProperty("checked", true);
        });
      });

      describe("when controlled", () => {
        it("is ignored", () => {
          render({ checked: false, defaultChecked: true });
          expect(getPayload()).toHaveProperty("checked", false);
        });
      });
    });
  });

  describe("payload", () => {
    const checkedChangeEvent = { target: { checked: true } };

    function assertOnChangeHandler() {
      const { handleChange } = getPayload();

      expect(onChange).not.toHaveBeenCalled();
      handleChange(checkedChangeEvent);
      expect(onChange).toHaveBeenCalledWith(true);
    }

    describe("handleChange", () => {
      describe("when uncontrolled", () => {
        it("calls the `onChange` handler", () => {
          render();
          assertOnChangeHandler();
        });

        it("updates the checked value", () => {
          render();
          expect(getPayload()).toHaveProperty("checked", false);
          getPayload().handleChange(checkedChangeEvent);
          expect(getPayload()).toHaveProperty("checked", true);
        });
      });

      describe("when controlled", () => {
        it("calls the `onChange` handler", () => {
          render({ checked: false });
          assertOnChangeHandler();
        });

        it("doesn't update the checked value", () => {
          render({ checked: false });
          expect(getPayload()).toHaveProperty("checked", false);
          getPayload().handleChange(checkedChangeEvent);
          expect(getPayload()).toHaveProperty("checked", false);
        });
      });
    });
  });
});
