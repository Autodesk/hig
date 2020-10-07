function getStylesByPlacement(placement) {
  if (placement === `top`) {
    return { top: `10px` };
  }
  if (placement === `bottom`) {
    return { bottom: `10px` };
  }
  return {};
}

export default function stylesheet(props) {
  const { placement, stylesheet: customStylesheet } = props;
  const styles = {
    toastListWrapper: {
      position: `fixed`,
      right: `10px`,
      ...(placement ? getStylesByPlacement(placement) : {})
    }
  };

  return customStylesheet ? customStylesheet(styles, props) : styles;
}
