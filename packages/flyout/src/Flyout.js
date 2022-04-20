import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { combineEventHandlers } from "@hig/utils";

import { AVAILABLE_ANCHOR_POINTS } from "./anchorPoints";
import ContainerTransition from "./behaviors/ContainerTransition";
import FlyoutPresenter from "./presenters/FlyoutPresenter";
import getCoordinates, { DEFAULT_COORDINATES } from "./getCoordinates";
import DelayedHoverBehavior from "./behaviors/DelayedHoverBehavior";
import PanelContainerPresenter from "./presenters/PanelContainerPresenter";
import PanelPresenter from "./presenters/PanelPresenter";

/** @typedef {import("./getCoordinates").Coordinates} Coordinates */

/**
 * @typedef {Object} PanelRendererPayload
 * @property {function(HTMLElement): void} innerRef
 * @property {function(): void} hideFlyout
 * @property {JSX} [content]
 * @property {function(UIEvent): void} [handleScroll]
 * @property {number} [maxHeight]
 */

/**
 * @typedef {Object} State
 * @property {HTMLElement} [actionRef]
 * @property {boolean} open Used to direct the flyout's transition behavior
 * @property {HTMLElement} [panelRef]
 * @property {SVGSVGElement} [pointerRef]
 * @property {HTMLDivElement} [wrapperRef]
 */

const Flyout = props => {
  const [open, setOpen] = useState(props.defaultOpen);
  const [actionRef, setActionRef] = useState(undefined);
  const [panelRef, setPanelRef] = useState(undefined);
  const [pointerRef, setPointerRef] = useState(undefined);
  const [wrapperRef, setWrapperRef] = useState(undefined);

  /**
   * @returns {Coordinates}
   */
  const getCoordinatesMethod = () => {
    const { alterCoordinates, anchorPoint, fallbackAnchorPoints } = props;

    if (
      !actionRef ||
      !panelRef ||
      !pointerRef ||
      typeof window === "undefined"
    ) {
      return DEFAULT_COORDINATES;
    }

    const actionRect = actionRef.getBoundingClientRect();
    const panelRect = panelRef.getBoundingClientRect();
    const pointerRect = pointerRef.getBoundingClientRect();
    const viewportRect = window.document.documentElement.getBoundingClientRect();
    const coordinates = getCoordinates({
      anchorPoint,
      actionRect,
      fallbackAnchorPoints,
      panelRect,
      pointerRect,
      viewportRect
    });

    if (alterCoordinates) {
      const rects = {
        actionRect,
        panelRect,
        pointerRect,
        viewportRect
      };
      return alterCoordinates(coordinates, rects);
    }

    return coordinates;
  };

  /**
   * @param {boolean} open
   */
  const setOpenMethod = openRef => {
    const { onClose, onOpen } = props;
    if (openRef && onOpen) {
      onOpen();
    } else if (!openRef && onClose) {
      onClose();
    }
    setOpen(openRef);
  };

  const isOpenControlled = () => props.open !== undefined;

  const isOpen = () => (isOpenControlled() ? props.open : open);

  const handleChildMouseEnter = () => {
    if (props.openOnHover) {
      setOpenMethod(true);
    }
  };

  const handleChildMouseLeave = () => {
    if (props.openOnHover) {
      setOpenMethod(false);
    }
  };

  /**
   * @param {HTMLElement} actionRef
   */
  const refAction = actionRefParam => {
    setActionRef(actionRefParam);
  };

  /**
   * @param {SVGSVGElement} pointerRef
   */
  const refPointer = pointerRefParam => {
    setPointerRef(pointerRefParam);
  };

  /**
   * @param {HTMLElement} panelRef
   */
  const refPanel = panelRefParam => {
    setPanelRef(panelRefParam);
  };

  /**
   * @param {HTMLDivElement} wrapperRef
   */
  const refWrapper = wrapperRefParam => {
    setWrapperRef(wrapperRefParam);
  };

  const hideFlyout = () => {
    setOpenMethod(false);
  };

  const toggleOpen = () => {
    setOpenMethod(!open);
  };

  const renderContent = () => {
    const { content } = props;

    if (typeof content === "function") {
      return content({ hideFlyout });
    }

    return content;
  };

  /**
   * @param {MouseEvent} event
   */
  const handleBodyClick = event => {
    const { onClickOutside } = props;
    const flyoutClicked =
      event.target === wrapperRef || wrapperRef.contains(event.target);

    if (flyoutClicked || !isOpen()) return;
    if (onClickOutside) onClickOutside(event);
    if (!isOpenControlled()) toggleOpen();
  };

  const handleChildClick = () => {
    if (!isOpenControlled()) {
      toggleOpen();
    }
  };

  /**
   * @returns {PanelRendererPayload}
   */
  const createPanelPayload = () => {
    const { maxHeight, onScroll, stylesheet, ...otherProps } = props;
    const { className } = otherProps;

    return {
      hideFlyout,
      maxHeight,
      content: renderContent(),
      handleScroll: onScroll,
      innerRef: refPanel,
      className,
      stylesheet
    };
  };

  const renderPanel = ({ transitionStatus }) => {
    const { panel } = props;

    if (typeof panel === "function") {
      return panel({
        ...createPanelPayload(),
        transitionStatus
      });
    }

    return panel;
  };

  const renderChildren = (onMouseEnter, onMouseLeave) => {
    const { children } = props;
    if (typeof children === "function") {
      return children({ handleClick: handleChildClick });
    }

    if (React.Children.count(children) === 1) {
      return React.cloneElement(children, {
        onClick: combineEventHandlers(handleChildClick, children.props.onClick),
        onMouseEnter,
        onMouseLeave
      });
    }

    return children;
  };

  const renderPresenter = transitionStatus => {
    const { openOnHoverDelay, pointer, stylesheet, ...otherProps } = props;
    const { className } = otherProps;
    const panel = renderPanel({ transitionStatus });
    const {
      anchorPoint,
      containerPosition,
      pointerPosition
    } = getCoordinatesMethod();
    return (
      <DelayedHoverBehavior
        onMouseEnter={handleChildMouseEnter}
        onMouseLeave={handleChildMouseLeave}
        openOnHoverDelay={openOnHoverDelay}
      >
        {({ onMouseEnter, onMouseLeave }) => (
          <FlyoutPresenter
            anchorPoint={anchorPoint}
            className={className}
            stylesheet={stylesheet}
            containerPosition={containerPosition}
            panel={panel}
            pointer={pointer}
            pointerPosition={pointerPosition}
            refAction={refAction}
            refPointer={refPointer}
            refWrapper={refWrapper}
            transitionStatus={transitionStatus}
          >
            {renderChildren(onMouseEnter, onMouseLeave)}
          </FlyoutPresenter>
        )}
      </DelayedHoverBehavior>
    );
  };

  useEffect(() => {
    window.document.body.addEventListener("click", handleBodyClick);
    return () => {
      window.document.body.removeEventListener("click", handleBodyClick);
    };
  });

  return (
    <ContainerTransition open={isOpen()}>{renderPresenter}</ContainerTransition>
  );
};

