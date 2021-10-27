import { COLOR, LENGTH } from "../../consts/types";

export default {
  "textLink.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "textLink.focus.haloWidth": {
    type: LENGTH,
    value: "2px"
  },
  "textLink.primary.default.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLink.primary.againstLight"
    }
  },
  "textLink.primary.hover.fontColor": {
    type: COLOR,
    value: {
      ref: "textLink.primary.default.fontColor"
    }
  },
  "textLink.primary.focus.fontColor": {
    type: COLOR,
    value: {
      ref: "textLink.primary.default.fontColor"
    }
  },
  "textLink.primary.hover.underlineColor": {
    type: COLOR,
    value: {
      ref: "textLink.primary.default.fontColor"
    }
  },
  "textLink.secondary.default.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLink.secondary.againstLight"
    }
  },
  "textLink.secondary.hover.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLink.secondary.againstLight"
    }
  },
  "textLink.secondary.focus.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLink.secondary.againstLight"
    }
  },
  "textLink.secondary.hover.underlineColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLink.secondary.againstLight"
    }
  },
  /**
   * ## Deprecated
   *
   *
   */
  "textLink.textColor": {
    type: COLOR,
    value: {
      ref: "textLink.primary.default.fontColor"
    }
  },
  "textLink.hover.textColor": {
    type: COLOR,
    value: {
      ref: "textLink.primary.hover.fontColor"
    }
  },
  "textLink.focus.textColor": {
    type: COLOR,
    value: {
      ref: "textLink.primary.focus.fontColor"
    }
  },
  "textLink.hover.underline.color": {
    type: COLOR,
    value: {
      ref: "textLink.primary.hover.underlineColor"
    }
  },
  "textLink.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "textLink.focus.haloColor"
    }
  },
  "textLink.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "textLink.focus.haloWidth"
    }
  }
};
