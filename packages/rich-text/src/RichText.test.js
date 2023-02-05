import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";
import RichText from "./RichText";

describe("RichText", () => {
  takeSnapshotsOf(RichText, [{ desc: "renders", props: {} }]);
  takeSnapshotsOf(RichText, [
    {
      desc: "renders with children",
      props: { children: <h1>Happy little clouds</h1> },
    },
  ]);
  takeSnapshotsOf(RichText, [
    {
      desc: "renders with dangerouslySetInnerHTML",
      props: {
        dangerouslySetInnerHTML: {
          __html:
            "<p>Nice little fluffy clouds laying around in the sky being lazy.</p>",
        },
      },
    },
  ]);
  takeSnapshotsOf(RichText, [
    {
      desc: "renders with custom className",
      props: {
        className: "test-class",
        children: <h1>Happy little clouds</h1>,
      },
    },
  ]);
});
