import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import memoize from "lodash.memoize";
import TextLink from "@hig/text-link";
import Typography from "@hig/typography";
import { createButtonEventHandlers } from "@hig/utils";

import constructPlaceholder from "./constructPlaceholder";
import stylesheet from "./stylesheet";

function getTypographyPlaceholderStyles() {
  return {
    textAlign: `center`,
    lineHeight: `32px`
  };
}

export default class ContentPresenter extends Component {
  static propTypes = {
    /** Heading title for the list of Accounts */
    accountTitle: PropTypes.string,
    /** List of Accounts */
    accounts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string
      })
    ),
    /** Currently selected Account */
    activeAccountObj: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string
    }),
    /** Currently selected Project */
    activeProjectObj: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string
    }),
    /** Handles Account selection, passed from Behavior */
    onAccountClick: PropTypes.func,
    /** Handles Project selection, passed from Behavior */
    onProjectClick: PropTypes.func,
    /** List of Projects */
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string
      })
    ),
    /** Heading title for the list of Projects */
    projectTitle: PropTypes.string
  };

  static defaultProps = {
    accountTitle: "Accounts",
    projectTitle: "Projects"
  };

  createAccountListItemHandlers = memoize(id =>
    createButtonEventHandlers(event => this.props.onAccountClick(event, id))
  );

  createProjectListItemHandlers = memoize(id =>
    createButtonEventHandlers(event => this.props.onProjectClick(event, id))
  );

  renderAccountsList() {
    const styles = stylesheet(this.props);

    return this.props.accounts.map(({ id, image, label }) => {
      const { handleClick, handleKeyDown } = this.createAccountListItemHandlers(
        id
      );

      /** @todo Move this block into it's own component & module */
      return (
        <li
          className={css(styles.switcherItem)}
          key={`account-${id}`}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="menuitem"
          tabIndex="0"
        >
          <span className={css(styles.switcherAccountImageWrapper)}>
            {Boolean(image) && (
              <img className={css(styles.image)} src={image} alt={label} />
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
  }

  renderProjectsList() {
    const styles = stylesheet(this.props);

    return this.props.projects.map(({ id, image, label }) => {
      const { handleClick, handleKeyDown } = this.createProjectListItemHandlers(
        id
      );

      /** @todo Move this block into it's own component & module */
      return (
        <li
          key={`project-${id}`}
          className={css(styles.switcherItem)}
          role="menuitem"
          tabIndex="0"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <span className={css(styles.imageWrapper)}>
            {Boolean(image) && (
              <img className={css(styles.image)} src={image} alt={label} />
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
  }

  render() {
    const { accounts, accountTitle, projects, projectTitle } = this.props;
    const styles = stylesheet(this.props);
    const typographyTitleStyles = {
      textTransform: `uppercase`,
      fontSize: `11px`
    };

    return (
      <div>
        {accounts && (
          <ul className={css(styles.switcherList)}>
            <Typography elementType="span" style={typographyTitleStyles}>
              {accountTitle}
            </Typography>
            {this.renderAccountsList()}
          </ul>
        )}
        {projects && (
          <ul className={css(styles.switcherList)}>
            <Typography elementType="span" style={typographyTitleStyles}>
              {projectTitle}
            </Typography>
            {this.renderProjectsList()}
          </ul>
        )}
      </div>
    );
  }
}
