import { COLOR } from "../../consts/types";

export default {
  // Info
  "banner.info.iconBackground": {
    type: COLOR,
    value: { ref: "colorScheme.infoColor" }
  },
  "banner.info.borderColor": { type: COLOR },
  "banner.info.backgroundColor": { type: COLOR },

  // Error
  "banner.error.iconBackground": {
    type: COLOR,
    value: { ref: "colorScheme.errorColor" }
  },
  "banner.error.borderColor": { type: COLOR },
  "banner.error.backgroundColor": { type: COLOR },

  // Success
  "banner.success.iconBackground": {
    type: COLOR,
    value: { ref: "colorScheme.successColor" }
  },
  "banner.success.borderColor": { type: COLOR },
  "banner.success.backgroundColor": { type: COLOR },

  // Warning
  "banner.warning.iconBackground": {
    type: COLOR,
    value: { ref: "colorScheme.warningColor" }
  },
  "banner.warning.borderColor": { type: COLOR },
  "banner.warning.backgroundColor": { type: COLOR }
};
