import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import memoize from "lodash.memoize";
import { createButtonEventHandlers } from "@hig/utils";
import "@hig/styles/build/fonts.css";

import constructPlaceholder from "./constructPlaceholder";

import "./ContentPresenter.scss";

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
    activeAccount: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string
    }),
    /** Currently selected Project */
    activeProject: PropTypes.shape({
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
    const classes = cx(
      "hig__project-account-switcher__item",
      "hig__project-account-switcher__item--account",
      "hig__project-account-switcher__item--active"
    );

    return this.props.accounts.map(({ id, label }) => {
      const { handleClick, handleKeyDown } = this.createAccountListItemHandlers(
        id
      );

      /** @todo Move this block into it's own component & module */
      return (
        <li
          className={classes}
          key={`account-${id}`}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="menuitem"
          tabIndex="0"
        >
          <span className="hig__project-account-switcher__item__image-wrapper">
            <span className="hig__project-account-switcher__item__image-placeholder">
              {constructPlaceholder(label)}
            </span>
          </span>
          <span className="hig__project-account-switcher__item__label">
            {label}
          </span>
        </li>
      );
    });
  }

  renderProjectsList() {
    const classes = cx(
      "hig__project-account-switcher__item",
      "hig__project-account-switcher__item--project",
      "hig__project-account-switcher__item--active"
    );

    return this.props.projects.map(({ id, label }) => {
      const { handleClick, handleKeyDown } = this.createProjectListItemHandlers(
        id
      );

      /** @todo Move this block into it's own component & module */
      return (
        <li
          key={`project-${id}`}
          className={classes}
          role="menuitem"
          tabIndex="0"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <span className="hig__project-account-switcher__item__image-wrapper">
            <span className="hig__project-account-switcher__item__image-placeholder">
              {constructPlaceholder(label)}
            </span>
          </span>
          <span className="hig__project-account-switcher__item__label">
            {label}
          </span>
        </li>
      );
    });
  }

  render() {
    const { accounts, accountTitle, projects, projectTitle } = this.props;

    return (
      <div className="hig__project-account-switcher__lists">
        {accounts && (
          <ul className="hig__project-account-switcher__list">
            <span className="hig__project-account-switcher__list__title">
              {accountTitle}
            </span>
            {this.renderAccountsList()}
          </ul>
        )}
        {projects && (
          <ul className="hig__project-account-switcher__list">
            <span className="hig__project-account-switcher__list__title">
              {projectTitle}
            </span>
            {this.renderProjectsList()}
          </ul>
        )}
      </div>
    );
  }
}