Flyout.displayName = "Flyout";

Flyout.propTypes = {
  /** Manipulate flyout coordinates before rendering */
  alterCoordinates: PropTypes.func,
  /** Where the flyout will be anchored relative to target */
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
  /** Target component to open the flyout. Can be either a node or a render function */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Content for the flyout. Can be either a node or a render function */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Default uncontrolled open state */
  defaultOpen: PropTypes.bool,
  /**
   * When the flyout overflows the viewport, it'll attempt to
   * use the given anchor points in order to keep the flyout
   * within the viewport.
   */
  fallbackAnchorPoints: PropTypes.arrayOf(
    PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
  ),
  /** Renders a custom flyout panel. Can be either a node or a render function */
  panel: PropTypes.func,
  /** A custom pointer */
  pointer: PropTypes.node,
  /** Max height of the flyout content, in pixels */
  maxHeight: PropTypes.number,
  /** Function called when the flyout is open, and a click event occurs outside the flyout */
  onClickOutside: PropTypes.func,
  /** Function called when the flyout closes */
  onClose: PropTypes.func,
  /** Function called when the flyout opens */
  onOpen: PropTypes.func,
  /** Function called when the flyout panel is scrolled */
  onScroll: PropTypes.func,
  /** When provided, it overrides the flyout's open state */
  open: PropTypes.bool,
  /** Whether flyout should open when the target is hovered over */
  openOnHover: PropTypes.bool,
  /**
   * If openOnHover is true, this prop will determine the delay
   * from when mouseEnter begins until the flyout visually opens
   */
  openOnHoverDelay: PropTypes.number,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};

Flyout.defaultProps = {
  anchorPoint: DEFAULT_COORDINATES.anchorPoint,
  defaultOpen: false,
  fallbackAnchorPoints: AVAILABLE_ANCHOR_POINTS,
  openOnHover: false,
  openOnHoverDelay: 500,
  /**
   * @param {PanelRendererPayload} payload
   */
  // eslint-disable-next-line react/prop-types
  panel({ innerRef, content, handleScroll, maxHeight, className, stylesheet }) {
    return (
      <PanelContainerPresenter
        innerRef={innerRef}
        maxHeight={maxHeight}
        className={className}
        stylesheet={stylesheet}
      >
        <PanelPresenter
          onScroll={handleScroll}
          className={className}
          stylesheet={stylesheet}
        >
          {content}
        </PanelPresenter>
      </PanelContainerPresenter>
    );
  }
};

export default Flyout;
