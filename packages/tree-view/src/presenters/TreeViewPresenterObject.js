import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

// import "../FileView/index.scss";

import TreeObjectView from "../FileView/TreeObjectView";
import TreeObjectItem from "../FileView/TreeObjectItem";

import stylesheet from "./stylesheet";

export default class TreeViewPresenterObject extends Component {
  static propTypes = {
    alternateBg: PropTypes.bool,
    children: PropTypes.node,
    guidelines: PropTypes.bool,
    indicator: PropTypes.string,
    stylesheet: PropTypes.func,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.dataObject[0].id === this.props.dataObject[0].id)
      return false;
    return true;
  }

  getTreeObject(collection) {
    let fileTree = {};
    const mapTreeObject = collection.reduce((acc, el, i) => {
      acc[el.id] = i;
      return acc;
    }, {});

    collection.forEach(function(el) {
      if (el.parentId === null) {
        fileTree = el;
        return;
      }
      const parentEl = collection[mapTreeObject[el.parentId]];
      parentEl.children = [...(parentEl.children || []), el];
    });

    return fileTree;
  }

  renderFileTree(tree) {
    const { id, children } = tree;
    return (
      <div key={id}>
        <TreeObjectView tree={tree} />
        {children ? (
          <TreeObjectItem renderFileTree={this.renderFileTree}>
            {children}
          </TreeObjectItem>
        ) : null}
      </div>
    );
  }

  render() {
    const {
      alternateBg,
      children,
      guidelines,
      stylesheet: customStylesheet,
      dataObject,
      ...otherProps
    } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              alternateBg,
              guidelines,
              stylesheet: customStylesheet,
            },
            resolvedRoles
          );
          return (
            <div className={css(styles.higTreeViewWrapper)}>
              <div role="group" className={css(styles.higTreeView)}>
                {this.renderFileTree(this.getTreeObject(dataObject))}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
