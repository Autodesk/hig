export default function stylesheet(props, themeData) {
  const { maxHeight, stylesheet: customStylesheet } = props;
  const styles = {
    content: {
      minHeight: `32px`,
      padding: `8px 12px`,
      boxSizing: `border-box`
    },
    panel: {
      border: themeData
        ? `1px solid ${themeData["tooltip.backgroundColor"]}`
        : `none`,
      backgroundColor: themeData
        ? themeData["tooltip.backgroundColor"]
        : `none`,
      borderRadius: themeData ? themeData["tooltip.borderRadius"] : 0,
      maxHeight: maxHeight ? `${maxHeight}px` : undefined
    },
    panelInner: {
      position: `relative`
    },
    textContent: {
      whiteSpace: `nowrap`
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
