/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { DraggableCore } from "react-draggable";
import { ThemeContext } from "@hig/themes";
import throttle from "lodash/throttle";
import noop from "lodash/noop";

const INVALID_VALUE = null;
const MIN_WIDTH = 16;
const THROTTLE_WAIT = 50;

/**
 * Default ColumnResizer
 */
class ColumnResizer extends React.PureComponent {
  /** @todo Don't store component state on class properties */
  lastX = INVALID_VALUE;
  width = 0;

  handleDrag = (e, data) => {
    if (this.lastX === INVALID_VALUE) {
      this.lastX = data.lastX;

      return true;
    }

    const movedX = data.x - this.lastX;

    if (!movedX) return true;

    this.lastX = data.x;
    this.width = this.width + movedX;

    const { column, onResize } = this.props;

    if (column.maxWidth && this.width >= column.maxWidth) return true;
    /** @todo Allow value of `0` as column.minWidth */
    if (this.width <= (column.minWidth || MIN_WIDTH)) return true;

    return onResize(column, this.width);
  };

  handleStart = () => {
    this.lastX = INVALID_VALUE;
    this.width = this.props.column.width;

    return this.props.onResizeStart(this.props.column);
  };

  handleStop = () => this.props.onResizeStop(this.props.column);

  handleClick = e => {
    e.stopPropagation();
  };

  render() {
    const { className, style, width, disabled } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <DraggableCore
            axis="x"
            disabled={disabled}
            onStart={this.handleStart}
            onDrag={throttle(this.handleDrag, THROTTLE_WAIT)}
            onStop={this.handleStop}
          >
            <div
              role="separator"
              aria-orientation="vertical"
              className={cx(
                "hig__table__column-resizer",
                themeClass,
                className
              )}
              onClick={this.handleClick}
              style={{
                ...style,
                borderRightWidth: width
              }}
            />
          </DraggableCore>
        )}
      </ThemeContext.Consumer>
    );
  }
}

ColumnResizer.defaultProps = {
  width: 3,
  onResizeStart: noop,
  onResize: noop,
  onResizeStop: noop
};

ColumnResizer.propTypes = {
  /**
   * Class name for the drag handler
   */
  className: PropTypes.string,
  /**
   * The column object to be dragged
   */
  column: PropTypes.object,
  /**
   * The width of the drag handler
   */
  width: PropTypes.number.isRequired,
  /**
   * Whether the resizing is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Custom style for the drag handler
   */
  style: PropTypes.object,
  /**
   * A callback function when resizing started
   * The callback is of the shape of `(column) => *`
   */
  onResizeStart: PropTypes.func,
  /**
   * A callback function when resizing the column
   * The callback is of the shape of `(column, width) => *`
   */
  onResize: PropTypes.func,
  /**
   * A callback function when resizing stopped
   * The callback is of the shape of `(column) => *`
   */
  onResizeStop: PropTypes.func
};

export default ColumnResizer;
