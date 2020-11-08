import React from "react";
import PropTypes from "prop-types";

import PanelBehavior from "./behaviors/PanelBehavior";
import PanelPresenter from "./presenters/PanelPresenter";

export default function Panel(props) {
  const {
    children,
    heading,
    innerRef,
    loading,
    onScroll,
    transitionStatus,
    stylesheet
  } = props;

  return (
    <PanelBehavior loading={loading} transitionStatus={transitionStatus}>
      {({ listMaxHeight, loadingTransitionState, refListWrapper }) => (
        <PanelPresenter
          heading={heading}
          innerRef={innerRef}
          listMaxHeight={listMaxHeight}
          loadingTransitionState={loadingTransitionState}
          onScroll={onScroll}
          refListWrapper={refListWrapper}
          stylesheet={stylesheet}
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
  onScroll: PropTypes.func,
  stylesheet: PropTypes.func,
  transitionStatus: PropTypes.string
};
