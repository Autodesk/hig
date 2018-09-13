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
    /** Initially sets the selected Account, but allows user action to change it */
    onClick: PropTypes.func,
    /** Called when a user clicks on the target element */
    onTargetClick: PropTypes.func,
    /** Opens the Flyout */
    open: PropTypes.bool,
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
    open: false
  };

  state = {
    activeAccount: this.getAccount(this.props.activeAccountId),
    activeProject: this.getProject(this.props.activeProjectId),
    open: this.props.open
  };

  getAccount(accountId) {
    const { accounts = [] } = this.props;

    return accounts.find(({ id }) => id === accountId);
  }

  getProject(projectId) {
    const { projects = [] } = this.props;

    return projects.find(({ id }) => id === projectId);
  }

  handleTargetClick = event => {
    const { onTargetClick } = this.props;

    if (onTargetClick) {
      onTargetClick(event);
    }

    this.setState({
      open: !this.state.open
    });
  };

  handleAccountClick = (event, id) => {
    const { onClick } = this.props;

    const newActiveAccount = this.getAccount(id);
    
    if (onClick) {
      onClick(event, newActiveAccount);
    }

    this.setState({
      activeAccount: newActiveAccount
    });
  };

  handleProjectClick = (event, id) => {
    const { onClick } = this.props;
    
    const newActiveProject = this.getProject(id);
    
    if (onClick) {
      onClick(event, newActiveProject);
    }
    
    this.setState({
      activeProject: newActiveProject
    });
    
  };

  render() {
    return this.props.children({
      activeAccount: this.state.activeAccount,
      activeProject: this.state.activeProject,
      handleAccountClick: this.handleAccountClick,
      handleTargetClick: this.handleTargetClick,
      handleProjectClick: this.handleProjectClick,
      open: this.state.open
    });
  }
}
