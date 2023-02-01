import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import Thumbnail from "./Thumbnail";

describe("thumbnail/Thumbnail", () => {
  const props = {
    src: "https://d95xa459ljwvg.cloudfront.net/theme/weave-logo.svg",
  };
  takeSnapshotsOf(Thumbnail, [
    {
      desc: "renders with aspectRatio",
      props: { ...props, aspectRatio: "fullscreen" },
    },
    {
      desc: "renders with size",
      props: { ...props, size: "m" },
    },
    {
      desc: "renders with fit",
      props: { ...props, fit: "cover" },
    },
  ]);
});
