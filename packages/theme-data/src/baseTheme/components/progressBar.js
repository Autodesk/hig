import { COLOR, BORDER_RADIUS, LENGTH } from "../../consts/types";

export default {
  "progressBar.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.black"
    },
    transform: {
      alpha: "0.05"
    }
  },
  "progressBar.highlightColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue400"
    }
  },
  "progressBar.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium"
    }
  },
  "progressBar.height": {
    type: LENGTH,
    value: "4px"
  }
};
