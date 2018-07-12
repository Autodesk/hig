import React from "react";
import { mount } from "enzyme";

import MultiDownshift from "./MultiDownshift";

describe("multi-downshift/MultiDownshift", () => {
  function itemToString(item) {
    return JSON.stringify(item);
  }

  it("call the `children` render prop", () => {
    const renderPresenter = jest.fn();

    mount(
      <MultiDownshift itemToString={itemToString}>
        {renderPresenter}
      </MultiDownshift>
    );

    const [[presenterBag]] = renderPresenter.mock.calls;

    expect(presenterBag).toMatchSnapshot();
  });
});
