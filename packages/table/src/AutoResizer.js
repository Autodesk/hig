import React, { Component } from "react";
import PropTypes from "prop-types";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import { polyfill } from "react-lifecycles-compat";

/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
class AutoResizer extends Component {
  static propTypes = {
    /**
     * Class name for the component
     */
    className: PropTypes.string,
    /**
     * the width of the component, will be the container's width if not set
     */
    width: PropTypes.number,
    /**
     * the height of the component, will be the container's width if not set
     */
    height: PropTypes.number,
    /**
     * A callback function to render the children component
     * The handler is of the shape of `({ width, height }) => *`
     */
    children: PropTypes.func.isRequired,
    /**
     * A callback function when the size of the table container changed if the width and height are not set
     * The handler is of the shape of `({ width, height }) => *`
     */
    onResize: PropTypes.func
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { width: nextWidth, height: nextHeight } = nextProps;
    const { width: prevWidth, height: prevHeight } = prevState;
    const hasChanged = nextWidth !== prevWidth || nextHeight !== prevHeight;

    if (!hasChanged) return null;

    const disableWidth = nextWidth != null;
    const disableHeight = nextHeight != null;

    return {
      disableWidth,
      disableHeight,
      width: nextWidth,
      height: nextHeight
    };
  }

  state = {
    prevWidth: -1,
    prevHeight: -1,
    disableWidth: false,
    disableHeight: false
  };

  componentDidUpdate() {
    const { onResize } = this.props;
    const { width, height } = this.state;

    if (onResize) onResize({ width, height });
  }

  render() {
    const { className, children, onResize } = this.props;
    const { disableWidth, disableHeight, width, height } = this.state;

    if (disableWidth && disableHeight) {
      return children({ width, height });
    }

    return (
      <AutoSizer
        className={className}
        disableWidth={disableWidth}
        disableHeight={disableHeight}
        onResize={onResize}
      >
        {size =>
          children({
            width: disableWidth ? width : size.width,
            height: disableHeight ? height : size.height
          })
        }
      </AutoSizer>
    );
  }
}

export default polyfill(AutoResizer);
