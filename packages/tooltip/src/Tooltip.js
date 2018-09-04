import React from "react";
import PropTypes from "prop-types";
import ReactToolTip from "rc-tooltip";
import { polyfill } from "react-lifecycles-compat";
import { anchorPoints } from "@hig/flyout";
import { css } from "react-emotion";
import "./tooltip.scss";

const placements = {
  [anchorPoints.TOP_CENTER]: "top",
  [anchorPoints.TOP_LEFT]: "topLeft",
  [anchorPoints.TOP_RIGHT]: "topRight",
  [anchorPoints.BOTTOM_CENTER]: "bottom",
  [anchorPoints.BOTTOM_LEFT]: "bottomLeft",
  [anchorPoints.BOTTOM_RIGHT]: "bottomRight",
  [anchorPoints.LEFT_CENTER]: "left",
  [anchorPoints.LEFT_TOP]: "leftTop",
  [anchorPoints.LEFT_BOTTOM]: "leftBottom",
  [anchorPoints.RIGHT_CENTER]: "right",
  [anchorPoints.RIGHT_TOP]: "rightTop",
  [anchorPoints.RIGHT_BOTTOM]: "rightBottom"
};

class Tooltip extends React.Component {
  static propTypes = {
    anchorPoint: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    description: PropTypes.string,
    id: PropTypes.string,
    isVisible: PropTypes.bool,
    linkTitle: PropTypes.string,
    linkURL: PropTypes.string,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    title: PropTypes.string,
    trigger: PropTypes.string,
    width: PropTypes.number
  };

  static defaultProps = {
    anchorPoint: placements[anchorPoints.BOTTOM_CENTER],
    mouseEnterDelay: 0.5,
    mouseLeaveDelay: 0.1,
    trigger: "hover",
    width: 300
  };

  renderTitle = () => (
    <div className="hig__tooltip-title">{this.props.title}</div>
  );

  renderDescription = () => (
    <div className="hig__tooltip-description">{this.props.description}</div>
  );

  renderContent = () => (
    <div className="hig__tooltip-inner-content">{this.props.content}</div>
  );

  renderURL = () => (
    <div className="hig__tooltip-link">
      {!this.props.content && <div className="line" />}
      <a href={this.props.linkURL}>
        {this.props.linkTitle || this.props.linkURL}
      </a>
    </div>
  );

  renderContainer = () => (
    <div className="hig__tooltip-container">
      {this.props.title ? this.renderTitle() : null}
      {this.props.description ? this.renderDescription() : null}
      {this.props.content ? this.renderContent() : null}
      {this.props.linkURL ? this.renderURL() : null}
    </div>
  );

  renderChildren = () => (
    <div className="hig__tooltip-children-wrapper">{this.props.children}</div>
  );

  render() {
    const { anchorPoint, trigger, isVisible, ...otherProps } = this.props;

    const tooltipWidth = css`
      max-width: ${this.props.width}px;
    `;

    return (
      <ReactToolTip
        destroyTooltipOnHide
        isVisible={isVisible}
        overlay={this.renderContainer}
        overlayClassName={tooltipWidth}
        placement={placements[anchorPoint]}
        prefixCls="hig__tooltip"
        trigger={trigger}
        {...otherProps}
      >
        {this.renderChildren()}
      </ReactToolTip>
    );
  }
}

export default polyfill(Tooltip);
