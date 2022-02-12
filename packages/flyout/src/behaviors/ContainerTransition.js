import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";

import { transitionStatuses } from "../transitionStatuses";

const TRANSITION_DURATION = 300;

const ContainerTransition = props => {
  const { open } = props;
  const [inside, setInside] = useState(open);
  const [isVisible, setIsVisible] = useState(open);

  /**
   * @param {string} transitionState
   * @returns {string}
   */
  const getTransitionStatus = transitionState =>
    !isVisible ? transitionStatuses.HIDDEN : transitionState;

  const beginExit = () => {
    window.requestAnimationFrame(() => {
      setInside(false);
    });
  };

  const show = () => {
    window.requestAnimationFrame(() => {
      setIsVisible(true);
    });
  };

  const hide = () => {
    window.requestAnimationFrame(() => {
      setIsVisible(false);
    });
  };

  const handleExit = () => hide();

  useEffect(() => {
    if (open) {
      show();
    } else if (!open) {
      beginExit();
    }
  }, [open]);

  useEffect(() => {
    if (isVisible) window.requestAnimationFrame(() => setInside(true));
    }, [isVisible]
  );

  return (
    <Transition in={inside} onExited={handleExit} timeout={TRANSITION_DURATION}>
      {transitionState => props.children(getTransitionStatus(transitionState))}
    </Transition>
  );
};

ContainerTransition.displayName = "ContainerTransition";

ContainerTransition.propTypes = {
  children: PropTypes.func.isRequired,
  open: PropTypes.bool
};

ContainerTransition.defaultProps = {
  open: false
};

export default ContainerTransition;
