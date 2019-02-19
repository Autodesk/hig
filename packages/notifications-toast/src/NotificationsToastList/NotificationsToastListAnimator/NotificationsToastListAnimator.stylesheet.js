function getStylesByPlacement(placement) {
  if (placement === `top`) {
    return { flexDirection: `column-reverse` };
  }
  if (placement === `bottom`) {
    return { flexDirection: `column` };
  }
  return {};
}

export default function stylesheet(placement) {
  return {
    toastList: {
      display: `flex`,
      minWidth: `340px`,
      ...(placement ? getStylesByPlacement(placement) : {}),
      "& > div": {
        marginBottom: `10px`
      }
    }
  };
}
