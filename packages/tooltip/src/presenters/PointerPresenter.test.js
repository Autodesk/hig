import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import PointerPresenter from "./PointerPresenter";

describe("tooltip/presenters/PointerPresenter", () => {
  takeSnapshotsOf(PointerPresenter, [
    {
      description: "renders",
      props: {}
    }
  ]);
});
