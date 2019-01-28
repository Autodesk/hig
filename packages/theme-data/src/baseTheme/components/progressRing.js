import { COLOR } from "../../consts/types";

export default {
  "progressRing.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.black"
    },
    transform: {
      alpha: "0.05"
    }
  },
  "progressRing.highlightColor1": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "progressRing.highlightColor2": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: "0.60"
    }
  }
};
