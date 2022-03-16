// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} PresenterBag
 * @property {boolean} isWrappingContent
 * @property {function(HTMLDivElement)} refContent
 * @property {function(HTMLParagraphElement)} refNotification
 * @property {function(HTMLDivElement)} refInteractionsWrapper
 * @property {any} [children]
 */

/**
 * @typedef {Object} BannerContainerProps
 * @property {any} [actions]
 * @property {Function} [onReady]
 * @property {function(PresenterBag): any} [children]
 */

/**
 * @typedef {Object} BannerContainerState
 * @property {boolean} isWrappingActions
 * @property {boolean} isWrappingContent
 */

/** The minimum space between the notification and actions */
const MIN_CONTENT_SPACING = 125;
/** The minimum width of the notification */
const MIN_NOTIFICATION_WIDTH = 200;
/** The width of the notification at which actions will begin wrapping */
const ACTIONS_WRAPPING_THRESHOLD = 300;

/** @type {Component<BannerContainerProps, BannerContainerState>} */
const BannerContainer = props => {
  const [isWrappingActions, setIsWrappingActions] = useState(false);
  const [isWrappingContent, setIsWrappingContent] = useState(false);
  const [callBack, setCallBack] = useState(null);

  /** @type {HTMLDivElement | undefined} */
  const content = useRef(null);
  /** @type {HTMLDivElement | undefined} */
  const interactionsWrapper = useRef(null);
  /** @type {HTMLParagraphElement | undefined} */
  const notification = useRef(null);
  /** @type {number | undefined} */
  const wrappingFrame = useRef(null);

  /**
   * @param {HTMLDivElement} element
   */
  const refContent = element => {
    content.current = element;
  };

  /**
   * @param {HTMLParagraphElement} element
   */
  const refNotification = element => {
    notification.current = element;
  };

  /**
   * @param {HTMLDivElement} element
   */
  const refInteractionsWrapper = element => {
    interactionsWrapper.current = element;
  };

  /**
   * Determines whether the content will overflow its container
   * with the given width of the notification element.
   *
   * @param {number} notificationWidth
   * @returns {boolean}
   */
  const willContentOverflow = notificationWidth => {
    if (!content.current || !interactionsWrapper.current) return false;

    const contentWidth = content.offsetWidth;
    const actionsWidth = interactionsWrapper.offsetWidth;
    const contentChildrenWidth =
      notificationWidth + MIN_CONTENT_SPACING + actionsWidth;

    return contentChildrenWidth > contentWidth;
  };

  /**
   * Determines whether actions should wrap on the next repaint
   * @returns {boolean}
   */
  const shouldWrapActions = () => {
    if (!interactionsWrapper) return false;
    const notificationWidth = isWrappingActions
      ? ACTIONS_WRAPPING_THRESHOLD + interactionsWrapper.offsetWidth * 2
      : ACTIONS_WRAPPING_THRESHOLD;

    return willContentOverflow(notificationWidth);
  };

  const updateActionWrapping = callBackParam => {
    const update = { isWrappingActions: shouldWrapActions() };
    setIsWrappingActions(update);
    setCallBack(callBackParam);
  };

  /**
   * Asynchronously updates the wrapping behavior of the presenter
   * @param {Function} callback
   */
  const updateWrapping = callback => {
    if (wrappingFrame.current !== undefined) return;

    wrappingFrame.current = window.requestAnimationFrame(() => {
      updateActionWrapping(callback);
    });
  };

  const handleResize = () => {
    updateWrapping();
  };

  /**
   * Determines whether content should wrap on the next repaint
   * @returns {boolean}
   */
  const shouldWrapContent = () => willContentOverflow(MIN_NOTIFICATION_WIDTH);

  /**
   * @param {Function} callback
   */
  const updateContentWrapping = callback => {
    const update = { isWrappingContent: shouldWrapContent() };
    setIsWrappingContent(update);
    setCallBack(callback);
  };

  /**
   * @param {Function} callback
   */

  const cancelWrappingUpdate = () => {
    if (wrappingFrame !== undefined) {
      window.cancelAnimationFrame(wrappingFrame);
    }
  };

  const bindResize = () => {
    window.addEventListener("resize", handleResize);
  };

  const unbindResize = () => {
    window.removeEventListener("resize", handleResize);
  };

  /** @returns {any} */
  const renderActions = () => {
    const { actions } = props;

    if (typeof actions !== "function") return actions;

    const actionsBag = { isWrappingContent, isWrappingActions };

    return actions(actionsBag);
  };

  /**
   * @returns {PresenterBag}
   */
  const createPresenterBag = () => ({
    isWrappingContent,
    refContent,
    refNotification,
    refInteractionsWrapper,
    actions: renderActions()
  });

  useEffect(() => {
    if (isWrappingContent) {
      // delete wrappingFrame;
      if (callBack) callBack();
    }
  }, [isWrappingContent]);

  useEffect(() => {
    if (isWrappingActions) {
      wrappingFrame.current = window.requestAnimationFrame(() => {
        updateContentWrapping(callBack);
      });
    }
  }, [isWrappingActions]);

  useEffect(() => {
    bindResize();
    updateWrapping(props.onReady);
    return () => {
      unbindResize();
      cancelWrappingUpdate();
    };
  }, []);

  const { children: renderPresenter } = props;
  const presenterBag = createPresenterBag();

  return renderPresenter(presenterBag);
};

BannerContainer.displayName = "BannerContainer";

BannerContainer.propTypes = {
  /** Banner actions; Any JSX, or a render prop function */
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Called after the component has been mounted, and dynamically resized */
  onReady: PropTypes.func,
  /** A render prop function to render a `BannerPresenter` */
  children: PropTypes.func.isRequired
};

export default BannerContainer;
