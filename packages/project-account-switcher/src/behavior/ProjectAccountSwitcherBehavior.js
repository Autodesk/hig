// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const ProjectAccountSwitcherBehavior = props => {
  const getAccount = accountId => {
    const { accounts = [], activeAccount } = props;

    if (activeAccount) {
      return accounts.find(({ id }) => id === activeAccount);
    }

    return accounts.find(({ id }) => id === accountId);
  };

  const getProject = projectId => {
    const { activeProject, projects = [] } = props;

    if (activeProject) {
      return projects.find(({ id }) => id === activeProject);
    }

    return projects.find(({ id }) => id === projectId);
  };

  const [activeAccountHook, setActiveAccountHook] = useState(
    getAccount(props.activeAccount)
  );
  const [activeProjectHook, setActiveProjectHook] = useState(
    getProject(props.activeProject)
  );

  const handleAccountClick = (event, id) => {
    const { activeAccount, onChange, onClick } = props;
    const activeProjectObj = activeProjectHook;
    const activeAccountObj = getAccount(id);

    if (onClick) {
      onClick(event);
    }

    if (onChange) {
      onChange({
        account: activeAccountObj,
        project: activeProjectObj
      });
    }

    if (!activeAccount) {
      setActiveAccountHook(activeAccountObj);
    }
  };

  const handleProjectClick = (event, id) => {
    const { activeProject, onChange, onClick } = props;
    const activeAccountObj = activeAccountHook;
    const activeProjectObj = getProject(id);

    if (onClick) {
      onClick(event);
    }

    if (onChange) {
      onChange({
        account: activeAccountObj,
        project: activeProjectObj
      });
    }

    if (!activeProject) {
      setActiveProjectHook(activeProjectObj);
    }
  };

  const {
    activeAccountId,
    activeProjectId,
    defaultAccount,
    defaultProject
  } = props;
  const uncontrolledAccount = defaultAccount || activeAccountId;
  const uncontrolledProject = defaultProject || activeProjectId;

  return props.children({
    activeAccountObj: activeAccountHook || getAccount(uncontrolledAccount),
    activeProjectObj: activeProjectHook || getProject(uncontrolledProject),
    handleAccountClick,
    handleProjectClick
  });
};

ProjectAccountSwitcherBehavior.displayName = "ProjectAccountSwitcherBehavior";

ProjectAccountSwitcherBehavior.propTypes = {
  /** List of Accounts */
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string
    })
  ),
  /** Currently selected Account - use this instead of defaultAccount for a controlled component */
  activeAccount: PropTypes.string,
  /** DEPRECATED use defaultAccount instead - Currently selected Account */
  activeAccountId: PropTypes.string,
  /** Currently selected Project - use this instead of defaultProject for a controlled component */
  activeProject: PropTypes.string,
  /** DEPRECATED use defaultProject instead - Currently selected Project */
  activeProjectId: PropTypes.string,
  /** Render prop */
  children: PropTypes.func,
  /** The default selected account */
  defaultAccount: PropTypes.string,
  /** The default selected project */
  defaultProject: PropTypes.string,
  /** Called when a the active account or project changes */
  onChange: PropTypes.func,
  /** Called when a user clicks on a list item */
  onClick: PropTypes.func,
  /** List of Projects */
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string
    })
  )
};

export default ProjectAccountSwitcherBehavior;
