/* eslint-disable-next-line no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Flyout from "@hig/flyout";
import "@hig/flyout/build/index.css";
import icons from "../../../icons/build";
import { anchorPoints } from "../../../flyout/src/anchorPoints";
import "./ProjectAccountSwitcherPresenter.scss";

export default class ProjectAccountSwitcherPresenter extends Component {
  static constructPlaceholder(label) {
    return label.match(/\b(\w)/g).join("");
  }

  /* eslint-disable-next-line object-shorthand */
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
      <li
        className="hig__project-account-switcher__item
                      hig__project-account-switcher__item--account
                      hig__project-account-switcher__item--active"
        role="menuitem"
        tabIndex="0"
        /* eslint-disable-next-line no-undef */
        onClick={() => this.props.onAccountClick(event, account.id)}
      >
        <span className="hig__project-account-switcher__item__image-wrapper">
          <span className="hig__project-account-switcher__item__image-placeholder">
            {ProjectAccountSwitcherPresenter.constructPlaceholder(
              account.label
            )}
          </span>
        </span>
        <span className="hig__project-account-switcher__item__label">
          {account.label}
        </span>
      </li>
    ));
  }

  projectsList() {
    return this.props.projects.map(project => (
      <li
        className="hig__project-account-switcher__item
                     hig__project-account-switcher__item--project
                     hig__project-account-switcher__item--active"
        role="menuitem"
        tabIndex="0"
        /* eslint-disable-next-line no-undef */
        onClick={() => this.props.onProjectClick(event, project.id)}
      >
        <span className="hig__project-account-switcher__item__image-wrapper">
          <span className="hig__project-account-switcher__item__image-placeholder">
            {ProjectAccountSwitcherPresenter.constructPlaceholder(
              project.label
            )}
          </span>
        </span>
        <span className="hig__project-account-switcher__item__label">
          {project.label}
        </span>
      </li>
    ));
  }

  flyoutContent() {
    return (
      <div className="hig__project-account-switcher__lists">
        {this.props.accounts && (
          <ul className="hig__project-account-switcher__list">
            <span className="hig__project-account-switcher__list__title">
              {this.props.accountTitle}
            </span>
            {this.accountsList()}
          </ul>
        )}
        {this.props.projects && (
          <ul className="hig__project-account-switcher__list">
            <span className="hig__project-account-switcher__list__title">
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

  activeImage() {
    if (this.props.activeAccount && this.props.activeAccount.image) {
      return this.props.activeAccount.image;
    } else if (this.props.activeProject && this.props.activeProject.image) {
      return this.props.activeProject.image;
    }
    return "";
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
      <div
        role="button"
        tabIndex="0"
        className="hig__project-account-switcher"
        onClick={this.props.onTargetClick}
      >
        <Flyout
          anchorPoint={anchorPoints.TOP_RIGHT}
          open={this.props.open}
          panel={({ innerRef }) => (
            <Flyout.Panel innerRef={innerRef}>
              <div className="hig__project-account-switcher--custom-width-and-padding">
                {this.flyoutContent()}
              </div>
            </Flyout.Panel>
          )}
        >
          <div className="hig__project-account-switcher__target">
            <div className="hig__project-account-switcher__item">
              <span className="hig__project-account-switcher__item__image-wrapper">
                <img
                  className="hig__project-account-switcher__item__image"
                  alt={activeLabel}
                  src={this.activeImage()}
                />
                <span className="hig__project-account-switcher__item__image-placeholder">
                  {this.constructLabelPlaceholder()}
                </span>
              </span>
              <span className="hig__project-account-switcher__item__label">
                {activeLabel}
              </span>
            </div>
            <span className="hig__project-account-switcher__target__caret">
              <div
                className="hig__icon hig__icon--24-size"
                /* eslint-disable-next-line react/no-danger */
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
