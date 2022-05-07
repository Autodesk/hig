export default function stylesheet(
  { fontSize, fontWeight, color, fontFamily, lineHeight, layout },
  themeData
) {
  return {
    fontSize: fontSize ? themeData[fontSize] : undefined,
    fontWeight: fontWeight ? themeData[fontWeight] : undefined,
    color: color || undefined,
    fontFamily: fontFamily ? themeData[fontFamily] : undefined,
    lineHeight: lineHeight ? themeData[lineHeight] : undefined,
    display: layout || "block",
  };
}
