import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import TextPresenter from "./TextPresenter";

describe("tooltip/presenters/TextPresenter", () => {
  takeSnapshotsOf(TextPresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with children",
      props: {
        children: "hi",
      },
    },
  ]);
});
