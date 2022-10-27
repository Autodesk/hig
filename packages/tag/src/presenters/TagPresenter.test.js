import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import TagPresenter from "./TagPresenter";

describe("tag/TagPresenter", () => {
  const props = {
    children: "Tag Presenter",
  };
  takeSnapshotsOf(TagPresenter, [
    {
      desc: "renders when hovered",
      props: { ...props, hasHover: true },
    },
    {
      desc: "renders when focused",
      props: { ...props, hasFocus: true },
    },
    {
      desc: "renders when pressed",
      props: { ...props, isPressed: true },
    },
    {
      desc: "renders when selected and hovered",
      props: { ...props, hasHover: true, selected: true },
    },
    {
      desc: "renders when selected and focused",
      props: { ...props, hasFocus: true, selected: true },
    },
    {
      desc: "renders when selected and pressed",
      props: { ...props, isPressed: true, selected: true },
    },
  ]);
});
