import { OPACITY } from "../../consts/types";

export default {
  // Deprecated
  "component.disabled.opacity": {
    type: OPACITY,
    value: "0.4",
    metadata: {
      deprecated: {
        equivalent: "colorScheme.opacity.disabled"
      }
    }
  }
};
