import { cx } from "emotion";

export default function(className, appendedString) {
  return (
    className &&
    className
      .split(" ")
      .reduce((acc, cur) => cx(acc, `${cur.trim()}__${appendedString}`), "")
  );
}
