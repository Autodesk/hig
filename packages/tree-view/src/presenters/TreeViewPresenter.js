import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import TreeItem from "../TreeItem";
import createChildren from "../behaviors/createChildren";
import stylesheet from "./stylesheet";

export default class TreeViewPresenter extends Component {
  static propTypes = {
    children: PropTypes.node,
    divider: PropTypes.bool,
    stylesheet: PropTypes.func
  };

  getOptions() {
    return createChildren(this.props.children, TreeItem);
  }

  renderOption = ({ key, props }) => {
    const {
      onFocus,
    } = this.props;
    const payload = {
      ...props,
    };

    return <TreeItem {...payload} />;
  };

  renderOptions() {
    return this.getOptions().map(this.renderOption);
  }

  render() {
    const {
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              stylesheet: customStylesheet
            },
            resolvedRoles
          );
          return (
            <ul>
              {this.renderOptions()}
            </ul>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
