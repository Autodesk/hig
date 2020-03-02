import { BORDER_RADIUS, COLOR, LENGTH } from "../../consts/types";

export default {
  "scrollbar.radii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.pill"
    }
  },
  "scrollbar.height": {
    type: LENGTH,
    value: "5px"
  },
  "scrollbar.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.2
    }
  },
  "scrollbar.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.5
    }
  }
};
