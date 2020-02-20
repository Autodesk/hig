import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import SkeletonItem from "./SkeletonItem";

describe("skeleton-item/SkeletonItem", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(SkeletonItem, [
      {
        description: "renders with no props",
        props: {}
      },
      {
        description: "renders with props",
        props: {
          maxWidth: "100px",
          marginBottom: "12px",
          height: "90px"
        }
      },
      {
        description: "renders with custom className",
        props: {
          maxWidth: "100px",
          marginBottom: "12px",
          height: "90px",
          className: "test-classname"
        }
      }
    ]);
  });
});
