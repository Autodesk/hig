export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    timestamp: {
      color: themeData["timestamp.fontColor"],
      fontFamily: themeData["timestamp.fontFamily"],
      fontSize: themeData["timestamp.fontSize"],
      fontWeight: themeData["timestamp.fontWeight"],
      lineHeight: themeData["timestamp.lineHeight"],
      margin: 0
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
