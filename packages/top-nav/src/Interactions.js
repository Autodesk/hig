import React from "react";
import PropTypes from "prop-types";

import InteractionsPresenter from "./presenters/InteractionsPresenter";

const Interactions = props => {
  /**
   * @todo Complete render prop implementation with alignment helpers
   */
  const renderChildren = () => {
    const { children } = props;

    if (typeof children === "function") {
      return children();
    }

    return children;
  };

  const { stylesheet, ...otherProps } = props;

  return (
    <InteractionsPresenter stylesheet={stylesheet} {...otherProps}>
      {renderChildren()}
    </InteractionsPresenter>
  );
};

Interactions.displayName = "Interactions";

Interactions.propTypes = {
  /** Actions to be rendered */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};

export default Interactions;
