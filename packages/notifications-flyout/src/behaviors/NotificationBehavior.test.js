import React from "react";
import "babel-polyfill";
import { ENTERED } from "react-transition-group/Transition";
import { mount } from "enzyme";

import NotificationBehavior from "./NotificationBehavior";

describe("notification-flyout/behaviors/NotificationBehavior", () => {
  const onDismissDeferred = {};
  const onDismiss = jest.fn();
  const children = jest.fn();

  function mountBehavior() {
    mount(
      <NotificationBehavior onDismiss={onDismiss}>
        {children}
      </NotificationBehavior>
    );
  }

  beforeEach(() => {
    onDismissDeferred.promise = new Promise((resolve, reject) => {
      onDismissDeferred.resolve = resolve;
      onDismissDeferred.reject = reject;
    });
    onDismiss.mockImplementation(() => onDismissDeferred.resolve());
    children.mockReturnValue(<div />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders", () => {
    mountBehavior();
  });

  describe("render prop payload", () => {
    let payload;

    beforeEach(() => {
      mountBehavior();

      [[payload]] = children.mock.calls;
    });

    it("provides a payload to the `children` render prop", () => {
      expect(payload).toMatchObject({
        handleDismissButtonClick: expect.any(Function),
        height: "",
        innerRef: expect.any(Function),
        transitionStatus: ENTERED
      });
    });

    describe("handleDismissButtonClick", () => {
      it("eventually calls the `onDismiss` handler", async () => {
        const { innerRef, handleDismissButtonClick } = payload;
        console.log('payload', payload);
        const container = document.createElement("div");
        const event = new window.MouseEvent("click");

        expect(onDismiss).not.toHaveBeenCalled();

        innerRef(container);
        handleDismissButtonClick(event);
        await onDismissDeferred.promise;

        expect(onDismiss).toHaveBeenCalledTimes(1);
      });
    });
  });
});
