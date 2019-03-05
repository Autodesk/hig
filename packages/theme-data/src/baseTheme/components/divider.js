import { LENGTH, COLOR } from "../../consts/types";

export default {
  "divider.width": {
    type: LENGTH,
    value: "1px"
  },
  "divider.lightColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.charcoal900"
    },
    transform: {
      alpha: 0.1
    }
  },
  "divider.heavyColor": {
    type: COLOR,
    value: {
      ref: "divider.lightColor"
    },
    transform: {
      alpha: 0.25
    }
  }
};
