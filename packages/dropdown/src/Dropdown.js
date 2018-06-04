import React, { Component } from "react";
import Downshift from "downshift";
import { Option } from "hig-react";

import "./dropdown.scss";

export default class Dropdown extends Component {
  render() {
    return (
      <Downshift>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => <div className="hig__dropdown" />}
      </Downshift>
    );
  }
}
