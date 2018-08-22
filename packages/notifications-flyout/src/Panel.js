import React from "react";
import PropTypes from "prop-types";

import PanelBehavior from "./behaviors/PanelBehavior";
import PanelPresenter from "./presenters/PanelPresenter";

export default function Panel(props) {
  const { children, heading, innerRef, loading, onScroll } = props;

  return (
    <PanelBehavior loading={loading}>
      {({ listMaxHeight, loadingTransitionState, refListWrapper }) => (
        <PanelPresenter
          heading={heading}
          innerRef={innerRef}
          listMaxHeight={listMaxHeight}
          loadingTransitionState={loadingTransitionState}
          onScroll={onScroll}
          refListWrapper={refListWrapper}
        >
          {children}
        </PanelPresenter>
      )}
    </PanelBehavior>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  innerRef: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  onScroll: PropTypes.func
};
