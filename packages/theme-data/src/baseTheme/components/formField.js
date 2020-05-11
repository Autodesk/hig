import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  FONT_FAMILY,
  LINE_HEIGHT,
  LENGTH
} from "../../consts/types";

export default {
  // Deprecated
  "formField.instructionalText.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "input.value.fontSize"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.fontSize"
      }
    }
  },
  "formField.instructionalText.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "input.value.fontWeight"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.fontWeight"
      }
    }
  },
  "formField.instructionalText.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "input.value.fontFamily"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.fontFamily"
      }
    }
  },
  "formField.instructionalText.fontColor": {
    type: COLOR,
    value: {
      ref: "input.value.placeholderFontColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.placeholderFontColor"
      }
    }
  },
  "formField.instructionalText.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.medium"
    },
    metadata: {
      deprecated: {
        equivalent: "basics.lineHeights.medium"
      }
    }
  },
  "formField.icon.width": {
    type: LENGTH,
    value: "24px",
    metadata: {
      deprecated: {
        equivalent: "basics.spacings"
      }
    }
  },
  "formField.icon.paddingRight": {
    type: LENGTH,
    value: {
      ref: "density.spacings.small"
    },
    metadata: {
      deprecated: {
        equivalent: "density.spacings.small"
      }
    }
  },
  "formField.icon.color": {
    type: COLOR,
    value: {
      ref: "input.indicator.default"
    },
    metadata: {
      deprecated: {
        equivalent: "input.indicator.default"
      }
    }
  }
};
