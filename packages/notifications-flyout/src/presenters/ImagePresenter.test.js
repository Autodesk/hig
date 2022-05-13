import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ImagePresenter from "./ImagePresenter";

describe("notifications-flyout/presenters/ImagePresenter", () => {
  takeSnapshotsOf(ImagePresenter, [
    {
      desc: "renders with img props",
      props: {
        alt: "hello",
        src: "//example.com/random.png",
        "data-something": "anything",
      },
    },
  ]);
});
