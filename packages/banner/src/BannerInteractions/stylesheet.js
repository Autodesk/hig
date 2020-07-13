export default function stylesheet(props, themeData) {
  const {stylesheet:customStylesheet} = props;
  const styles = {
    display: "flex"
  };
  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;

}
