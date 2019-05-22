import { COLOR, LENGTH } from "../../consts/types";

export default {
  "textLink.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLinkAgainstLight"
    }
  },
  "textLink.hover.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLinkAgainstLight"
    }
  },
  "textLink.focus.textColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLinkAgainstLight"
    }
  },
  "textLink.hover.underline.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.textLinkAgainstLight"
    }
  },
  "textLink.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
    }
  },
  "textLink.focus.halo.width": {
    type: LENGTH,
    value: "2px"
  }
};
