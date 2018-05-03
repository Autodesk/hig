import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon, { names as iconNames } from "@hig/icon";

import "./search.scss";

export default class Search extends Component {
  static propTypes = {
    clearIconVisible: PropTypes.bool,
    onBlur: PropTypes.func,
    onClearIconClick: PropTypes.func,
    onFocus: PropTypes.func,
    onInput: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
  };

  render() {
    const { placeholder, value } = this.props;
    return (
      <div className="hig__side-nav__search">
        <div className="hig__global-nav__side-nav__search__icon">
          <Icon name={iconNames.SEARCH} />
        </div>
        <div className="hig__side-nav__search__inputholder">
          <input
            className="hig__side-nav__search__input"
            type="text"
            placeholder={placeholder}
            value={value}
          />
        </div>
        <div className="hig__side-nav__search__clear">
          <Icon name={iconNames.CLEAR_SMALL} />
        </div>
      </div>
    );
  }
}
