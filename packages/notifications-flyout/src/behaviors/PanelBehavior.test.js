import React from "react";
import { mount } from "enzyme";
import { ENTERED } from "react-transition-group/Transition";

import PanelBehavior from "./PanelBehavior";

describe("notification-flyout/behaviors/PanelBehavior", () => {
  const children = jest.fn();

  function mountBehavior() {
    mount(<PanelBehavior loading>{children}</PanelBehavior>);
  }

  beforeEach(() => {
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
        loadingTransitionState: ENTERED,
        listMaxHeight: "",
        refListWrapper: expect.any(Function),
      });
    });
  });
});
