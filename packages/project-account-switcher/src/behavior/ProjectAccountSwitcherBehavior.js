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
    activeAccount: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string
    }),
    /** Currently selected Project */
    activeProject: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string
    }),
    /** Render prop */
    children: PropTypes.func,
    /** Initially sets the selected Account, but allows user action to change it */
    onClick: PropTypes.func,
    /** Called when the selected Account or the selected Project changes, the new selected Account and Project will be passed as parameters: (account, project) */
    onChange: PropTypes.func,
    /** Called when the selected Account changes, the new selected Account will be passed as parameter */
    onAccountChange: PropTypes.func,
    /** Called when the selected Project changes, the new selected Project will be passed as parameter */
    onProjectChange: PropTypes.func,
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
    activeAccount: this.props.activeAccount,
    activeProject: this.props.activeProject,
    open: this.props.open
  };

  componentWillReceiveProps(nextProps) {
    let modifiedState = {activeAccount: nextProps.activeAccount, activeProject: nextProps.activeProject};
    this.setState( modifiedState );
  }

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
    const { onAccountChange, onChange, onClick } = this.props;

    const newActiveAccount = this.getAccount(id);
    
    if (newActiveAccount !== this.state.activeAccount) {
      if (onAccountChange) {
        onAccountChange(newActiveAccount);
      }
      
      if (onChange) {
        onChange(newActiveAccount, this.state.activeProject);
      }
    }

    if (onClick) {
      onClick(event);
    }

    this.setState({
      activeAccount: newActiveAccount
    });
  };

  handleProjectClick = (event, id) => {
    const { onChange, onClick, onProjectChange } = this.props;
    
    const newActiveProject = this.getProject(id);
    
    if (newActiveProject !== this.state.activeProject) {
      if (onProjectChange) {
        onProjectChange(newActiveProject);
      }
      
      if (onChange) {
        onChange(this.state.activeAccount, newActiveProject);
      }
    }

    if (onClick) {
      onClick(event);
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
