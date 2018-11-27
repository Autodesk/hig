import React, { Component } from "react";
import PropTypes from "prop-types";
import { combineEventHandlers } from "@hig/utils";
import Flyout, { AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
import "@hig/flyout/build/index.css";

import ProjectAccountSwitcherBehavior from "./behavior/ProjectAccountSwitcherBehavior";
import ContentPresenter from "./presenters/ContentPresenter";
import PanelPresenter from "./presenters/PanelPresenter";
import ProjectAccountSwitcherPresenter from "./presenters/ProjectAccountSwitcherPresenter";

/* eslint-disable-next-line react/prop-types */
function renderPanel({ innerRef, content }) {
  return <PanelPresenter innerRef={innerRef}>{content}</PanelPresenter>;
}

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
    /** Label for selected Accounts and Projects */
    activeLabel: PropTypes.string,
    /** Currently selected Project */
    activeProjectId: PropTypes.string,
    /** Manipulate flyout coordinates before each render */
    alterCoordinates: PropTypes.func,
    /** Where the flyout will be anchored relative to target */
    anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
    /** Called when a the active account or project changes */
    onChange: PropTypes.func,
    /** Called when a user clicks on a list item */
    onClick: PropTypes.func,
    /** Called when a user clicks on the target element */
    onTargetClick: PropTypes.func,
    /** Shows or hides the flyout */
    open: PropTypes.bool,
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
      activeLabel,
      activeProjectId,
      alterCoordinates,
      anchorPoint,
      onChange,
      onClick,
      onTargetClick,
      open,
      projects,
      projectTitle
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
          activeAccount,
          activeProject,
          handleAccountClick,
          handleProjectClick
        }) => (
          <Flyout
            alterCoordinates={alterCoordinates}
            anchorPoint={anchorPoint}
            open={open}
            panel={renderPanel}
            content={({ hideFlyout }) => (
              <ContentPresenter
                accounts={accounts}
                accountTitle={accountTitle}
                activeAccount={activeAccount}
                activeProject={activeProject}
                onAccountClick={combineEventHandlers(
                  handleAccountClick,
                  hideFlyout
                )}
                onProjectClick={combineEventHandlers(
                  handleProjectClick,
                  hideFlyout
                )}
                projects={projects}
                projectTitle={projectTitle}
              />
            )}
          >
            {({ handleClick }) => (
              <ProjectAccountSwitcherPresenter
                accounts={accounts}
                activeAccount={activeAccount}
                activeLabel={activeLabel}
                activeProject={activeProject}
                onTargetClick={combineEventHandlers(onTargetClick, handleClick)}
                open={open}
                projects={projects}
              />
            )}
          </Flyout>
        )}
      </ProjectAccountSwitcherBehavior>
    );
  }
}
