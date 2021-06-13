import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import TreeItem from "../TreeItem";

import stylesheet from "./stylesheet";

export default class SubTreeViewPresenter extends Component {
  constructor(props) {
    super(props);

    /* this.state = {
      isCollapsed: true,
    }; */
    this.subTreeWrapper;

    this.setSubTreeWrapperRef = element => {
      this.subTreeWrapper = element;
    };
  }

  componentDidMount() {
    console.log('subtree did mount');
  }

  componentDidUpdate() {
  }

  render() {
    const {
      children,
      collapsed,
      density,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getIsCollapsed,
      getTreeItemArray,
      guidelines,
      indicator,
      onClick,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setIsCollapsed,
      themeData
    } = this.props;
    const styles = stylesheet(this.props, themeData);
    const clonedChildren = Array.isArray(children)
      ? children.map(child => React.cloneElement(
        child,
        {

          getActiveTreeItemId,
          getActiveTreeItemIndex,
          getTreeItemArray,
          guidelines,
          indicator,
          // onClick,
          // selected: getActiveTreeItemId() === child.props.id,
          setActiveTreeItemId,
          setActiveTreeItemIndex
        }
      ))
      : React.cloneElement(
          children,
          {
            getActiveTreeItemId,
            getActiveTreeItemIndex,
            getTreeItemArray,
            guidelines,
            indicator,
            // onClick,
            setActiveTreeItemId,
            setActiveTreeItemIndex
          }
        );
console.log(this.subTreeWrapper && this.subTreeWrapper.scrollHeight);
    return (
      <div className={css(styles.higTreeItemSubTreeViewWrapper)} ref={this.setSubTreeWrapperRef}>
        {!collapsed && Array.isArray(clonedChildren) &&
          <ul className={css(styles.higTreeItemSubTreeView)} role="group">
            {clonedChildren.map((child, index) => <TreeItem {...child.props} themeData={themeData} density={density} key={index} />)}
          </ul>
          } 
        {!collapsed && !Array.isArray(clonedChildren ) && 
          <ul className={css(styles.higTreeItemSubTreeView)} role="group">
            {clonedChildren}
          </ul>
        }
      </div>
    );
  }
}
