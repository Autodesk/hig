import { placements } from "./placements";
import { positions } from "./BannerAnimator/positions";

export default {
  [placements.ABOVE]: {
    position: positions.TOP,
    hasBounce: true,
    hasPush: true,
  },
  [placements.ABOVE_OVERLAY]: {
    position: positions.TOP,
    hasBounce: true,
    hasPush: false,
  },
  [placements.BETWEEN]: {
    position: positions.TOP,
    hasBounce: false,
    hasPush: true,
  },
  [placements.BELOW_OVERLAY]: {
    position: positions.BOTTOM,
    hasBounce: true,
    hasPush: false,
  },
};
