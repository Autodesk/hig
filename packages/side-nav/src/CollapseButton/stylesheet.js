export default function(props) {
  return {
    transform: props.minimized ? "rotate(-90deg)" : "rotate(0deg)",
    height: "100%",
    padding: "6px 10px",
    cursor: "pointer"
  };
}
