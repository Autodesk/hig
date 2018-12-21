import { COLOR, OPACITY } from "../../consts/types";

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
  "component.disabled.opacity" {
    type: OPACITY,
    value: "0.5"
  },
  textColor: { type: COLOR },
  textColorDim: { type: COLOR }
};
