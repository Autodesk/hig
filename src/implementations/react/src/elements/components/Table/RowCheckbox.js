import React from "react";
import * as PropTypes from "prop-types";

import Checkbox from "../../../adapters/FormElements/CheckboxAdapter";
import {colors} from "hig-vanilla"

class RowCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };

  onChange = event => {
    this.props.onChange({ id: this.props.id, selected: event.target.checked });
  };

  render() {
    const styleProps = {
      position: "absolute",
      background: colors["hig-white"],
      top: "0",
      right: "0",
      left: "0",
      bottom: "-1px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center" }

    return (
      <div style={styleProps}>
        <Checkbox onChange={this.onChange} checked={this.props.selected} />
      </div>
    );
  }
}

export default RowCheckbox;
