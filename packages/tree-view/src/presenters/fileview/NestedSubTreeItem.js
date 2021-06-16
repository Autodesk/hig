import React, { Component } from "react";

import PropTypes from "prop-types";
import { css, cx } from "emotion";

// import SubTreeViewObjectPresenter from "./SubTreeViewObjectPresenter";
import SubTreeViewCombined from "./SubTreeViewCombined";
import IconIndicatorPresenter from "../presenters/IconIndicatorPresenter";

import {
  CaretDownMUI,
  CaretDownSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI,
} from "@hig/icons";

import stylesheet from "../presenters/stylesheet";

export class SubTreeItem extends Component {
  componentDidUpdate({ keyboardOpenId: previousKeyboardOpenId }) {
    const {
      treeItem: { id },
      keyboardOpenId,
    } = this.props;

    if (keyboardOpenId === id && keyboardOpenId !== previousKeyboardOpenId) {
      this.props.treeItem.meta.collapsed = !this.props.treeItem.meta.collapsed;
      this.props.setIsCollapsed(this.props.treeItem.meta.collapsed);
      this.props.setKeyboardOpenId("");
    }
  }
  render() {
    const {
      treeItem,
      treeItem: {
        children,
        id,
        meta: { label, icon },
        payload: {
          indicator,
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          guidelines,
        },
      },
      themeData,
      onClick,
    } = this.props;

    const styleTreeItem = {
      children,
      id,
      label,
      indicator,
      themeData,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      guidelines,
      selected: getActiveTreeItemId() === id,
    };
    const styles = stylesheet(styleTreeItem, themeData);
    return (
      <li
        className={css(styles.higTreeItemSubTreeItem)}
        id={id}
        role="treeitem"
        onClick={(event) => onClick(event, treeItem)}
        key={id}
      >
        <div className={css(styles.higTreeItemContentWrapper)}>
          {icon}
          {label}
        </div>
      </li>
    );
  }
}

export class NestedSubTreeItem extends Component {
  componentDidUpdate({ keyboardOpenId: previousKeyboardOpenId }) {
    const {
      treeItem: { id },
      keyboardOpenId,
    } = this.props;

    if (keyboardOpenId === id && keyboardOpenId !== previousKeyboardOpenId) {
      this.props.treeItem.meta.collapsed = !this.props.treeItem.meta.collapsed;
      this.props.setIsCollapsed(this.props.treeItem.meta.collapsed);
      this.props.setKeyboardOpenId("");
    }
  }
  render() {
    const {
      treeItem,
      treeItem: {
        children,
        id,
        meta: { label, icon, collapsed },
        payload,
        payload: {
          indicator,
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          guidelines,
        },
      },
      density,
      themeData,
      onClick,
    } = this.props;

    const styleTreeItem = {
      children,
      id,
      label,
      indicator,
      themeData,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      guidelines,
      selected: getActiveTreeItemId() === id,
    };

    const styles = stylesheet(styleTreeItem, themeData);
    const OperatorMinusIcon =
      density === "medium-density" ? OperatorMinusSUI : OperatorMinusXsUI;
    const CaretDownIcon =
      density === "medium-density" ? CaretDownMUI : CaretDownSUI;
    const IconIndicator =
      indicator === "operator" ? OperatorMinusIcon : CaretDownIcon;
    return (
      <li
        aria-expanded={!collapsed}
        className={css(styles.higTreeItem)}
        id={id}
        role="treeitem"
        key={id}
      >
        <div className={css(styles.higTreeItemSubTreeViewLabelWrapper)}>
          <div
            className={css(styles.higTreeItemSubTreeViewLabelContentWrapper)}
            onClick={(event) => onClick(event, treeItem)}
          >
            <IconIndicatorPresenter
              collapsed={collapsed}
              density={density}
              indicator={indicator}
            />
            {icon}
            <span>{label}</span>
          </div>
        </div>
        <SubTreeViewCombined {...this.props} isObject={true} />
      </li>
    );
  }
}
