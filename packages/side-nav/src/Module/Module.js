import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { AVAILABLE_TARGETS } from "../targets";
import ModulePresenter from "./presenters/ModulePresenter";

const Module = (props) => {
  const [minimized, setMinimized] = useState(props.minimized);
  const [callBackMinimized, setCallbackMinimized] = useState(null);

  /**
   * @param {Function} callback, function to call after minimize state has been toggled
   * @returns {Function}
   */
  const createMinimizeToggler = (callback) => () => {
    setMinimized(!minimized);
    setCallbackMinimized(callback);
  };

  /**
   * @returns {PresenterBag}
   */
  const createPresenterBag = () => ({
    minimized,
    onClickCollapseButton: createMinimizeToggler(props.onClickCollapseButton),
    onClickTitle: createMinimizeToggler(props.onClickTitle),
  });

  /**
   * @param {PresenterBag}
   */
  const renderPresenter = (presenterBag) => {
    const presenterProps = { ...props, ...presenterBag };
    const { children, ...otherProps } = presenterProps;

    return <ModulePresenter {...otherProps}>{children}</ModulePresenter>;
  };

  const presenterBag = createPresenterBag();

  useEffect(() => {
    if (callBackMinimized) {
      callBackMinimized();
    }
  }, [callBackMinimized]);

  useEffect(() => {}, [props.children, props.link]);

  return renderPresenter(presenterBag);
};

Module.displayName = "Module";

Module.propTypes = {
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
  /** Called when link is focused  */
  onFocus: PropTypes.func,
  /** Called when hovering over the title */
  onMouseOver: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
  /** A label for rendering this Module */
  title: PropTypes.string.isRequired,
  /** Anchor target. Applicable only if link is provided */
  target: PropTypes.oneOf(AVAILABLE_TARGETS),
};

Module.defaultProps = {
  minimized: false,
};

export default Module;
