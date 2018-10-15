import { sizes } from "./availableSizes";

function getSpacing(spacing, themeData) {
  return themeData[`density.spacings.${sizes[spacing]}`];
}

export default function stylesheet(props, themeData) {
  return {
    spacer: {
      width: props.size ? props.size : getSpacing(props.spacing, themeData),
      height: props.size ? props.size : getSpacing(props.spacing, themeData)
    }
  };
}
