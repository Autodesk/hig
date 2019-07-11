import { sizes } from "./availableSizes";

function getSpacing(spacing, themeData) {
  return themeData[`density.spacings.${sizes[spacing]}`];
}

export default function stylesheet(props, themeData) {
  return {
    spacer: {
      width: props.size ? props.size : getSpacing(props.spacing, themeData),
      height: props.size ? props.size : getSpacing(props.spacing, themeData),
      flex: props.size
        ? `0 0 ${props.size}`
        : `0 0 ${getSpacing(props.spacing, themeData)}`
    }
  };
}
