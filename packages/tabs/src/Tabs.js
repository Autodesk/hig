import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { polyfill } from "react-lifecycles-compat";
import memoize from "lodash.memoize";
import { createButtonEventHandlers, createCustomClassNames } from "@hig/utils";

import Tab from "./Tab";
import stylesheet from "./Tabs.stylesheet";
import TabsPresenter from "./presenters/TabsPresenter";
import ContentPresenter from "./presenters/ContentPresenter";

import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_VARIANTS,
  AVAILABLE_ORIENTATIONS,
  alignments,
  variants,
  orientations
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

class Tabs extends Component {
  static propTypes = {
    /**
     * The visual variant of the tabs
     */
    variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
    /**
     * Specify how to justify the tabs within their container
     * When variant is set to "canvas", the effective alignment will always be "left"
     */
    align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
    /**
     * The list orientation of the tabs
     * Vertical tabs only works when variant is set to "box"
     */
    orientation: PropTypes.oneOf(AVAILABLE_ORIENTATIONS),
    /**
     * Show dividers between tabs
     * Only works in horizontal tabs and when variant is set to "box" or "canvas"
     */
    showTabDivider: PropTypes.bool,
    /**
     * Accepts Tab components
     */
    children: PropTypes.node,
    /**
     * Sets the initial active tab. Overrides the deprecated active property on
     * the Tab component.
     */
    defaultActiveTabIndex: PropTypes.number,
    /**
     * Control the active tab. Overrides the deprecated active property on
     * the Tab component.
     */
    activeTabIndex: PropTypes.number,
    /**
     * Called when user activates a tab
     */
    onTabChange: PropTypes.func,
    /**
     * Called when user closes a tab
     */
    onTabClose: PropTypes.func
  };

  static defaultProps = {
    align: alignments.LEFT,
    onTabChange: () => {},
    onTabClose: () => {},
    variant: variants.UNDERLINE,
    orientation: orientations.HORIZONTAL,
    showTabDivider: true
  };

  /** @type {TabsState} */
  state = {
    /**
     * We maintain the active tab index in the state in case it was not
     * provided as a prop.
     */
    activeTabIndex:
      this.props.defaultActiveTabIndex === undefined
        ? FIRST_TAB_INDEX
        : this.props.defaultActiveTabIndex,
    hoveredTabIndex: DEFAULT_HOVERED_TAB_INDEX,
    effectiveAlign: alignments.LEFT,
    effectiveShowTabDivider: true,
    effectiveOrientation: orientations.HORIZONTAL
  };

  /**
   * @param {TabsProps} nextProps
   * @param {TabsState} prevState
   * @returns {TabsState | null}
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    const { children, align, variant, orientation, showTabDivider } = nextProps;
    const {
      effectiveAlign: prevEffectiveAlign,
      effectiveOrientation: prevEffectiveOrientation,
      effectiveShowTabDivider: prevEffectiveShowTabDivider
    } = prevState;

    let hasStateChanged = false;
    const newState = {};

    // vertical tabs will only work when variant is "box"
    const nextEffectiveOrientation =
      variant === variants.BOX ? orientation : orientations.HORIZONTAL;
    if (nextEffectiveOrientation !== prevEffectiveOrientation) {
      newState.effectiveOrientation = nextEffectiveOrientation;
      hasStateChanged = true;
    }

    // align prop will not take effect when orientation is "vertical" or variant is "canvas"
    const nextEffectiveAlign =
      nextEffectiveOrientation === orientations.VERTICAL ||
      variant === variants.CANVAS
        ? alignments.LEFT
        : align;
    if (nextEffectiveAlign !== prevEffectiveAlign) {
      newState.effectiveAlign = nextEffectiveAlign;
      hasStateChanged = true;
    }

    // tab divider will not show when orientation is "vertical" or variant is "underline"
    const nextEffectiveShowTabDivider =
      nextEffectiveOrientation === orientations.VERTICAL ||
      variant === variants.UNDERLINE
        ? false
        : showTabDivider;
    if (nextEffectiveShowTabDivider !== prevEffectiveShowTabDivider) {
      newState.effectiveShowTabDivider = nextEffectiveShowTabDivider;
      hasStateChanged = true;
    }

    if (hasStateChanged) {
      return newState;
    }

    return null;
  }

  /** @returns {TabMeta[]} */
  getTabs() {
    return createTabs(this.props.children);
  }

