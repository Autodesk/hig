import * as HIG from "hig-vanilla";
import * as PropTypes from "prop-types";
import React, { Component } from "react";
import TableAdapter from "../../../adapters/Table/TableAdapter";
import TableHeadAdapter from "../../../adapters/Table/TableHeadAdapter";
import TableRowAdapter from "../../../adapters/Table/TableRowAdapter";
import TextHeadCellAdapter from "../../../adapters/Table/TextHeadCellAdapter";
import TextCell from "../../../adapters/Table/TextCellAdapter";
import SlotCell from "../../../adapters/Table/SlotCellAdapter";

import SlotHeadCell from "../../../adapters/Table/SlotHeadCellAdapter";
import SelectableTable from "./SelectableTable";

function getCell(props) {
  let content;
  switch (typeof props.column.accessor) {
    case "function": {
      content = props.column.accessor(props.data);
      break;
    }
    default: {
      content = props.data[props.column.accessor];
    }
  }

  if (props.column.Cell) {
    return (
      <SlotCell key={props.column.id}>
        <props.column.Cell {...props} />
      </SlotCell>
    );
  }
  return <TextCell key={props.column.id} text={content} />;
}

function getHeadCell(props) {
  if (typeof props.column.HeaderCell === "string") {
    return (
      <TextHeadCellAdapter
        key={props.column.id}
        text={props.column.HeaderCell}
        alignment={props.column.alignment}
        width={props.column.width}
      />
    );
  }
  return (
    <SlotHeadCell key={props.column.id} width={props.column.width}>
      <props.column.HeaderCell {...props} />
    </SlotHeadCell>
  );
}

class Table extends Component {
  static defaultProps = {
    columns: [],
    data: [],
    selectable: false,
    density: undefined
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTable(columns, data, density) {
    return (
      <TableAdapter density={density}>
        <TableHeadAdapter>
          {columns.map((column, index) => getHeadCell({ column, index }))}
        </TableHeadAdapter>
        {data.map(row => (
          <TableRowAdapter key={row.id} selected={row.selected}>
            {columns.map((column, index) =>
              getCell({ column, data: row, index })
            )}
          </TableRowAdapter>
        ))}
      </TableAdapter>
    );
  }

  render() {
    const isSelectable = this.props.selectable;
    return (
      <div>
        {isSelectable ? (
          <SelectableTable
            columns={this.props.columns}
            data={this.props.data}
            {...this.props}
          >
            {this.renderTable}
          </SelectableTable>
        ) : (
          this.renderTable(
            this.props.columns,
            this.props.data,
            this.props.density
          )
        )}
      </div>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      alignment: PropTypes.alignment,
      width: PropTypes.string,
      id: PropTypes.string,
      Cell: PropTypes.any
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
  density: PropTypes.oneOf(HIG.Table.AvailableDensities),
  selectable: PropTypes.bool
};

Table.__docgenInfo = {
  props: {
    columns: {
      description: "provides content for header cells"
    },
    data: {
      description: "provides content table cells"
    },
    density: {
      description: "sets the size of the table"
    },
    onRowSelectionChange: {
      description: "called when user selects or deselects a row"
    },
    onSelectAllSelectionChange: {
      description: "called when user checks or unchecks the select-all checkbox"
    },
    selectable: {
      description:
        "when true adds checkboxes to each row, and a select-all checkbox to the header"
    }
  }
};

export default Table;
