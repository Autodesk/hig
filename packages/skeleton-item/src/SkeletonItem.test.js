import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";
import SkeletonItem from "./SkeletonItem";

describe("skeleton-item/SkeletonItem", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(SkeletonItem, [
      {
        desc: "renders with no props",
        props: {},
      },
      {
        desc: "renders with props",
        props: {
          maxWidth: "100px",
          marginBottom: "12px",
          height: "90px",
        },
      },
      {
        desc: "renders with custom className",
        props: {
          maxWidth: "100px",
          marginBottom: "12px",
          height: "90px",
          className: "test-classname",
        },
      },
    ]);
  });
});
