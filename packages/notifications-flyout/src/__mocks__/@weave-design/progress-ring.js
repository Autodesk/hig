/** @todo Remove when `@hig/progress-ring` is migrated from vanilla */
import React from "react";

function ProgressRingMock(props) {
  return <div data-props={JSON.stringify(props, null, 2)} />;
}

module.exports = jest.fn(ProgressRingMock);
