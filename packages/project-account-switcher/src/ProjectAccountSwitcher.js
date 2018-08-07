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
    onClick: PropTypes.func,
    onTargetClick: PropTypes.func
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
      onClick,
      onTargetClick
    } = this.props;

    return (
      <ProjectAccountSwitcherBehavior
        accounts={accounts}
        activeAccountId={activeAccountId}
        activeProjectId={activeProjectId}
        onChange={onChange}
        onClick={onClick}
        onTargetClick={onTargetClick}
        projects={projects}
      >
        {({
          activeAccountId,
          activeProjectId,
          handleAccountClick,
          handleProjectClick,
          handleTargetClick,
          open
        }) => (
          <ProjectAccountSwitcherPresenter
            accounts={accounts}
            accountTitle={accountTitle}
            activeAccountId={activeAccountId}
            activeProjectId={activeProjectId}
            onAccountClick={handleAccountClick}
            onProjectClick={handleProjectClick}
            onTargetClick={handleTargetClick}
            open={open}
            projects={projects}
            projectTitle={projectTitle}
          />
        )}
      </ProjectAccountSwitcherBehavior>
    );
  }
}
