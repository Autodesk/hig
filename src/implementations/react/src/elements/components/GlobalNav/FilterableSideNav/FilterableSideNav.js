import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import SideNav from '../../../../adapters/GlobalNav/SideNav/SideNavAdapter';
import Submodule from './Submodule';
import Group from '../../../../adapters/GlobalNav/SideNav/GroupAdapter';
import Module from './Module';
import ModuleCollapse from './ModuleCollapse';
import Link from '../../../../adapters/GlobalNav/SideNav/LinkAdapter';
import Search from '../../../../adapters/GlobalNav/SideNav/SearchAdapter';
import WithState from './WithState';

class FilterableSideNav extends Component {
  static propTypes = {
    copyright: PropTypes.string,
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        modules: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            minimized: PropTypes.bool,
            submodules: PropTypes.arrayOf(PropTypes.shape({
              id: PropTypes.string.isRequired
            }))
          })
        )
      })
    ),
    headerLabel: PropTypes.string,
    headerLink: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
    onHeaderClick: PropTypes.func,
    onSuperHeaderClick: PropTypes.func,
    query: PropTypes.string,
    onModuleClick: PropTypes.func.isRequired,
    onSubmoduleClick: PropTypes.func.isRequired,
    superHeaderLabel: PropTypes.string,
    superHeaderLink: PropTypes.string
  };

  static defaultProps = {
    copyright: null,
    groups: [],
    headerLabel: null,
    headerLink: null,
    links: [],
    onHeaderClick: null,
    onSuperHeaderClick: null,
    query: '',
    superHeaderLabel: null,
    superHeaderLink: null
  }

  render() {
    const sideNavProps = {
      headerLabel: this.props.headerLabel,
      headerLink: this.props.headerLink,
      onHeaderClick: this.props.onHeaderClick,
      superHeaderLabel: this.props.superHeaderLabel,
      superHeaderLink: this.props.superHeaderLink,
      onSuperHeaderClick: this.props.onSuperHeaderClick
    };

    return (
      <SideNav {...sideNavProps}>
        {this.props.groups.map((group, i) => (
          <Group key={group.modules[0].id}>
            {group.modules.map(module => {
              const showSubmodules = this.props.query.length > 0 || !module.minimized;
              const hideCollapse =  this.props.query.length > 0 || module.submodules.length === 0;
              return (
                <Module
                  onClick={this.props.onModuleClick}
                  key={module.id}
                  {...module}
                >
                  <ModuleCollapse
                    minimized={module.minimized}
                    onClick={this.props.toggleModuleMinimized}
                    hidden={hideCollapse}
                  />
                  {showSubmodules
                    ? module.submodules.map(submodule => (
                      <Submodule
                        onClick={this.props.onSubmoduleClick}
                        key={submodule.id}
                        {...submodule}
                      />
                    ))
                    : null}
                </Module>
              );
            })}
          </Group>
        ))}
        {this.props.links.map(link => <Link {...link} key={link.title} />)}
        <Search onInput={this.props.setQuery} />
      </SideNav>
    );
  }
}

export default WithState(FilterableSideNav);
