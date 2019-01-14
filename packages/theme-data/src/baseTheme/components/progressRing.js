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
  "progressRing.highlightColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue400"
    }
  }
};
