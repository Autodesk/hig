import React from "react";
import { shallow } from "enzyme";
import { lastCallOfMock } from "@hig/jest-preset/helpers";

import TextInputBehavior from "./TextInputBehavior";

describe("text-field/behaviors/TextInputBehavior", () => {
  const children = jest.fn(() => <input />);
  const onChange = jest.fn();
  const onClear = jest.fn();

  function render(props) {
    return shallow(
      <TextInputBehavior {...props} onChange={onChange} onClear={onClear}>
        {children}
      </TextInputBehavior>
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
        clear: expect.any(Function),
        handleChange: expect.any(Function),
        value: expect.any(String)
      });
    });
  });

  describe("props", () => {
    describe("defaultValue", () => {
      describe("when uncontrolled", () => {
        it("is empty by default", () => {
          render();
          expect(getPayload()).toHaveProperty("value", "");
        });

        it("sets the default input value", () => {
          render({ defaultValue: "foo" });
          expect(getPayload()).toHaveProperty("value", "foo");
        });
      });

      describe("when controlled", () => {
        it("is ignored", () => {
          render({ value: "bar", defaultValue: "foo" });
          expect(getPayload()).toHaveProperty("value", "bar");
        });
      });
    });
  });

  describe("payload", () => {
    const changeEvent = { target: { value: "baz" } };

    function assertOnChangeHandler() {
      const { handleChange } = getPayload();

      expect(onChange).not.toHaveBeenCalled();
      handleChange(changeEvent);
      expect(onChange).toHaveBeenCalledWith("baz");
    }

    describe("handleChange", () => {
      describe("when uncontrolled", () => {
        it("calls the `onChange` handler", () => {
          render();
          assertOnChangeHandler();
        });

        it("updates the value value", () => {
          render();
          expect(getPayload()).toHaveProperty("value", "");
          getPayload().handleChange(changeEvent);
          expect(getPayload()).toHaveProperty("value", "baz");
        });
      });

      describe("when controlled", () => {
        it("calls the `onChange` handler", () => {
          render({ value: "boom" });
          assertOnChangeHandler();
        });

        it("doesn't update the value value", () => {
          render({ value: "boom" });
          expect(getPayload()).toHaveProperty("value", "boom");
          getPayload().handleChange(changeEvent);
          expect(getPayload()).toHaveProperty("value", "boom");
        });
      });
    });

    describe("clear", () => {
      function assertOnClearCalled() {
        expect(onClear).not.toHaveBeenCalled();
        getPayload().clear();
        expect(onClear).toHaveBeenCalled();
      }

      describe("when uncontrolled", () => {
        it("calls the `onClear` handler", () => {
          render();
          assertOnClearCalled();
        });

        it("empties the value", () => {
          render({ defaultValue: "bang" });
          expect(getPayload()).toHaveProperty("value", "bang");
          getPayload().clear();
          expect(getPayload()).toHaveProperty("value", "");
        });
      });

      describe("when controlled", () => {
        it("calls the `onClear` handler", () => {
          render({ value: "boom" });
          assertOnClearCalled();
        });

        it("doesn't update the value value", () => {
          render({ value: "boom" });
          expect(getPayload()).toHaveProperty("value", "boom");
          getPayload().clear();
          expect(getPayload()).toHaveProperty("value", "boom");
        });
      });
    });
  });
});
