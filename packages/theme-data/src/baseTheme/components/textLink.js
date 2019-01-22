import { COLOR, LENGTH } from "../../consts/types";

export default {
  "textLink.textColor": {
    type: COLOR,
    value: "#006EAF"
  },
  "textLink.hover.underline.color": {
    type: COLOR,
    value: "#006EAF"
  },
  "textLink.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "textLink.focus.halo.width": {
    type: LENGTH,
    value: "2px"
  }
};
