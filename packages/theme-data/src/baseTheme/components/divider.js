import { LENGTH, COLOR } from "../../consts/types";

export default {
  "divider.borderWidth": {
    type: LENGTH,
    value: "1px"
  },
  "divider.lightColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  },
  "divider.heavyColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.heavyweight"
    }
  },
  /**
   * ## Deprecated
   *
   *
   */
  "divider.width": {
    type: LENGTH,
    value: {
      ref: "divider.borderWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "divider.borderWidth"
      }
    }
  }
};
