import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import Divider from "./Divider";

describe("divider/Divider", () => {
  const requiredProps = { length: "500px" };

  takeSnapshotsOf(Divider, [
    {
      desc: "renders with length",
      props: { ...requiredProps },
    },
    {
      desc: "renders with orientation",
      props: { orientation: "vertical", ...requiredProps },
    },
    {
      desc: "renders with variant",
      props: { variant: "lightweight", ...requiredProps },
    },
    {
      desc: "renders with display",
      props: { display: "flex", ...requiredProps },
    },
    {
      desc: "renders with custom className",
      props: { className: "test-classname", ...requiredProps },
    },
  ]);
});
