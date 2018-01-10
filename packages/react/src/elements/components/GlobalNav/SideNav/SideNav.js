import React, { Component } from "react";
import PropTypes from "prop-types";
import SideNavAdapter from "../../../../adapters/GlobalNav/SideNav/SideNavAdapter";
import SideNavFullAdapter from "../../../../adapters/GlobalNav/SideNav/SideNavFullAdapter";
import Submodule from "./Submodule";
import Group from "../../../../adapters/GlobalNav/SideNav/GroupAdapter";
import Module from "./Module";
import ModuleCollapse from "./ModuleCollapse";
import Link from "../../../../adapters/GlobalNav/SideNav/LinkAdapter";
import Search from "./Search";
import WithState from "./WithState";

class SideNav extends Component {
  static propTypes = {
    copyright: PropTypes.string,
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        modules: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            minimized: PropTypes.bool,
            submodules: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string.isRequired
              })
            )
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
    onModuleClick: PropTypes.func,
    onSubmoduleClick: PropTypes.func,
    searchable: PropTypes.bool,
    slot: PropTypes.node,
    superHeaderLabel: PropTypes.string,
    superHeaderLink: PropTypes.string
  };

  static defaultProps = {
    copyright: null,
    groups: [],
    headerLabel: null,
    headerLink: null,
    links: [],
    onModuleClick: null,
    onSubmoduleClick: null,
    onHeaderClick: null,
    onSuperHeaderClick: null,
    query: "",
    superHeaderLabel: null,
    superHeaderLink: null
  };

  render() {
    const sideNavProps = {
      copyright: this.props.copyright,
      headerLabel: this.props.headerLabel,
      headerLink: this.props.headerLink,
      onHeaderClick: this.props.onHeaderClick,
      onModuleClick: this.props.onModuleClick,
      onSubmoduleClick: this.props.onSubmoduleClick,
      onSuperHeaderClick: this.props.onSuperHeaderClick,
      superHeaderLabel: this.props.superHeaderLabel,
      superHeaderLink: this.props.superHeaderLink,
      higTheme: this.props.higTheme
    };

    return (
      <SideNavAdapter>
        <SideNavFullAdapter {...sideNavProps}>
          {this.props.groups.map(group => (
            <Group key={group.modules[0].id}>
              {group.modules.map(module => {
                const showSubmodules =
                  this.props.disableCollapse || !module.minimized;
                const hideCollapse =
                  this.props.disableCollapse || module.submodules.length === 0;
                return (
                  <Module
                    onClick={this.props.onModuleClick}
                    key={module.id}
                    {...module}
                  >
                    <ModuleCollapse
                      id={module.id}
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
          {this.props.slot ? this.props.slot : null}
          {this.props.links.map(link => <Link {...link} key={link.title} />)}
          {this.props.searchable ? (
            <Search onInput={this.props.setQuery} value={this.props.query} />
          ) : null}
        </SideNavFullAdapter>
      </SideNavAdapter>
    );
  }
}

export default WithState(SideNav);
