import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { generateId } from "@hig/utils";
import Flyout from "@hig/flyout";
import icons from "../../../icons/build";
import { anchorPoints } from "../../../flyout/src/anchorPoints";

import "./ProjectAccountSwitcherPresenter.scss";

export default class ProjectAccountSwitcherPresenter extends Component {
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
    activeAccountId: PropTypes.string,
    activeLabel: PropTypes.string,
    activeProjectId: PropTypes.string,
    onAccountClick: PropTypes.func,
    onProjectClick: PropTypes.func,
    /** Menu heading title for the list of Projects */
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
    accounts: [
      { id: "1", label: "Account 1" },
      { id: "2", label: "Account 2" }
    ],
    activeAccountId: "2",
    activeProjectId: "2",
    projectTitle: "Projects",
    projects: [{ id: "1", label: "Project 1" }, { id: "2", label: "Project 2" }]
  };

  constructPlaceholder(label) {
    return label.match(/\b(\w)/g).join("");
  }

  constructLabel() {
    const activeAccount = this.props.accounts.filter(
      account => account.id === this.props.activeAccountId
    )[0];
    const activeProject = this.props.projects.filter(
      project => project.id === this.props.activeProjectId
    )[0];
    return activeAccount.label + " / " + activeProject.label;
  }

  constructLabelPlaceholder() {
    const activeAccount = this.props.accounts.filter(
      account => account.id === this.props.activeAccountId
    )[0];
    const activeProject = this.props.projects.filter(
      project => project.id === this.props.activeProjectId
    )[0];
    return (
      this.constructPlaceholder(activeAccount.label) +
      "/" +
      this.constructPlaceholder(activeProject.label)
    );
  }

  accountsList() {
    return this.props.accounts.map(account => (
      <div
        className="hig__global-nav__top-nav__project-account-switcher__item
                      hig__global-nav__top-nav__project-account-switcher__item--account
                      hig__global-nav__top-nav__project-account-switcher__item--active"
        data-account-id={account.id}
        onClick={this.props.onAccountClick}
      >
        <span className="hig__global-nav__top-nav__project-account-switcher__item__image-wrapper">
          <span
            className="hig__global-nav__top-nav__project-account-switcher__item__image-placeholder"
            data-account-id={account.id}
            dangerouslySetInnerHTML={{
              __html: this.constructPlaceholder(account.label)
            }}
          />
        </span>
        <span
          className="hig__global-nav__top-nav__project-account-switcher__item__label"
          data-account-id={account.id}
          dangerouslySetInnerHTML={{ __html: account.label }}
        />
      </div>
    ));
  }

  projectsList() {
    return this.props.projects.map(project => (
      <div
        className="hig__global-nav__top-nav__project-account-switcher__item
                      hig__global-nav__top-nav__project-account-switcher__item--project
                      hig__global-nav__top-nav__project-account-switcher__item--active"
        data-project-id={project.id}
        onClick={this.props.onProjectClick}
      >
        <span className="hig__global-nav__top-nav__project-account-switcher__item__image-wrapper">
          <span
            className="hig__global-nav__top-nav__project-account-switcher__item__image-placeholder"
            data-project-id={project.id}
            dangerouslySetInnerHTML={{
              __html: this.constructPlaceholder(project.label)
            }}
          />
        </span>
        <span
          className="hig__global-nav__top-nav__project-account-switcher__item__label"
          data-project-id={project.id}
          dangerouslySetInnerHTML={{ __html: project.label }}
        />
      </div>
    ));
  }

  flyoutContent() {
    return (
      <div className="hig__global-nav__top-nav__project-account-switcher__lists">
        <div className="hig__global-nav__top-nav__project-account-switcher__list">
          <div
            className="hig__global-nav__top-nav__project-account-switcher__list__title"
            dangerouslySetInnerHTML={{ __html: this.props.accountTitle }}
          />
          {this.accountsList()}
        </div>
        <div className="hig__global-nav__top-nav__project-account-switcher__list">
          <div
            className="hig__global-nav__top-nav__project-account-switcher__list__title"
            dangerouslySetInnerHTML={{ __html: this.props.projectTitle }}
          />
          {this.projectsList()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Flyout
        content={this.flyoutContent()}
        anchorPoint={anchorPoints.TOP_RIGHT}
      >
        <div className="hig__global-nav__top-nav__project-account-switcher__target">
          <div className="hig__global-nav__top-nav__project-account-switcher__item">
            <span className="hig__global-nav__top-nav__project-account-switcher__item__image-wrapper">
              <img className="hig__global-nav__top-nav__project-account-switcher__item__image" />
              <span
                className="hig__global-nav__top-nav__project-account-switcher__item__image-placeholder"
                dangerouslySetInnerHTML={{
                  __html: this.constructLabelPlaceholder()
                }}
              />
            </span>
            <span
              className="hig__global-nav__top-nav__project-account-switcher__item__label"
              dangerouslySetInnerHTML={{ __html: this.constructLabel() }}
            />
          </div>
          <span className="hig__global-nav__top-nav__project-account-switcher__target__caret">
            <div
              className="hig__icon hig__icon--24-size"
              dangerouslySetInnerHTML={{
                __html: icons["caret-24"]
              }}
            />
          </span>
        </div>
      </Flyout>
    );
  }
}
