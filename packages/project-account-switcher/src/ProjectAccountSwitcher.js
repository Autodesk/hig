import React, { Component } from "react";
import PropTypes from "prop-types";

import ProjectAccountSwitcherPresenter from "./presenters/ProjectAccountSwitcherPresenter";
import ProjectAccountSwitcherBehavior from "./behavior/ProjectAccountSwitcherBehavior";

export default class ProjectAccountSwitcher extends Component {
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
    activeAccountId: PropTypes.string,
    /** Currently selected Project */
    activeProjectId: PropTypes.string,
    /** Called when a the element changes */
    onChange: PropTypes.func,
    /** Called when a user clicks on the element */
    onClick: PropTypes.func,
    /** Called when a user clicks on the target element */
    onTargetClick: PropTypes.func,
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
