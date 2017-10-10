import React from "react";
import * as PropTypes from "prop-types";
import {colors} from "hig-vanilla"

import Checkbox from "../../../adapters/FormElements/CheckboxAdapter";

class HeaderCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initialProps = props;
  }

  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };

  render() {
    const styleProps = {
      position: "absolute",
      background: colors["hig-white"],
      top: "0",
      right: "0",
      left: "0",
      bottom: "-1px",
      width: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center" }
    return (
      <div style={styleProps}>
        <Checkbox checked={this.props.selected} onChange={this.props.onSelectAllSelectionChange}/>
      </div>
    );
  }
}

export default HeaderCheckbox;
