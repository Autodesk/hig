import { Component } from "react";
import PropTypes from "prop-types";

export default class ProjectAccountSwitcherBehavior extends Component {
  static propTypes = {
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

  state = {
    activeAccount: this.getAccount(this.props.activeAccount),
    activeProject: this.getProject(this.props.activeProject)
  };

  getAccount(accountId) {
    const { accounts = [], activeAccount } = this.props;

    if (activeAccount) {
      return accounts.find(({ id }) => id === activeAccount);
    }

    return accounts.find(({ id }) => id === accountId);
  }

  getProject(projectId) {
    const { activeProject, projects = [] } = this.props;

    if (activeProject) {
      return projects.find(({ id }) => id === activeProject);
    }

    return projects.find(({ id }) => id === projectId);
  }

  handleAccountClick = (event, id) => {
    const { activeAccount, onChange, onClick } = this.props;
    const activeProjectObj = this.state.activeProject;
    const activeAccountObj = this.getAccount(id);

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
      this.setState({ activeAccount: activeAccountObj });
    }
  };

  handleProjectClick = (event, id) => {
    const { activeProject, onChange, onClick } = this.props;
    const activeAccountObj = this.state.activeAccount;
    const activeProjectObj = this.getProject(id);

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
      this.setState({ activeProject: activeProjectObj });
    }
  };

  render() {
    const {
      activeAccountId,
      activeProjectId,
      defaultAccount,
      defaultProject
    } = this.props;
    const uncontrolledAccount = defaultAccount || activeAccountId;
    const uncontrolledProject = defaultProject || activeProjectId;

    return this.props.children({
      activeAccountObj:
        this.state.activeAccount || this.getAccount(uncontrolledAccount),
      activeProjectObj:
        this.state.activeProject || this.getProject(uncontrolledProject),
      handleAccountClick: this.handleAccountClick,
      handleProjectClick: this.handleProjectClick
    });
  }
}
