import { COLOR } from "../../consts/types";

export default {
  accentColor: { type: COLOR },
  baseColor: { type: COLOR },
  highShadowColor: { type: COLOR },
  iconColor: { type: COLOR },
  lowShadowColor: { type: COLOR },
  surfaceLevel100Color: { type: COLOR },
  surfaceLevel200Color: { type: COLOR },
  surfaceLevel250Color: { type: COLOR },
  surfaceLevel300Color: { type: COLOR },
  surfaceLevel350Color: { type: COLOR },
  "component.backgroundColor": { type: COLOR },
  textColor: { type: COLOR },
  textColorDim: { type: COLOR },
  infoColor: {
    value: {
      ref: "basics.colors.autodeskBlue400"
    },
    type: COLOR
  },
  errorColor: {
    value: {
      ref: "basics.colors.red500"
    },
    type: COLOR
  },
  successColor: {
    value: {
      ref: "basics.colors.green500"
    },
    type: COLOR
  },
  warningColor: {
    value: {
      ref: "basics.colors.yellowOrange500"
    },
    type: COLOR
  }
};
