import { COLOR } from "../../consts/types";

export default {
  "progress.ring.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.black"
    },
    transform: {
      alpha: "0.05"
    }
  },
  "progress.ring.highlightColor1": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.600"
    }
  },
  "progress.ring.highlightColor2": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.400"
    }
  },
  /**
   *  ## Deprecated
   *
   *
   */
  "progressRing.backgroundColor": {
    type: COLOR,
    value: {
      ref: "progress.ring.backgroundColor"
    }
  },
  "progressRing.highlightColor1": {
    type: COLOR,
    value: {
      ref: "progress.ring.highlightColor1"
    }
  },
  "progressRing.highlightColor2": {
    type: COLOR,
    value: {
      ref: "progress.ring.highlightColor2"
    }
  }
};