  /**
   * If the activeTabIndex has been passed, use it. Otherwise, use our
   * internally managed activeTabIndex.
   * @returns {number}
   */
  getActiveTabIndex() {
    return this.props.activeTabIndex !== undefined
      ? this.props.activeTabIndex
      : this.state.activeTabIndex;
  }

  /** @returns {TabMeta|undefined} */
  getActiveTab() {
    return this.getTabs()[this.getActiveTabIndex()];
  }

  /**
   * @param {number} nextActiveTabIndex
   * @param {TabMeta} tab
   */
  onTabSelection(selectedTabIndex, { disabled }) {
    this.props.onTabChange(selectedTabIndex);

    const prevActiveTabIndex = this.getActiveTabIndex();
    if (!disabled && prevActiveTabIndex !== selectedTabIndex) {
      this.setState({ activeTabIndex: selectedTabIndex });
    }
  }

  /**
   * @param {number} nextHoveredTabIndex
   * @param {TabMeta} tab
   */
  setHoveredTab(nextHoveredTabIndex, { disabled }) {
    const { hoveredTabIndex: prevHoveredTabIndex } = this.state;
    if (disabled || prevHoveredTabIndex === nextHoveredTabIndex) return;
    this.setState({ hoveredTabIndex: nextHoveredTabIndex });
  }

  /**
   * @param {number} index
   */
  removeHoveredTab(index) {
    const { hoveredTabIndex } = this.state;
    if (hoveredTabIndex === index) {
      this.setState({ hoveredTabIndex: DEFAULT_HOVERED_TAB_INDEX });
    }
  }

  createTabEventHandlers = memoize((index, { disabled }) => ({
    ...createButtonEventHandlers(() =>
      this.onTabSelection(index, { disabled })
    ),
    onMouseEnter: () => this.setHoveredTab(index, { disabled }),
    onMouseLeave: () => this.removeHoveredTab(index),
    onClose: () => this.props.onTabClose(index)
  }));

  /**
   * @param {TabMeta} tab
   * @param {number} index
   * @returns {JSX.Element}
   */
  renderTab = ({ key, props }, index) => {
    const { disabled, className: tabClassName } = props;
    const { variant, className: tabsClassName } = this.props;
    const {
      hoveredTabIndex,
      effectiveAlign,
      effectiveOrientation,
      effectiveShowTabDivider
    } = this.state;
    const activeTabIndex = this.getActiveTabIndex();

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
      ...props,
      key,
      variant,
      className,
      showDivider: showTabDivider,
      align: effectiveAlign,
      orientation: effectiveOrientation,
      active: activeTabIndex === index,
      ...this.createTabEventHandlers(index, { disabled })
    };

    return <Tab {...payload} />;
  };

  /**
   * @returns {JSX.Element}
   */
  renderTabs() {
    const { variant, className } = this.props;
    const { effectiveAlign, effectiveOrientation } = this.state;
    return (
      <TabsPresenter
        variant={variant}
        align={effectiveAlign}
        orientation={effectiveOrientation}
        className={className}
      >
        {this.getTabs().map(this.renderTab)}
      </TabsPresenter>
    );
  }

  /**
   * @returns {JSX.Element}
   */
  renderContent() {
    const { className } = this.props;
    const activeTab = this.getActiveTab();

    return (
      <ContentPresenter className={className}>
        {activeTab ? activeTab.props.children : null}
      </ContentPresenter>
    );
  }

  render() {
    const { effectiveOrientation } = this.state;
    const styles = stylesheet({ orientation: effectiveOrientation });

    return (
      <div className={cx(css(styles.wrapper), this.props.className)}>
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    );
  }
}

export default polyfill(Tabs);
