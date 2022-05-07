export default function stylesheet(props) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    dropdownWrapper: {
      position: "relative",
      width: "100%",
    },
  };

  return customStylesheet ? customStylesheet(styles, props) : styles;
}
