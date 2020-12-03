export default function constructPlaceholder(label) {
  return label.match(/\b(\w)/g).join("");
}
