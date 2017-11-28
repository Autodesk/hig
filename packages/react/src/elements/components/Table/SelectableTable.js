import { Table as VanillaTable } from "hig-vanilla";
import * as PropTypes from "prop-types";
import React, { Component } from "react";
import HeaderCheckbox from "./HeaderCheckbox";
import RowCheckbox from "./RowCheckbox";

class SelectableTable extends Component {
  static propTypes = {
    selectable: PropTypes.bool
  };

  static defaultProps = {
    columns: [],
    data: [],
    onSelectAllSelectionChange: () => {},
    onRowSelectionChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      rows: {},
      allRowsSelected: false
    };

    this.initialProps = props;
  }

  selectRow = rowInfo => {
    const newRows = {
      ...this.state.rows,
      [rowInfo.id]: { selected: rowInfo.selected }
    };
    this.setState({ rows: newRows });
  };

  handleAllSelectionChange = event => {
    this.setState({ allRowsSelected: event.target.checked });
    this.props.onSelectAllSelectionChange({ selected: event.target.checked });
  };

  handleRowCheckboxOnChange = rowInfo => {
    this.selectRow(rowInfo);
    this.props.onRowSelectionChange(rowInfo);
  };

  checkboxHeader = () => ({
    id: "checkboxHeader",
    alignment: "center",
    width: "50px",
    HeaderCell: () => (
      <HeaderCheckbox
        onSelectAllSelectionChange={this.handleAllSelectionChange}
        selected={this.renderedAllRowsSelected()}
        style={{ background: "red" }}
      />
    ),
    Cell: props => (
      <RowCheckbox
        id={props.data.id}
        selected={props.data.selected}
        onChange={this.handleRowCheckboxOnChange}
      />
    )
  });

  isRowSelected(row) {
    if (row.selected !== undefined) {
      return row.selected;
    } else if (this.state.rows[row.id] && this.state.rows[row.id].selected) {
      return this.state.rows[row.id].selected;
    }
    return false;
  }

  mergeRowState = row => ({
    ...row,
    selected: this.isRowSelected(row)
  });

  renderedAllRowsSelected() {
    if (this.props.allRowsSelected !== undefined) {
      return this.props.allRowsSelected;
    }
    return this.state.allRowsSelected;
  }

  render() {
    const columns = [this.checkboxHeader()].concat(this.props.columns);
    const data = this.initialProps.data.map(this.mergeRowState);
    return this.props.children(columns, data, this.props.density);
  }
}

SelectableTable.__docgenInfo = {
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
    }
  }
};

SelectableTable.propTypes = {
  density: PropTypes.oneOf(VanillaTable.AvailableDensities),
  data: PropTypes.arrayOf(PropTypes.object),
  onRowSelectionChange: PropTypes.func,
  children: PropTypes.func,
  onSelectAllSelectionChange: PropTypes.func,
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

export default SelectableTable;
