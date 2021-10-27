import { COLOR } from "../../consts/types";

export default {
  "banner.error.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.tertiary.salmon.100"
    }
  },
  "banner.error.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.secondary.red.300"
    }
  },
  "banner.error.iconField.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.error"
    }
  },
  "banner.info.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.100"
    }
  },
  "banner.info.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.200"
    }
  },
  "banner.info.iconField.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.info"
    }
  },
  "banner.success.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.secondary.green.100"
    }
  },
  "banner.success.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.secondary.green.300"
    }
  },
  "banner.success.iconField.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.success"
    }
  },
  "banner.warning.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.secondary.yellowOrange.100"
    }
  },
  "banner.warning.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.secondary.yellowOrange.300"
    }
  },
  "banner.warning.iconField.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.warning"
    }
  },
  /**
   *  ## Deprecated
   *
   *
   */
  "banner.info.iconBackground": {
    type: COLOR,
    value: {
      ref: "banner.info.iconField.backgroundColor"
    }
  },
  "banner.success.iconBackground": {
    type: COLOR,
    value: {
      ref: "banner.success.iconField.backgroundColor"
    }
  },
  "banner.warning.iconBackground": {
    type: COLOR,
    value: {
      ref: "banner.warning.iconField.backgroundColor"
    }
  },
  "banner.error.iconBackground": {
    type: COLOR,
    value: {
      ref: "banner.error.iconField.backgroundColor"
    }
  }
};
