import React from "react";
import PropTypes from "prop-types";
import { colors } from "hig-vanilla";

import Checkbox from "../../../adapters/FormElements/CheckboxAdapter";

class HeaderCheckbox extends React.Component {
  static propTypes = {
    selected: PropTypes.bool,
    onSelectAllSelectionChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.initialProps = props;
  }

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
      justifyContent: "center"
    };
    return (
      <div style={styleProps}>
        <Checkbox
          checked={this.props.selected}
          onChange={this.props.onSelectAllSelectionChange}
        />
      </div>
    );
  }
}

export default HeaderCheckbox;
