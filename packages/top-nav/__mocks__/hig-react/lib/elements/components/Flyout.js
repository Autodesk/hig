import React from "react";

function FlyoutMock({ content, children }) {
  return (
    <div data-mock="flyout">
      <div data-mock="flyout-content">{content}</div>
      <div data-mock="flyout-children">{children}</div>
    </div>
  );
}

module.exports = jest.fn(FlyoutMock);
