import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Tag from "./Tag";

describe("tag/Tag", () => {
  const props = {
    children: "Tag Test",
  };
  takeSnapshotsOf(Tag, [
    {
      desc: "renders with required props",
      props: { ...props },
    },
    {
      desc: "renders with close button",
      props: { ...props, onClose: () => {} },
    },
    {
      desc: "renders when selected",
      props: { ...props, selected: true },
    },
    {
      desc: "renders when disabled",
      props: { ...props, disabled: true },
    },
    {
      desc: "renders when selected and disabled",
      props: { ...props, disabled: true, selected: true },
    },
    {
      desc: "renders when selected, disabled and with close button",
      props: { ...props, disabled: true, selected: true, onClose: () => {} },
    },
  ]);
});
