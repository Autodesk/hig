import { BORDER_RADIUS, COLOR, LENGTH } from "../../consts/types";

export default {
  "skeletonItem.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "basics.borderRadii.medium" }
  },
  "skeletonItem.defaultHeight": {
    type: LENGTH,
    value: { ref: "density.spacings.medium" }
  },
  "skeletonItem.backgroundColor": {
    type: COLOR
  },
  "skeletonItem.highlightColor": {
    type: COLOR
  }
};
