export default function(props, themeData) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    transform: props.minimized ? "rotate(-90deg)" : "rotate(0deg)",
    height: "100%",
    padding: "6px 10px",
    cursor: "pointer"
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData);
  }

  return styles;
}
