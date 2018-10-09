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
    /** Currently selected Account */
    activeAccountId: PropTypes.string,
    /** Currently selected Project */
    activeProjectId: PropTypes.string,
    /** Render prop */
    children: PropTypes.func,
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
    activeAccount: this.getAccount(this.props.activeAccountId),
    activeProject: this.getProject(this.props.activeProjectId)
  };

  getAccount(accountId) {
    const { accounts = [] } = this.props;

    return accounts.find(({ id }) => id === accountId);
  }

  getProject(projectId) {
    const { projects = [] } = this.props;

    return projects.find(({ id }) => id === projectId);
  }

  handleAccountClick = (event, id) => {
    const { onChange, onClick } = this.props;
    const { activeProject } = this.state;
    const activeAccount = this.getAccount(id);

    if (onClick) {
      onClick(event);
    }

    if (onChange) {
      onChange({
        account: activeAccount,
        project: activeProject
      });
    }

    this.setState({ activeAccount });
  };

  handleProjectClick = (event, id) => {
    const { onChange, onClick } = this.props;
    const { activeAccount } = this.state;
    const activeProject = this.getProject(id);

    if (onClick) {
      onClick(event);
    }

    if (onChange) {
      onChange({
        account: activeAccount,
        project: activeProject
      });
    }

    this.setState({ activeProject });
  };

  render() {
    return this.props.children({
      activeAccount: this.state.activeAccount,
      activeProject: this.state.activeProject,
      handleAccountClick: this.handleAccountClick,
      handleProjectClick: this.handleProjectClick
    });
  }
}
