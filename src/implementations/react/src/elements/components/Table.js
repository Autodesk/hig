import React, { Component } from "react";
import PropTypes from "prop-types";

import PlaygroundSection from "../../playground/PlaygroundSection";
import Checkbox from "../../adapters/FormElements/CheckboxAdapter";
import TableAdapter from "../../adapters/TableAdapter";
import SlotCell from "./SlotCell";

const TableHead = TableAdapter.TableHead;
const TableRow = TableAdapter.TableRow;
const TextHeadCell = TableAdapter.TableHead.TextHeadCell;
const TextCell = TableAdapter.TableRow.TextCell;
const IconCell = TableAdapter.TableRow.IconCell;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    columns: [],
    data: []
  };

  render() {
    return (
      <TableAdapter density={this.props.density}>
        <TableHead>
          {this.props.columns.map(column => (
            <TextHeadCell
              text={column.Header}
              alignment={column.alignment}
              width={column.width}
              key={column.id}
            />
          ))}
        </TableHead>
        {this.props.data.map(row => (
          <TableRow key={row.id}>
            {this.props.columns.map(column => getCell({ column, data: row }))}
          </TableRow>
        ))}
      </TableAdapter>
    );
  }
}

Table.__docgenInfo = {
  props: {
    density: {
      description: "sets the size of the table"
    },

    columns: {
      description: "provides content for header cells"
    },

    data: {
      description: "provides content table cells"
    }
  }
};

export default Table;

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
      <SlotCell key={props.column.accessor}>
        <props.column.Cell {...props} />
      </SlotCell>
    );
  } else {
    return <TextCell key={props.column.accessor} text={content} />;
  }
}
