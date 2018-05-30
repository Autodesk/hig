export default function generateColumns(count = 10) {
  return new Array(count).fill(0).map((column, columnIndex) => ({
    key: `column-${columnIndex}`,
    dataKey: `column-${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150
  }));
}
