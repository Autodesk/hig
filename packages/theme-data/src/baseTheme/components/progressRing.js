import { COLOR } from "../../consts/types";

export default {
  "progress.ring.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.black"
    },
    transform: {
      alpha: "0.05"
    }
  },
  "progressRing.backgroundColor": {
    type: COLOR,
    value: {
      ref: "progress.ring.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "progress.ring.backgroundColor"
      }
    }
  },
  "progress.ring.highlightColor1": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.600"
    }
  },
  "progressRing.highlightColor1": {
    type: COLOR,
    value: {
      ref: "progress.ring.highlightColor1"
    },
    metadata: {
      deprecated: {
        equivalent: "progress.ring.highlightColor1"
      }
    }
  },
  "progress.ring.highlightColor2": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.400"
    }
  },
  "progressRing.highlightColor2": {
    type: COLOR,
    value: {
      ref: "progress.ring.highlightColor2"
    },
    metadata: {
      deprecated: {
        equivalent: "progress.ring.highlightColor2"
      }
    }
  }
};
