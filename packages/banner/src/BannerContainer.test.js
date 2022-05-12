import { shallow } from "enzyme";
import React from "react";

import BannerContainer from "./BannerContainer";

describe("banner/BannerContainer", () => {
  const actionsRenderProp = jest.fn();
  const presenterRenderProp = jest.fn();

  beforeEach(() => {
    actionsRenderProp.mockReturnValue(<span />);
    presenterRenderProp.mockReturnValue(<div />);
  });

  afterEach(() => {
    actionsRenderProp.mockReset();
    presenterRenderProp.mockReset();
  });

  it("provides a an object to the presenter render prop", () => {
    shallow(
      <BannerContainer actions="foobar">{presenterRenderProp}</BannerContainer>
    );

    const [[presenterBag]] = presenterRenderProp.mock.calls;

    expect(presenterBag).toMatchObject({
      actions: "foobar",
      isWrappingContent: false,
      refContent: expect.any(Function),
      refInteractionsWrapper: expect.any(Function),
      refNotification: expect.any(Function),
    });
  });

  it("provides an object to the actions render prop", () => {
    shallow(
      <BannerContainer actions={actionsRenderProp}>
        {presenterRenderProp}
      </BannerContainer>
    );

    const [[actionsBag]] = actionsRenderProp.mock.calls;

    expect(actionsBag).toMatchObject({
      isWrappingActions: false,
      isWrappingContent: false,
    });
  });
});
