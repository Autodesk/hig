export default function stylesheet(props) {
  return {
    display: "flex",

    ...(props.isWrappingActions && {
      flexDirection: "column"
    })
  };
}
