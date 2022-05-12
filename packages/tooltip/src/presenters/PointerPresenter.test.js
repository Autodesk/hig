import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import PointerPresenter from "./PointerPresenter";

describe("tooltip/presenters/PointerPresenter", () => {
  takeSnapshotsOf(PointerPresenter, [
    {
      desc: "renders",
      props: {},
    },
  ]);
});
