/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect, Children } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import memoize from "lodash.memoize";
import { createButtonEventHandlers, createCustomClassNames } from "@weave-design/utils";

import Tab from "./Tab";
import stylesheet from "./presenters/Tabs.stylesheet";
import TabsPresenter from "./presenters/TabsPresenter";
import ContentPresenter from "./presenters/ContentPresenter";

import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_VARIANTS,
  AVAILABLE_ORIENTATIONS,
  alignments,
  variants,
  orientations,
} from "./constants";

const FIRST_TAB_INDEX = 0;
const DEFAULT_HOVERED_TAB_INDEX = -1;

/**
 * @typedef {Object} TabMeta
 * @property {string} key
 * @property {import("./tab").TabProps} props
 */

/**
 * @typedef {Object} TabsProps
 * @property {string} [align]
 * @property {string} [variant]
 * @property {string} [orientation]
 * @property {bool} [showTabDivider]
 * @property {number} [defaultActiveTabIndex]
 * @property {number} [activeTabIndex]
 * @property {function} [onTabChange]
 * @property {function} [onTabClose]
 * @property {ReactNode} [children]
 */

/**
 * @typedef {Object} TabsState
 * @property {number} activeTabIndex
 * @property {number} hoveredTabIndex
 * @property {string} effectiveAlign
 * @property {string} effectiveOrientation
 * @property {bool} effectiveShowTabDivider
 */

/**
 * @param {ReactNode} children
 * @returns {TabMeta[]}
 */
function createTabs(children) {
  return Children.toArray(children).reduce((result, child) => {
    const { type, key, props = {} } = child;

    if (type === Tab) {
      result.push({ key, props });
    }

    return result;
  }, []);
}

/**
 * @param {TabsProps} tabsProps
 * @returns {number}
 */
function findInitialStateActiveTab(tabsProps) {
  if (tabsProps.defaultActiveTabIndex !== undefined) {
    return tabsProps.defaultActiveTabIndex;
  }

  const tabIndexWithActiveProp = createTabs(tabsProps.children).findIndex(
    ({ props }) => props.active
  );
  if (tabIndexWithActiveProp >= 0) {
    return tabIndexWithActiveProp;
  }

  return FIRST_TAB_INDEX;
}

