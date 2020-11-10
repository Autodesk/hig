export default function constructPlaceholder(label) {
  return (label.match(/(?<=[-\s._'",;]|^)([^-\s._'",;])/g) || []).join("");
}
