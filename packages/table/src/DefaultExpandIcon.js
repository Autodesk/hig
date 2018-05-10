import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

/**
 * Default expand icon for the Table
 */
class DefaultExpandIcon extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    const { expandable, expanded, indentSize, depth, onExpand } = this.props;
    if (!expandable && indentSize === 0) return null;

    const cls = cn("hig__table__expand-icon", {
      "hig__table__expand-icon--expanded": expanded
    });
    const a11yProps = {
      role: "button",
      tabIndex: 0
    };
    return (
      <div
        {...expandable && onExpand && a11yProps}
        className={cls}
        onClick={expandable && onExpand ? this._handleClick : null}
        style={{
          display: "inline-block",
          outline: "none",
          width: "16px",
          height: "16px",
          lineHeight: "16px",
          fontSize: "16px",
          textAlign: "center",
          marginLeft: depth * indentSize
        }}
      >
        {expandable && (expanded ? "-" : "+")}
      </div>
    );
  }

  _handleClick(e) {
    e.stopPropagation();
    const { onExpand, expanded } = this.props;
    onExpand(!expanded);
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
