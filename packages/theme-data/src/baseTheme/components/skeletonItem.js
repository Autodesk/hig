import { BORDER_RADIUS, COLOR, LENGTH } from "../../consts/types";

export default {
  "skeletonItem.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium",
    },
  },
  "skeletonItem.minHeight": {
    type: LENGTH,
    value: {
      ref: "density.spacings.medium",
    },
  },
  "skeletonItem.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.black",
    },
    transform: {
      alpha: 0.06,
    },
  },
  "skeletonItem.highlightColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
    transform: {
      alpha: 0.3,
    },
  },
  /**
   * ## Deprecated
   *
   *
   */
  "skeletonItem.defaultHeight": {
    type: LENGTH,
    value: {
      ref: "skeletonItem.minHeight",
    },
    metadata: {
      deprecated: {
        equivalent: "skeletonItem.minHeight",
      },
    },
  },
};
