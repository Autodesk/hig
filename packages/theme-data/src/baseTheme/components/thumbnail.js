import { COLOR } from "../../consts/types";

export default {
  "thumbnail.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100",
    },
  },
  "thumbnail.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600",
    },
    transform: {
      alpha: 0.5,
    },
  },
};
