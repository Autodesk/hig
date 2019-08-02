import { COLOR } from "../../consts/types";

export default {
  "thumbnail.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.charcoal100"
    }
  },
  "thumbnail.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  }
};
