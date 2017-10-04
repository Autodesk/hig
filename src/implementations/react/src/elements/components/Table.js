import * as HIG from "hig-vanilla";
import * as PropTypes from "prop-types";
import React, { Component } from "react";
import TableAdapter from "../../adapters/TableAdapter";
import SlotCell from "./SlotCell";
import SlotHeadCell from "./SlotHeadCell";
import SelectableTable from "./SelectableTable";

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
    selectable: PropTypes.bool
  };

  static defaultProps = {
    columns: [],
    data: []
  };

  renderTable(columns, data, density) {
    return (
      <TableAdapter density={density}>
        <TableHead>
          {columns.map((column, index) => getHeadCell({ column, index }))}
        </TableHead>
        {data.map((row, index) => (
          <TableRow key={row.id} selected={row.selected}>
            {columns.map((column, index) =>
              getCell({ column, data: row, index })
            )}  
          </TableRow>
        ))}
      </TableAdapter>
    );
  }

  render() {
    const isSelectable = this.props.selectable;
    return (
      <div>
        {isSelectable
          ? <SelectableTable
              columns={this.props.columns}
              data={this.props.data}
              {...this.props}
            >
              {this.renderTable}
            </SelectableTable>
          : this.renderTable(this.props.columns, this.props.data, this.props.density)}
      </div>
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
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      alignment: PropTypes.alignment,
      width: PropTypes.string,
      id: PropTypes.string,
      Cell: PropTypes.any
    })
  )
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
      <SlotCell key={props.column.id} >
        <props.column.Cell {...props} />
      </SlotCell>
    );
  } else {
    return <TextCell key={props.column.id} text={content} />;
  }
}

function getHeadCell(props) {
   if (typeof props.column.HeaderCell === 'string') {
      return (
        <TextHeadCell
          key={props.column.id}
          text={props.column.HeaderCell}
          alignment={props.column.alignment}
          width={props.column.width}
        />
      );
    } else {
      return (
        <SlotHeadCell key={props.column.id} width={props.column.width} >
          <props.column.HeaderCell {...props}  />
        </SlotHeadCell>
      );
  }
}
