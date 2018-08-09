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
    defaultActiveAccountId: PropTypes.string,
    /** Initially sets the selected Project, but allows user action to change it */
    defaultActiveProjectId: PropTypes.string,
    /** Called when a user clicks on the element */
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
    defaultActiveAccountId: "1",
    defaultActiveProjectId: "1",
    open: false
  };

  state = {
    activeAccountId: this.props.defaultActiveAccountId,
    activeProjectId: this.props.defaultActiveProjectId,
    open: this.props.open
  };

  isControlled() {
    return (
      this.props.activeAccountId !== undefined &&
      this.props.activeProjectId !== undefined
    );
  }

  handleTargetClick = event => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(event);
    }

    this.setState({
      open: !this.state.open
    });
  };

  handleAccountClick = event => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(event);
    }

    if (!this.isControlled()) {
      const selectedAccount = event.target.dataset.accountId;
      this.setState({
        activeAccountId: this.props.accounts.filter(
          account => account.id === selectedAccount
        )[0].id
      });
    }
  };

  handleProjectClick = event => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(event);
    }

    if (!this.isControlled()) {
      const selectedProject = event.target.dataset.projectId;
      this.setState({
        activeProjectId: this.props.projects.filter(
          project => project.id === selectedProject
        )[0].id
      });
    }
  };

  render() {
    return this.props.children({
      activeAccountId: this.state.activeAccountId,
      activeProjectId: this.state.activeProjectId,
      handleAccountClick: this.handleAccountClick,
      handleTargetClick: this.handleTargetClick,
      handleProjectClick: this.handleProjectClick,
      open: this.state.open
    });
  }
}
