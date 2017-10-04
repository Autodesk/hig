import * as HIG from "hig-vanilla";
import * as PropTypes from "prop-types";
import React, { Component } from "react";
import HeaderCheckbox from "./FormElements/HeaderCheckbox";
import RowCheckbox from "./FormElements/RowCheckbox";

class SelectableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: {},
      allRowsSelected: false
    };

    this.initialProps = props;
  }

  static propTypes = {
    selectable: PropTypes.bool
  };

  static defaultProps = {
    columns: [],
    data: [],
    onSelectAllSelectionChange: () => {},
    checkboxCallback: () => {}
  };

  selectRow = rowInfo => {
    const newRows = {
      ...this.state.rows,
      [rowInfo.id]: { selected: rowInfo.selected }
    };
    this.setState({ rows: newRows });
  };

  renderedAllRowsSelected() {
    if (this.props.allRowsSelected !== undefined) {
      return this.props.allRowsSelected;
    } else {
      return this.state.allRowsSelected;
    }
  }

  handleAllSelectionChange = event => {
    this.setState({ allRowsSelected: event.target.checked });
    this.props.onSelectAllSelectionChange({ selected: event.target.checked });
  };

  handleRowCheckboxOnChange = rowInfo => {
    this.selectRow(rowInfo);
    this.props.checkboxCallback(rowInfo);
  };

  checkboxHeader = () => {
    return {
      id: "checkboxHeader",
      alignment: "center",
      width: "50px",
      HeaderCell: props => (
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
    };
  };

  isRowSelected(row) {
    if (row.selected !== undefined) {
      return row.selected;
    } else if (this.state.rows[row.id] && this.state.rows[row.id].selected) {
      return this.state.rows[row.id].selected;
    }
  }

  mergeRowState = row => {
    return {
      ...row,
      selected: this.isRowSelected(row)
    };
  };

  render() {
    const columns = [this.checkboxHeader()].concat(this.props.columns);
    const data = this.initialProps.data.map(this.mergeRowState);
    return this.props.children(columns, data, this.props.density);
  }
}

SelectableTable.__docgenInfo = {
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

SelectableTable.propTypes = {
  density: PropTypes.oneOf(HIG.Table.AvailableDensities),
  data: PropTypes.arrayOf(PropTypes.object),
  checkboxCallback: PropTypes.func,
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
