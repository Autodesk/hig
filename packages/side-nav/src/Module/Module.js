import React, { Component } from "react";
import PropTypes from "prop-types";
import ModulePresenter from "./presenters/ModulePresenter";

export default class Module extends Component {
  static propTypes = {
    /** Indicates this module is currently active */
    active: PropTypes.bool,
    /** Indicates a nested submodule is currently active */
    activeChildren: PropTypes.bool,
    /** Zero or more SideNav submodules */
    children: PropTypes.node,
    /** An instance of @hig/icon */
    icon: PropTypes.node,
    /** URL to navigate to when clicking this module */
    link: PropTypes.string,
    /** Indicates whether to display nested submodules */
    minimized: PropTypes.bool,
    /** Called when clicking on the collapse button */
    onClickCollapseButton: PropTypes.func,
    /** Called when clicking on the title */
    onClickTitle: PropTypes.func,
    /** Called when hovering over the title */
    onMouseOver: PropTypes.func,
    /** A label for rendering this Module */
    title: PropTypes.string.isRequired,
    /** Anchor target. Applicable only if link is provided */
    target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"])
  };

  static defaultProps = {
    minimized: false
  };

  constructor(props) {
    super(props);

    this.state = {
      minimized: props.minimized
    };
  }

  handleModuleMinimizeToggle = e =>
    this.setState(
      { minimized: !this.state.minimized },
      () =>
        this.props.onClickCollapseButton && this.props.onClickCollapseButton(e)
    );

  /**
   * @returns {PresenterBag}
   */
  createPresenterBag() {
    const { minimized } = this.state;

    return {
      minimized,
      onClickCollapseButton: this.handleModuleMinimizeToggle
    };
  }

  /**
   * @param {PresenterBag}
   */
  renderPresenter = presenterBag => {
    const presenterProps = { ...this.props, ...presenterBag };
    const { children, ...otherProps } = presenterProps;

    return <ModulePresenter {...otherProps}>{children}</ModulePresenter>;
  };

  render() {
    const presenterBag = this.createPresenterBag();
    const { renderPresenter } = this;

    return renderPresenter(presenterBag);
  }
}
