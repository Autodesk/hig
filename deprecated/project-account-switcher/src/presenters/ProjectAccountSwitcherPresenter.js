import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { CaretDownMUI } from "@hig/icons";
import Typography from "@hig/typography";
import {
  createCustomClassNames,
  memoizeCreateButtonEventHandlers,
} from "@hig/utils";

import constructPlaceholder from "./constructPlaceholder";
import stylesheet from "./stylesheet";

const ProjectAccountSwitcherPresenter = (props) => {
  // this method constructs the image placeholder for the combination of
  // the current activeAccountObj and/or activeProjectObj,
  // in lieu of an image for either
  const constructLabelPlaceholder = () => {
    const placeholders = [];
    const { activeAccountObj, activeProjectObj } = props;

    if (activeAccountObj) {
      placeholders.push(activeAccountObj.label);
    }

    if (activeProjectObj) {
      placeholders.push(activeProjectObj.label);
    }

    return placeholders.map(constructPlaceholder).join("/");
  };

  const componentHasNoLists = () => {
    const { accounts = [], projects = [] } = props;

    return !accounts.length && !projects.length;
  };

  const activeImage = () => {
    const { activeAccountObj = {}, activeProjectObj = {} } = props;
    const { image: activeAccountImage } = activeAccountObj;
    const { image: activeProjectImage } = activeProjectObj;

    return activeAccountImage || activeProjectImage || "";
  };

  const createTargetHandlers = memoizeCreateButtonEventHandlers();

  const renderLabel = () => {
    const { activeLabel, activeAccountObj, activeProjectObj } = props;

    if (activeLabel) return activeLabel;

    const labels = [];

    if (activeAccountObj) {
      labels.push(activeAccountObj.label);
    }
    if (activeProjectObj) {
      labels.push(activeProjectObj.label);
    }

    return labels.join(" / ");
  };

  if (componentHasNoLists()) {
    /* eslint-disable-next-line no-console */
    console.warn("You must provide a list of accounts or projects");
    return null;
  }

  const label = renderLabel();
  const { onTargetClick, ...otherProps } = props;
  const { className } = otherProps;
  const { handleClick: handleTargetClick, handleKeyDown: handleTargetKeyDown } =
    createTargetHandlers(onTargetClick);
  const styles = stylesheet(props);
  const targetClassName = createCustomClassNames(className, "target");
  const targetItemClassName = createCustomClassNames(className, "target-item");
  const imageWrapperClassName = createCustomClassNames(
    className,
    "image-wrapper"
  );
  const imageClassName = createCustomClassNames(className, "image");
  const targetCaretClassName = createCustomClassNames(
    className,
    "target-caret"
  );

  return (
    <div
      className={cx([targetClassName, css(styles.target)])}
      onClick={handleTargetClick}
      onKeyDown={handleTargetKeyDown}
      role="button"
      tabIndex="0"
    >
      <div className={cx([targetItemClassName, css(styles.targetItem)])}>
        <span className={cx([imageWrapperClassName, css(styles.imageWrapper)])}>
          <img
            className={cx([imageClassName, css(styles.image)])}
            alt={label}
            src={activeImage()}
          />
          <Typography
            elementType="span"
            style={{ textAlign: "center", lineHeight: "32px" }}
          >
            {constructLabelPlaceholder()}
          </Typography>
        </span>
        <Typography>{label}</Typography>
      </div>
      <div className={cx([targetCaretClassName, css(styles.targetCaret)])}>
        <CaretDownMUI />
      </div>
    </div>
  );
};

ProjectAccountSwitcherPresenter.displayName = "ProjectAccountSwitcherPresenter";

ProjectAccountSwitcherPresenter.propTypes = {
  /** List of Accounts */
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  /** Currently selected Account */
  activeAccountObj: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    label: PropTypes.string,
  }),
  /** Label for selected Accounts and Projects */
  activeLabel: PropTypes.string,
  /** Currently selected Project */
  activeProjectObj: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    label: PropTypes.string,
  }),
  /** Handles Flyout display, passed from Behavior */
  onTargetClick: PropTypes.func,
  /** List of Projects */
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default ProjectAccountSwitcherPresenter;
