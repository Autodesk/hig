import React, { Component } from "react";
import PropTypes from "prop-types";
import Flyout from "@hig/flyout";
import "@hig/flyout/build/index.css";
import icons from "../../../icons/build";
import { anchorPoints } from "../../../flyout/src/anchorPoints";
import "./ProjectAccountSwitcherPresenter.scss";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */

export default class ProjectAccountSwitcherPresenter extends Component {
  static constructPlaceholder(label) {
    return label.match(/\b(\w)/g).join("");
  }

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
    /** Label for selected Accounts and Projects */
    activeLabel: PropTypes.string,
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
    /** Handles Flyout display, passed from Behavior */
    onTargetClick: PropTypes.func,
    /** Menu heading title for the list of Projects */
    open: PropTypes.bool,
    /** Heading title for the list of Projects */
    projectTitle: PropTypes.string,
    /** List of Projects */
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string
      })
    )
  };

  static defaultProps = {
    accountTitle: "Accounts",
    open: false,
    projectTitle: "Projects"
  };

  constructLabel() {
    const labels = [];
    if (this.props.activeAccount) {
      labels.push(this.props.activeAccount.label);
    }
    if (this.props.activeProject) {
      labels.push(this.props.activeProject.label);
    }
    return labels.join(" / ");
  }

  // this method constructs the image placeholder for the combination of
  // the current activeAccount and/or activeProject,
  // in lieu of an image for either
  constructLabelPlaceholder() {
    const placeholders = [];
    if (this.props.activeAccount) {
      placeholders.push(
        ProjectAccountSwitcherPresenter.constructPlaceholder(
          this.props.activeAccount.label
        )
      );
    }
    if (this.props.activeProject) {
      placeholders.push(
        ProjectAccountSwitcherPresenter.constructPlaceholder(
          this.props.activeProject.label
        )
      );
    }
    return placeholders.join("/");
  }

  accountsList() {
    return this.props.accounts.map(account => (
      /* eslint-list-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
      <li
        className="project-account-switcher__item
                      project-account-switcher__item--account
                      project-account-switcher__item--active"
        data-account-id={account.id}
        onClick={this.props.onAccountClick}
      >
        <span className="project-account-switcher__item__image-wrapper">
          <span
            className="project-account-switcher__item__image-placeholder"
            data-account-id={account.id}
          >
            {ProjectAccountSwitcherPresenter.constructPlaceholder(
              account.label
            )}
          </span>
        </span>
        <span
          className="project-account-switcher__item__label"
          data-account-id={account.id}
        >
          {account.label}
        </span>
      </li>
    ));
  }

  projectsList() {
    return this.props.projects.map(project => (
      /* eslint-list-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
      <li
        className="project-account-switcher__item
                      project-account-switcher__item--project
                      project-account-switcher__item--active"
        data-project-id={project.id}
        onClick={this.props.onProjectClick}
      >
        <span className="project-account-switcher__item__image-wrapper">
          <span
            className="project-account-switcher__item__image-placeholder"
            data-project-id={project.id}
          >
            {ProjectAccountSwitcherPresenter.constructPlaceholder(
              project.label
            )}
          </span>
        </span>
        <span
          className="project-account-switcher__item__label"
          data-project-id={project.id}
        >
          {project.label}
        </span>
      </li>
    ));
  }

  flyoutContent() {
    return (
      <div className="project-account-switcher__lists">
        {this.props.accounts.length > 0 && (
          <ul className="project-account-switcher__list">
            <span className="project-account-switcher__list__title">
              {this.props.accountTitle}
            </span>
            {this.accountsList()}
          </ul>
        )}
        {this.props.projects.length > 0 && (
          <ul className="project-account-switcher__list">
            <span className="project-account-switcher__list__title">
              {this.props.projectTitle}
            </span>
            {this.projectsList()}
          </ul>
        )}
      </div>
    );
  }

  componentHasNoLists() {
    const { accounts = [], projects = [] } = this.props;

    return !accounts.length && !projects.length;
  }

  render() {
    if (this.componentHasNoLists()) {
      console.warn("You must provide a list of accounts or projects");
      return null;
    }

    const activeLabel = this.props.activeLabel
      ? this.props.activeLabel
      : this.constructLabel();
    return (
      /* eslint-list-disable-next-line react/no-danger */
      <div
        className="project-account-switcher"
        onClick={this.props.onTargetClick}
      >
        <Flyout
          anchorPoint={anchorPoints.TOP_RIGHT}
          open={this.props.open}
          panel={({ innerRef }) => (
            <Flyout.Panel innerRef={innerRef}>
              <div className="project-account-switcher--custom-width-and-padding">
                {this.flyoutContent()}
              </div>
            </Flyout.Panel>
          )}
        >
          <div className="project-account-switcher__target">
            <div className="project-account-switcher__item">
              <span className="project-account-switcher__item__image-wrapper">
                <img
                  className="project-account-switcher__item__image"
                  alt={activeLabel}
                  src={""}
                />
                <span className="project-account-switcher__item__image-placeholder">
                  {this.constructLabelPlaceholder()}
                </span>
              </span>
              <span className="project-account-switcher__item__label">
                {activeLabel}
              </span>
            </div>
            <span className="project-account-switcher__target__caret">
              <div
                className="hig__icon hig__icon--24-size"
                dangerouslySetInnerHTML={{
                  __html: icons["caret-24"]
                }}
              />
            </span>
          </div>
        </Flyout>
      </div>
    );
  }
}