const Tabs = (props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(
    findInitialStateActiveTab(props)
  );
  const [hoveredTabIndex, setHoveredTabIndex] = useState(
    DEFAULT_HOVERED_TAB_INDEX
  );
  const [effectiveAlign, setEffectiveAlign] = useState(alignments.LEFT);
  const [effectiveShowTabDivider, setEffectiveShowTabDivider] = useState(true);
  const [effectiveOrientation, setEffectiveOrientation] = useState(
    orientations.HORIZONTAL
  );

  /**
   * @param {number} nextActiveTabIndex
   * @param {TabMeta} tab
   */
  const onTabSelection = (selectedTabIndex, { disabled }) => {
    props.onTabChange(selectedTabIndex);
    // eslint-disable-next-line no-use-before-define
    const prevActiveTabIndex = getActiveTabIndex();
    if (!disabled && prevActiveTabIndex !== selectedTabIndex) {
      setActiveTabIndex(selectedTabIndex);
    }
  };

  /**
   * If the activeTabIndex has been passed, use it. Otherwise, use our
   * internally managed activeTabIndex.
   * @returns {number}
   */
  const getActiveTabIndex = () =>
    props.activeTabIndex !== undefined ? props.activeTabIndex : activeTabIndex;

  /** @returns {TabMeta[]} */
  const getTabs = () => createTabs(props.children);

  /** @returns {TabMeta|undefined} */
  const getActiveTab = () => getTabs()[getActiveTabIndex()];

  /**
   * @param {number} nextHoveredTabIndex
   * @param {TabMeta} tab
   */
  const setHoveredTab = (nextHoveredTabIndex, { disabled }) => {
    const prevHoveredTabIndex = hoveredTabIndex;
    if (disabled || prevHoveredTabIndex === nextHoveredTabIndex) return;
    setHoveredTabIndex(nextHoveredTabIndex);
  };

  /**
   * @param {number} index
   */
  const removeHoveredTab = (index) => {
    if (hoveredTabIndex === index) {
      setHoveredTabIndex(DEFAULT_HOVERED_TAB_INDEX);
    }
  };

  const createTabEventHandlers = memoize((index, { disabled }) => ({
    ...createButtonEventHandlers(() => onTabSelection(index, { disabled })),
    onMouseEnter: () => setHoveredTab(index, { disabled }),
    onMouseLeave: () => removeHoveredTab(index),
    onClose: () => props.onTabClose(index),
  }));

  /**
   * @param {TabMeta} tab
   * @param {number} index
   * @returns {JSX.Element}
   */
  const renderTab = ({ key, props: propsParams }, index) => {
    const { disabled, className: tabClassName } = propsParams;
    const { variant, className: tabsClassName } = props;
    // eslint-disable-next-line no-shadow
    const activeTabIndex = getActiveTabIndex();

    let showTabDivider = effectiveShowTabDivider;
    if (index === activeTabIndex || index === activeTabIndex - 1) {
      showTabDivider = false;
    }
    if (index === hoveredTabIndex || index === hoveredTabIndex - 1) {
      showTabDivider = false;
    }

    const className = cx(
      tabClassName,
      createCustomClassNames(tabsClassName, "tab")
    );

    const payload = {
      ...propsParams,
      key,
      variant,
      className,
      showDivider: showTabDivider,
      align: effectiveAlign,
      orientation: effectiveOrientation,
      active: activeTabIndex === index,
      ...createTabEventHandlers(index, { disabled }),
    };

    return <Tab {...payload} />;
  };

  /**
   * @returns {JSX.Element}
   */
  const renderTabs = () => {
    // eslint-disable-next-line react/prop-types
    const { className, variant, stylesheet: customStylesheet } = props;
    return (
      <TabsPresenter
        variant={variant}
        align={effectiveAlign}
        orientation={effectiveOrientation}
        className={className}
        stylesheet={customStylesheet}
      >
        {getTabs().map(renderTab)}
      </TabsPresenter>
    );
  };

  /**
   * @returns {JSX.Element}
   */
  const renderContent = () => {
    // eslint-disable-next-line react/prop-types
    const { className, stylesheet: customStylesheet } = props;
    const activeTab = getActiveTab();

    return (
      <ContentPresenter className={className} stylesheet={customStylesheet}>
        {activeTab ? activeTab.props.children : null}
      </ContentPresenter>
    );
  };

  const styles = stylesheet({ orientation: effectiveOrientation });

  useEffect(() => {
    const { children, align, variant, orientation, showTabDivider } = props;
    const prevActiveTabIndex = activeTabIndex;
    const prevEffectiveAlign = effectiveAlign;
    const prevEffectiveOrientation = effectiveOrientation;
    const prevEffectiveShowTabDivider = effectiveShowTabDivider;

    let hasStateChanged = false;

    const nextTabs = createTabs(children);
    const nextActiveTabIndex = nextTabs.findIndex(
      // eslint-disable-next-line react/prop-types
      ({ props }) => props.active
    );
    if (
      nextActiveTabIndex >= 0 &&
      nextActiveTabIndex !== prevActiveTabIndex &&
      props.defaultActiveTabIndex === undefined
    ) {
      setActiveTabIndex(nextActiveTabIndex);
      // newState.activeTabIndex = nextActiveTabIndex;
      hasStateChanged = true;
    }

    // vertical tabs will only work when variant is "box"
    const nextEffectiveOrientation =
      variant === variants.BOX ? orientation : orientations.HORIZONTAL;
    if (nextEffectiveOrientation !== prevEffectiveOrientation) {
      setEffectiveOrientation(nextEffectiveOrientation);
      // newState.effectiveOrientation = nextEffectiveOrientation;
      hasStateChanged = true;
    }

    // align prop will not take effect when orientation is "vertical" or variant is "canvas"
    const nextEffectiveAlign =
      nextEffectiveOrientation === orientations.VERTICAL ||
      variant === variants.CANVAS
        ? alignments.LEFT
        : align;
    if (nextEffectiveAlign !== prevEffectiveAlign) {
      setEffectiveAlign(nextEffectiveAlign);
      // newState.effectiveAlign = nextEffectiveAlign;
      hasStateChanged = true;
    }

    // tab divider will not show when orientation is "vertical" or variant is "underline"
    const nextEffectiveShowTabDivider =
      nextEffectiveOrientation === orientations.VERTICAL ||
      variant === variants.UNDERLINE
        ? false
        : showTabDivider;
    if (nextEffectiveShowTabDivider !== prevEffectiveShowTabDivider) {
      setEffectiveShowTabDivider(nextEffectiveShowTabDivider);
      // newState.effectiveShowTabDivider = nextEffectiveShowTabDivider;
      hasStateChanged = true;
    }

    if (hasStateChanged) {
      // return newState;
    }
  }, [props]);

  return (
    <div className={cx(css(styles.wrapper), props.className)}>
      {renderTabs()}
      {renderContent()}
    </div>
  );
};

Tabs.displayName = "Tabs";

Tabs.propTypes = {
  /**
   * Control the active tab.
   * Overrides the deprecated active property on the Tab component.
   */
  activeTabIndex: PropTypes.number,
  /**
   * Specify how to justify the tabs within their container
   * When variant is set to "canvas", the effective alignment will always be "left"
   */
  // eslint-disable-next-line react/no-unused-prop-types
  align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
  /**
   * Accepts Tab components
   */
  children: PropTypes.node,
  /**
   * Sets the initial active tab.
   * Overrides the deprecated active property on the Tab component.
   */
  defaultActiveTabIndex: PropTypes.number,
  /**
   * Called when user activates a tab
   */
  onTabChange: PropTypes.func,
  /**
   * Called when user closes a tab
   */
  onTabClose: PropTypes.func,
  /**
   * The list orientation of the tabs
   * Vertical tabs only works when variant is set to "box"
   */
  // eslint-disable-next-line react/no-unused-prop-types
  orientation: PropTypes.oneOf(AVAILABLE_ORIENTATIONS),
  /**
   * Show dividers between tabs
   * Only works in horizontal tabs and when variant is set to "box" or "canvas"
   */
  // eslint-disable-next-line react/no-unused-prop-types
  showTabDivider: PropTypes.bool,
  /**
   * Function to modify the component's styles
   */
  // eslint-disable-next-line react/no-unused-prop-types
  stylesheet: PropTypes.func,
  /**
   * The visual variant of the tabs
   */
  // eslint-disable-next-line react/no-unused-prop-types
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

Tabs.defaultProps = {
  align: alignments.LEFT,
  onTabChange: () => {},
  onTabClose: () => {},
  variant: variants.UNDERLINE,
  orientation: orientations.HORIZONTAL,
  showTabDivider: true,
};

export default Tabs;
