import { BORDER_WIDTH, COLOR } from "../../consts/types";

export default {
  "avatarBundle.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "avatarBundle.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100"
    }
  },
  "avatarBundle.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100"
    }
  },
  "avatarBundle.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.100"
    }
  },
  "avatarBundle.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "avatarBundle.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "avatarBundle.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "avatarBundle.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  }
};
