import React from "react";

function DraggableCoreMock({ children }) {
  return <div data-mock="DraggableCore">{children}</div>;
}

module.exports = {
  DraggableCore: jest.fn(DraggableCoreMock)
};
