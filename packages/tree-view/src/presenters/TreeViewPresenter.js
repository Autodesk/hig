import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";
import TreeItem from "../TreeItem";

function createTreeItems(children) {
  return Children.toArray(children).reduce((result, child) => {
    const { type, key, props = {} } = child;

    if (type === TreeItem) {
      result.push({ key, props });
    }

    return result;
  }, []);
}


export default class TreeViewPresenter extends Component {
  static propTypes = {
    alternateBg: PropTypes.bool,
    children: PropTypes.node,
    getActiveTreeItemIndex: PropTypes.func,
    guidelines: PropTypes.bool,
    indicator: PropTypes.string,
    selected: PropTypes.bool,
    setTreeViewRef: PropTypes.func,
    stylesheet: PropTypes.func
  };

  componentDidMount() {
    console.log('component did mount');
  }

  getTreeItems() {
    return createTreeItems(this.props.children);
  }

  renderTreeItem = ({ key, props }) => {
    const {
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      indicator
    } = this.props;
    const payload = {
      ...props,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      indicator,
      key
    };

    return <TreeItem {...payload} />;
  };

  renderTreeItems() {
    return this.getTreeItems().map(this.renderTreeItem);
  }

  render() {
    const {
      alternateBg,
      children,
      guidelines,
      setTreeViewRef,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              alternateBg,
              guidelines,
              stylesheet: customStylesheet
            },
            resolvedRoles
          );
          return (
            <div className={css(styles.higTreeViewWrapper)}>
              <ul
                className={css(styles.higTreeView)}
                ref={setTreeViewRef}
                role="tree"
                tabIndex="0"
              >
                {this.renderTreeItems()}
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
