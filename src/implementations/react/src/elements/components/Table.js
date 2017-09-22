import * as HIG from "hig-vanilla";
import * as PropTypes from "prop-types";
import React, { Component } from "react";
import PropTypes from "prop-types";

import TableAdapter from "../../adapters/TableAdapter";
import SlotCell from "./SlotCell";


const TableHead = TableAdapter.TableHead;
const TableRow = TableAdapter.TableRow;
const TextHeadCell = TableAdapter.TableHead.TextHeadCell;
const TextCell = TableAdapter.TableRow.TextCell;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    selectable: PropTypes.bool,

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
          <TableRow key={row.id} selected={row.selected}>
            {this.props.columns.map((column, index) => getCell({ column, data: row, index }))}
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

Table.propTypes = {
  density: PropTypes.oneOf(HIG.Table.AvailableDensities),
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string,
    alignment: PropTypes.alignment,
    width: PropTypes.string,
    id: PropTypes.string,
    Cell: PropTypes.any
  })),
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
      <SlotCell key={props.index}>
        <props.column.Cell {...props} />
      </SlotCell>
    );
  } else {
    return <TextCell key={props.index} text={content} />;
  }
}
