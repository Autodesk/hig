import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

/**
 * Default expand icon for the Table
 */
class DefaultExpandIcon extends React.PureComponent {
  /**
   * @param {string} themeClass
   */
  getWrapperProps(themeClass) {
    const { expandable, expanded, indentSize, depth, onExpand } = this.props;
    const isInteractive = expandable && onExpand;
    const role = isInteractive ? "button" : "presentation";
    const tabIndex = isInteractive ? 0 : undefined;
    const onClick = isInteractive ? this.handleClick : null;
    const style = { marginLeft: depth * indentSize };
    const className = cx(
      "hig__table__expand-icon",
      { "hig__table__expand-icon--expanded": expanded },
      themeClass
    );

    return { className, role, tabIndex, onClick, style };
  }

  /**
   * @param {MouseEvent} event
   */
  handleClick = event => {
    const { onExpand, expanded } = this.props;

    event.stopPropagation();

    if (onExpand) onExpand(!expanded);
  };

  /**
   * @returns {boolean}
   * @todo Why is `indentSize` checked here?
   */
  isVisible() {
    const { expandable, indentSize } = this.props;

    return !expandable && indentSize === 0;
  }

  /**
   * @returns {string|null}
   */
  renderIcon() {
    const { expandable, expanded } = this.props;
    const expandableIcon = expanded ? "-" : "+";

    return expandable ? expandableIcon : null;
  }

  render() {
    if (!this.isVisible()) return null;

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div {...this.getWrapperProps(themeClass)}>{this.renderIcon()}</div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

DefaultExpandIcon.defaultProps = {
  depth: 0,
  indentSize: 16
};

DefaultExpandIcon.propTypes = {
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  indentSize: PropTypes.number,
  depth: PropTypes.number,
  onExpand: PropTypes.func
};

export default DefaultExpandIcon;
