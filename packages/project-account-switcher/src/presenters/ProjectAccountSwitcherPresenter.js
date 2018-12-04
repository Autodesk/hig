import React, { Component } from "react";
import PropTypes from "prop-types";
import { Caret24 } from "@hig/icons";
import { memoizeCreateButtonEventHandlers } from "@hig/utils";

import constructPlaceholder from "./constructPlaceholder";
import "./ProjectAccountSwitcherPresenter.scss";

export default class ProjectAccountSwitcherPresenter extends Component {
  static propTypes = {
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
    /** Label for selected Accounts and Projects */
    activeLabel: PropTypes.string,
    /** Currently selected Project */
    activeProject: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string
    }),
    /** Handles Flyout display, passed from Behavior */
    onTargetClick: PropTypes.func,
    /** List of Projects */
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string
      })
    )
  };

  // this method constructs the image placeholder for the combination of
  // the current activeAccount and/or activeProject,
  // in lieu of an image for either
  constructLabelPlaceholder() {
    const placeholders = [];
    const { activeAccount, activeProject } = this.props;

    if (activeAccount) {
      placeholders.push(activeAccount.label);
    }

    if (activeProject) {
      placeholders.push(activeProject.label);
    }

    return placeholders.map(constructPlaceholder).join("/");
  }

  componentHasNoLists() {
    const { accounts = [], projects = [] } = this.props;

    return !accounts.length && !projects.length;
  }

  activeImage() {
    const { activeAccount = {}, activeProject = {} } = this.props;
    const { image: activeAccountImage } = activeAccount;
    const { image: activeProjectImage } = activeProject;

    return activeAccountImage || activeProjectImage || "";
  }

  createTargetHandlers = memoizeCreateButtonEventHandlers();

  renderLabel() {
    const { activeLabel, activeAccount, activeProject } = this.props;

    if (activeLabel) return activeLabel;

    const labels = [];

    if (activeAccount) {
      labels.push(activeAccount.label);
    }
    if (activeProject) {
      labels.push(activeProject.label);
    }

    return labels.join(" / ");
  }

  render() {
    if (this.componentHasNoLists()) {
      /* eslint-disable-next-line no-console */
      console.warn("You must provide a list of accounts or projects");
      return null;
    }

    const label = this.renderLabel();
    const { onTargetClick } = this.props;
    const {
      handleClick: handleTargetClick,
      handleKeyDown: handleTargetKeyDown
    } = this.createTargetHandlers(onTargetClick);

    return (
      <div
        className="hig__project-account-switcher__target"
        onClick={handleTargetClick}
        onKeyDown={handleTargetKeyDown}
        role="button"
        tabIndex="0"
      >
        <div className="hig__project-account-switcher__target__item hig__project-account-switcher__item">
          <span className="hig__project-account-switcher__item__image-wrapper">
            <img
              className="hig__project-account-switcher__item__image"
              alt={label}
              src={this.activeImage()}
            />
            <span className="hig__project-account-switcher__item__image-placeholder">
              {this.constructLabelPlaceholder()}
            </span>
          </span>
          <span className="hig__project-account-switcher__item__label">
            {label}
          </span>
        </div>
        <div className="hig__project-account-switcher__target__caret">
          <Caret24 />
        </div>
      </div>
    );
  }
}
