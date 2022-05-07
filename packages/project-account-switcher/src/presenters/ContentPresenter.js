import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import memoize from "lodash.memoize";
import TextLink from "@hig/text-link";
import Typography from "@hig/typography";
import { createButtonEventHandlers, createCustomClassNames } from "@hig/utils";

import constructPlaceholder from "./constructPlaceholder";
import stylesheet from "./stylesheet";

function getTypographyPlaceholderStyles() {
  return {
    textAlign: `center`,
    lineHeight: `32px`,
  };
}

const ContentPresenter = (props) => {
  const createAccountListItemHandlers = memoize((id) =>
    createButtonEventHandlers((event) => props.onAccountClick(event, id))
  );

  const createProjectListItemHandlers = memoize((id) =>
    createButtonEventHandlers((event) => props.onProjectClick(event, id))
  );

  const renderAccountsList = () => {
    const styles = stylesheet(props);
    /* eslint-disable-next-line react/prop-types */
    const { className } = props;
    const switcherItemClassName = createCustomClassNames(
      className,
      "switcher-item"
    );
    const switcherAccountImageWrapperClassName = createCustomClassNames(
      className,
      "switcher-account-image-wrapper"
    );
    const imageClassName = createCustomClassNames(className, "image");

    return props.accounts.map(({ id, image, label }) => {
      const { handleClick, handleKeyDown } = createAccountListItemHandlers(id);

      /** @todo Move this block into it's own component & module */
      return (
        <li
          className={cx([switcherItemClassName, css(styles.switcherItem)])}
          key={`account-${id}`}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="menuitem"
          tabIndex="0"
        >
          <span
            className={cx([
              switcherAccountImageWrapperClassName,
              css(styles.switcherAccountImageWrapper),
            ])}
          >
            {Boolean(image) && (
              <img
                className={cx([imageClassName, css(styles.image)])}
                src={image}
                alt={label}
              />
            )}
            <Typography
              elementType="span"
              style={getTypographyPlaceholderStyles()}
            >
              {constructPlaceholder(label)}
            </Typography>
          </span>
          <TextLink>{label}</TextLink>
        </li>
      );
    });
  };

  const renderProjectsList = () => {
    const styles = stylesheet(props);
    const { className } = props;
    const switcherItemClassName = createCustomClassNames(
      className,
      "switcher-item"
    );
    const imageWrapperClassName = createCustomClassNames(
      className,
      "image-wrapper"
    );
    const imageClassName = createCustomClassNames(className, "image");

    return props.projects.map(({ id, image, label }) => {
      const { handleClick, handleKeyDown } = createProjectListItemHandlers(id);

      /** @todo Move this block into it's own component & module */
      return (
        <li
          key={`project-${id}`}
          className={cx([switcherItemClassName, css(styles.switcherItem)])}
          role="menuitem"
          tabIndex="0"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <span
            className={cx([imageWrapperClassName, css(styles.imageWrapper)])}
          >
            {Boolean(image) && (
              <img
                className={cx([imageClassName, css(styles.image)])}
                src={image}
                alt={label}
              />
            )}
            <Typography
              elementType="span"
              style={getTypographyPlaceholderStyles()}
            >
              {constructPlaceholder(label)}
            </Typography>
          </span>
          <TextLink>{label}</TextLink>
        </li>
      );
    });
  };

  const { accounts, accountTitle, projects, projectTitle, ...otherProps } =
    props;
  const { className } = otherProps;
  const styles = stylesheet(props);
  const typographyTitleStyles = {
    textTransform: `uppercase`,
    fontSize: `11px`,
  };
  const switcherListClassName = createCustomClassNames(
    className,
    "switcher-list"
  );

  return (
    <div>
      {accounts && (
        <ul className={cx([switcherListClassName, css(styles.switcherList)])}>
          <Typography elementType="span" style={typographyTitleStyles}>
            {accountTitle}
          </Typography>
          {renderAccountsList()}
        </ul>
      )}
      {projects && (
        <ul className={cx([switcherListClassName, css(styles.switcherList)])}>
          <Typography elementType="span" style={typographyTitleStyles}>
            {projectTitle}
          </Typography>
          {renderProjectsList()}
        </ul>
      )}
    </div>
  );
};

ContentPresenter.displayName = "ContentPresenter";

ContentPresenter.propTypes = {
  /** Heading title for the list of Accounts */
  accountTitle: PropTypes.string,
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
  /** Currently selected Project */
  activeProjectObj: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    label: PropTypes.string,
  }),
  /** HTML attribute class */
  className: PropTypes.string,
  /** Handles Account selection, passed from Behavior */
  onAccountClick: PropTypes.func,
  /** Handles Project selection, passed from Behavior */
  onProjectClick: PropTypes.func,
  /** List of Projects */
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  /** Heading title for the list of Projects */
  projectTitle: PropTypes.string,
};

ContentPresenter.defaultProps = {
  accountTitle: "Accounts",
  projectTitle: "Projects",
};

export default ContentPresenter;
