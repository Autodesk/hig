import { COLOR, BORDER_WIDTH, BORDER_RADIUS, LENGTH } from "../../consts/types";

export default {
  "checkbox.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "checkbox.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "checkbox.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "checkbox.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "checkbox.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "checkbox.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "checkbox.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "checkbox.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "checkbox.unchecked.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "checkbox.unchecked.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "checkbox.unchecked.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "checkbox.checked.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "checkbox.checked.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "checkbox.checked.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "checkbox.checked.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  }
};
