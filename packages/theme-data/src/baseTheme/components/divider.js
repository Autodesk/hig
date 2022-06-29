import { LENGTH, COLOR } from "../../consts/types";

export default {
  "divider.borderWidth": {
    type: LENGTH,
    value: "1px",
  },
  "divider.lightColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight",
    },
  },
  "divider.heavyColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.heavyweight",
    },
  },
};
