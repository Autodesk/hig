import { COLOR, BORDER_RADIUS, LENGTH } from "../../consts/types";

export default {
  "progress.bar.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.black",
    },
    transform: {
      alpha: "0.05",
    },
  },
  "progress.bar.highlightColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue400",
    },
  },
  "progress.bar.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium",
    },
  },
  "progress.bar.minHeight": {
    type: LENGTH,
    value: "4px",
  },
  /**
   *  ## Deprecated
   *
   *
   */
  "progressBar.backgroundColor": {
    type: COLOR,
    value: {
      ref: "progress.bar.backgroundColor",
    },
    metadata: {
      deprecated: {
        equivalent: "progress.bar.backgroundColor",
      },
    },
  },
  "progressBar.highlightColor": {
    type: COLOR,
    value: {
      ref: "progress.bar.highlightColor",
    },
    metadata: {
      deprecated: {
        equivalent: "progress.bar.highlightColor",
      },
    },
  },
  "progressBar.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "progress.bar.borderRadius",
    },
    metadata: {
      deprecated: {
        equivalent: "progress.bar.borderRadius",
      },
    },
  },
  "progressBar.height": {
    type: LENGTH,
    value: {
      ref: "progress.bar.minHeight",
    },
    metadata: {
      deprecated: {
        equivalent: "progress.bar.minHeight",
      },
    },
  },
};
