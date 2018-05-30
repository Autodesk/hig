function createRowGenerator(columns) {
  return function generateRow(row, rowIndex) {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.key] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `row-${rowIndex}`,
        parentId: null
      }
    );
  };
}

export default function generateData(columns, count = 200) {
  const generateRow = createRowGenerator(columns);

  return new Array(count).fill(0).map(generateRow);
}
