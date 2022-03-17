import React from "react";
import { mount } from "enzyme";

import MultiDownshift from "./MultiDownshift";

function itemToString(item) {
  return JSON.stringify(item);
}

describe("multi-downshift/MultiDownshift", () => {
  it("calls the `children` render prop with state and helpers", () => {
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
