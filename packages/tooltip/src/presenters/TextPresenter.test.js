import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import TextPresenter from "./TextPresenter";

describe("tooltip/presenters/TextPresenter", () => {
  takeSnapshotsOf(TextPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with children",
      props: {
        children: "hi"
      }
    }
  ]);
});
