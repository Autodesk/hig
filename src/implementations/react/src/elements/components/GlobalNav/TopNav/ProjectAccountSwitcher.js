import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectAccountSwitcherAdapter from '../../../../adapters/GlobalNav/TopNav/ProjectAccountSwitcherAdapter';
import Project from './Project';
import Account from './Account';

class ProjectAccountSwitcher extends Component {
  static propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
    })),
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
    })),
    activeProjectId: PropTypes.string,
    activeAccountId: PropTypes.string,
    projectTitle: PropTypes.string,
    accountTitle: PropTypes.string,
    onProjectClick: PropTypes.func,
    onAccountClick: PropTypes.func,
  }

  static defaultProps = {
    accounts: [],
    projects: []
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  handleProjectClick = (id) => {
    this.setState({ activeProjectId: id });
    if (this.props.onProjectClick) {
      this.props.onProjectClick(id);
    }
  }

  handleAccountClick = (id) => {
    this.setState({ activeAccountId: id });
    if (this.props.onAccountClick) {
      this.props.onAccountClick(id);
    }
  }

  activeProps() {
    const activeAccount = this.props.accounts.find(a => a.id === this.renderedActiveAccountId());
    const activeProject = this.props.projects.find(a => a.id === this.renderedActiveProjectId());

    if (activeAccount && activeProject) {
      const activeLabel = [activeAccount.label, activeProject.label].join(' / ');
      return { activeImage: activeProject.image, activeLabel, activeType: 'project' };
    } else if (activeProject) {
      return { activeImage: activeProject.image, activeLabel: activeProject.label, activeType: 'project' };
    } else if (activeAccount) {
      return { activeImage: activeAccount.image, activeLabel: activeAccount.label, activeType: 'account' };
    }

    return {}
  }

  flyoutProps() {
    if (this.props.projects.length > 1 || this.props.accounts.length > 1) {
      return {
        showCaret: true,
        onClick: this.toggleOpen,
        onClickOutside: this.toggleOpen
      }
    }

    return {};
  }

  renderedActiveProjectId() {
    if (this.props.activeProjectId !== undefined) {
      return this.props.activeProjectId;
    } else if (this.state.activeProjectId !== undefined) {
      return this.state.activeProjectId;
    }
    return this.props.projects[0].id;
  }

  renderedActiveAccountId() {
    if (this.props.activeAccountId !== undefined) {
      return this.props.activeAccountId;
    } else if (this.state.activeAccountId !== undefined) {
      return this.state.activeAccountId;
    }
    return this.props.accounts[0].id;
  }

  render() {
    const projects = this.props.projects.map(project => {
      return {...project, active: project.id === this.renderedActiveProjectId()}
    });
    const accounts = this.props.accounts.map(account => {
      return {...account, active: account.id === this.renderedActiveAccountId()}
    });

    return (
      <ProjectAccountSwitcherAdapter 
        open={this.state.open} 
        projectTitle={this.props.projectTitle}
        accountTitle={this.props.accountTitle}
        {...this.flyoutProps()}
        {...this.activeProps()}
      >
        {accounts.map((a, i) => {
          if( i === 0) {
            return <Account onClick={this.handleAccountClick} key={a.id} {...a}/>
          } else {
            return <Account onClick={this.handleAccountClick} key={a.id} {...a}/>
          }
        })}
            
        {projects.map((p, i) => {
          if(i === 0) {
            return <Project onClick={this.handleProjectClick} key={p.id} {...p}/>
          } else {
            return <Project onClick={this.handleProjectClick} key={p.id} {...p} />
          }
        })}  
      </ProjectAccountSwitcherAdapter>
    );
  }
}

export default ProjectAccountSwitcher;
