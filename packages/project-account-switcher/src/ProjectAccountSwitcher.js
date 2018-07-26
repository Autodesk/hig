import React, { Component } from "react";
import PropTypes from "prop-types";

import ProjectAccountSwitcherPresenter from "./presenters/ProjectAccountSwitcherPresenter";
import ProjectAccountSwitcherBehavior from "./behavior/ProjectAccountSwitcherBehavior";

export default class ProjectAccountSwitcher extends Component {
  static propTypes = {
    accounts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string
      })
    ),
    accountTitle: PropTypes.string,
    activeAccountId: PropTypes.string,
    activeProjectId: PropTypes.string,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string
      })
    ),
    projectTitle: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
  };

  state = {
    activeAccountId: this.props.activeAccountId,
    activeProjectId: this.props.activeProjectId
  };

  render() {
    const {
      accounts,
      accountTitle,
      activeAccountId,
      activeProjectId,
      projects,
      projectTitle,
      onChange,
      onClick
    } = this.props;

    return (
      <ProjectAccountSwitcherBehavior
        accounts={accounts}
        activeAccountId={activeAccountId}
        activeProjectId={activeProjectId}
        onChange={onChange}
        onClick={onClick}
        projects={projects}
      >
        {({
          activeAccountId,
          activeProjectId,
          handleAccountClick,
          handleProjectClick
        }) => (
          <ProjectAccountSwitcherPresenter
            accounts={accounts}
            accountTitle={accountTitle}
            activeAccountId={activeAccountId}
            activeProjectId={activeProjectId}
            onAccountClick={handleAccountClick}
            onProjectClick={handleProjectClick}
            projects={projects}
            projectTitle={projectTitle}
          />
        )}
      </ProjectAccountSwitcherBehavior>
    );
  }
}
