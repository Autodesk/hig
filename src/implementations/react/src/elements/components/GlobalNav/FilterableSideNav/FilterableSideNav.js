import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import SideNav from '../../../../adapters/GlobalNav/SideNav/SideNavAdapter';
import withState from './state';

const LinkList = SideNav.LinkList;
const Link = SideNav.LinkList.Link;
const Search = SideNav.Search;
const SectionList = SideNav.SectionList;
const Section = SideNav.SectionList.Section;
const SectionCollapse = SideNav.SectionList.Section.SectionCollapse;
const Group = SideNav.SectionList.Section.Group;
const Module = SideNav.SectionList.Section.Group.Module;
const ModuleCollapse = SideNav.SectionList.Section.Group.Module.ModuleCollapse;
const Submodule = SideNav.SectionList.Section.Group.Module.Submodule;

class FilterableSideNav extends Component {
  handleModuleClick = (id, event) => {
    event.preventDefault();
    this.props.setActiveModule(id);
  }

  render() {
    return (
      <SideNav>
        <SectionList>
          {this.props.sections.map(section => {
            return (
              <Section
                headerLabel={section.headerLabel}
                headerName={section.headerName}
                key={section.id}
              >
                <SectionCollapse minimized={section.minimized} onClick={this.props.toggleSectionMinimized.bind(this, section.id)} />
                {section.groups.map((group, i) => {
                  return (
                    <Group key={i}>
                      {group.modules.map(module => {
                        return (
                          <Module
                            icon={module.icon}
                            contentImage={module.contentImage}
                            title={module.label}
                            active={module.active}
                            onClick={this.handleModuleClick.bind(this, module.id)}
                            key={module.id}
                          >
                            {module.submodules.length > 0
                              ? <ModuleCollapse
                                  minimized={module.minimized}
                                  onClick={this.props.toggleModuleMinimized.bind(this, module.id)}
                                />
                              : null
                            }
                            {(module.minimized ? [] : module.submodules).map(submodule => {
                              return (
                                <Submodule
                                  title={submodule.label}
                                  onClick={this.handleModuleClick.bind(this, submodule.id)}
                                  active={submodule.active}
                                  key={submodule.id}
                                />
                              );
                            })}
                          </Module>
                        );
                      })}
                    </Group>
                  );
                })}
              </Section>
            );
          })}
        </SectionList>
        <LinkList>
          {this.props.links.map((link, i) => {
            return <Link {...link} key={link.title} />;
          })}
        </LinkList>
        <Search onInput={this.props.setQuery} />
      </SideNav>
    );
  }
}

FilterableSideNav.propTypes = {
  query: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      headerLabel: PropTypes.string,
      headerName: PropTypes.string,
      minimized: PropTypes.bool,
      groups: PropTypes.arrayOf(
        PropTypes.shape({
          modules: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
              minimized: PropTypes.bool,
              submodules: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired
              }))
            })
          )
        })
      )
    })
  )
};

export default withState(FilterableSideNav);