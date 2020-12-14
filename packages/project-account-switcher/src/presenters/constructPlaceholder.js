export default function constructPlaceholder(label) {
  return label.split(" ").reduce((acc, cur) => acc + cur.slice(0, 1), "");
}
