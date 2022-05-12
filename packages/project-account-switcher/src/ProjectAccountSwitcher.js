import React from "react";
import PropTypes from "prop-types";
import { combineEventHandlers } from "@hig/utils";
import Flyout, { AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";

import ProjectAccountSwitcherBehavior from "./behavior/ProjectAccountSwitcherBehavior";
import ContentPresenter from "./presenters/ContentPresenter";
import PanelPresenter from "./presenters/PanelPresenter";
import ProjectAccountSwitcherPresenter from "./presenters/ProjectAccountSwitcherPresenter";

/* eslint-disable-next-line react/prop-types, prettier/prettier */
function renderPanel({innerRef, content, stylesheet: customStylesheet, className}) {
  return (
    <PanelPresenter
      className={className}
      innerRef={innerRef}
      stylesheet={customStylesheet}
    >
      {content}
    </PanelPresenter>
  );
}

const ProjectAccountSwitcher = (props) => {
  const {
    accounts,
    accountTitle,
    activeAccount,
    activeAccountId,
    activeLabel,
    activeProject,
    activeProjectId,
    alterCoordinates,
    anchorPoint,
    defaultAccount,
    defaultProject,
    onChange,
    onClick,
    onTargetClick,
    open,
    projects,
    projectTitle,
    stylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <ProjectAccountSwitcherBehavior
      accounts={accounts}
      activeAccount={activeAccount}
      activeAccountId={activeAccountId}
      activeProject={activeProject}
      activeProjectId={activeProjectId}
      defaultAccount={defaultAccount}
      defaultProject={defaultProject}
      onChange={onChange}
      onClick={onClick}
      projects={projects}
    >
      {({
        activeAccountObj,
        activeProjectObj,
        handleAccountClick,
        handleProjectClick,
      }) => (
        <Flyout
          alterCoordinates={alterCoordinates}
          anchorPoint={anchorPoint}
          open={open}
          panel={renderPanel}
          // eslint-disable-next-line react/no-unstable-nested-components
          content={({ hideFlyout }) => (
            <ContentPresenter
              accounts={accounts}
              accountTitle={accountTitle}
              activeAccountObj={activeAccountObj}
              activeProjectObj={activeProjectObj}
              className={className}
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
              stylesheet={stylesheet}
            />
          )}
          stylesheet={stylesheet}
          className={className}
        >
          {({ handleClick }) => (
            <ProjectAccountSwitcherPresenter
              accounts={accounts}
              activeAccountObj={activeAccountObj}
              activeLabel={activeLabel}
              activeProjectObj={activeProjectObj}
              className={className}
              onTargetClick={combineEventHandlers(onTargetClick, handleClick)}
              open={open}
              projects={projects}
              stylesheet={stylesheet}
            />
          )}
        </Flyout>
      )}
    </ProjectAccountSwitcherBehavior>
  );
};

ProjectAccountSwitcher.displayName = "ProjectAccountSwitcher";

ProjectAccountSwitcher.propTypes = {
  /** Heading title for the list of Accounts */
  accountTitle: PropTypes.string,
  /** List of Accounts */
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  /** Currently selected Account - use this instead of defaultAccount for a controlled component */
  activeAccount: PropTypes.string,
  /** DEPRECATED use defaultAccount instead - Currently selected Account */
  activeAccountId: PropTypes.string,
  /** Label for selected Accounts and Projects */
  activeLabel: PropTypes.string,
  /** Currently selected Project - use this instead of defaultProject for a controlled component */
  activeProject: PropTypes.string,
  /** DEPRECATED use defaultProject instead - Currently selected Project */
  activeProjectId: PropTypes.string,
  /** Manipulate flyout coordinates before each render */
  alterCoordinates: PropTypes.func,
  /** Where the flyout will be anchored relative to target */
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
  /** The default selected account */
  defaultAccount: PropTypes.string,
  /** The default selected project */
  defaultProject: PropTypes.string,
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
      label: PropTypes.string,
    })
  ),
  /** Heading title for the list of Projects */
  projectTitle: PropTypes.string,
  /** Adds custom/overriding styles */
  stylesheet: PropTypes.func,
};

export default ProjectAccountSwitcher;
