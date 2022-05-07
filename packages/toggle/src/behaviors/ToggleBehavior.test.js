import React from "react";
import { shallow } from "enzyme";
import { lastCallOfMock } from "@hig/jest-preset/helpers";

import ToggleBehavior from "./ToggleBehavior";

describe("toggle/behaviors/ToggleBehavior", () => {
  const children = jest.fn(() => <input />);
  const onChange = jest.fn();

  function render(props) {
    return shallow(
      <ToggleBehavior {...props} onChange={onChange}>
        {children}
      </ToggleBehavior>
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
        on: expect.any(Boolean),
        handleChange: expect.any(Function),
        handleKeyUp: expect.any(Function),
      });
    });
  });

  describe("props", () => {
    describe("defaultOn", () => {
      describe("when uncontrolled", () => {
        it("is false by default", () => {
          render();
          expect(getPayload()).toHaveProperty("on", false);
        });

        it("sets the default input checked value", () => {
          render({ defaultOn: true });
          expect(getPayload()).toHaveProperty("on", true);
        });
      });

      describe("when controlled", () => {
        it("is ignored", () => {
          render({ on: false, defaultChecked: true });
          expect(getPayload()).toHaveProperty("on", false);
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

        it("updates the on value", () => {
          render();
          expect(getPayload()).toHaveProperty("on", false);
          getPayload().handleChange(checkedChangeEvent);
          expect(getPayload()).toHaveProperty("on", true);
        });
      });

      describe("when controlled", () => {
        it("calls the `onChange` handler", () => {
          render({ on: false });
          assertOnChangeHandler();
        });

        it("doesn't update the checked value", () => {
          render({ on: false });
          expect(getPayload()).toHaveProperty("on", false);
          getPayload().handleChange(checkedChangeEvent);
          expect(getPayload()).toHaveProperty("on", false);
        });
      });
    });
  });
});
