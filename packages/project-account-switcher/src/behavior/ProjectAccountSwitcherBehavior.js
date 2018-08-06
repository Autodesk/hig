import { Component } from "react";
import PropTypes from "prop-types";

export default class ProjectAccountSwitcherBehavior extends Component {
  static propTypes = {
    accounts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string
      })
    ),
    activeAccountId: PropTypes.string,
    activeProjectId: PropTypes.string,
    children: PropTypes.func,
    defaultActiveAccountId: PropTypes.string,
    defaultActiveProjectId: PropTypes.string,
    onClick: PropTypes.func,
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
    defaultActiveProjectId: "1"
  };

  state = {
    activeAccountId: this.props.defaultActiveAccountId,
    activeProjectId: this.props.defaultActiveProjectId
  };

  isControlled() {
    return (
      this.props.activeAccountId !== undefined &&
      this.props.activeProjectId !== undefined
    );
  }

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
      handleProjectClick: this.handleProjectClick
    });
  }
}
