import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideNav from '../../../adapters/GlobalNav/SideNav/SideNavAdapter';
import filterSideNavSections from './filterSideNavSections';

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
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      modules: {}
    }
  }

  static propTypes = {
    query: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        headerLabel: PropTypes.string,
        headerName: PropTypes.string,
        groups: PropTypes.arrayOf(
          PropTypes.shape({
            modules: PropTypes.arrayOf(
              PropTypes.shape({
                submodules: PropTypes.arrayOf(PropTypes.shape({
                  label: PropTypes.string
                }))
              })
            )
          })
        )
      })
    )
  };

  static defaultProps = {
    query: '',
    sections: [],
    links: []
  }

  setQuery = (event) => {
    this.setState({ query: event.target.value });
  }

  moduleState(section, module) {
    const moduleKey = `${section.headerLabel}-${module.label}`;
    return this.state.modules[moduleKey] || { minimized: true };
  }

  toggleModule(section, module) {
    const moduleKey = `${section.headerLabel}-${module.label}`;
    const moduleState = this.moduleState(section, module);

    this.setState({
      modules: {
        ...this.state.modules,
        [moduleKey]: {
          ...moduleState,
          minimized: !moduleState.minimized
        }
      }
    });
  }

  render() {
    const sections = filterSideNavSections(this.props.sections, this.props.query || this.state.query);

    return (
      <SideNav>
        <SectionList>
          {sections.map(section => {
            return (
              <Section
                headerLabel={section.headerLabel}
                headerName={section.headerName}
                key={`${section.headerLabel}-${section.headerName}`}
              >
                <SectionCollapse />
                {section.groups.map((group, i) => {
                  return (
                    <Group key={i}>
                      {group.modules.map(module => {
                        const moduleState = this.moduleState(section, module);
                        const submodules = moduleState.minimized ? [] : module.submodules;

                        return (
                          <Module
                            icon={module.icon}
                            contentImage={module.contentImage}
                            title={module.label}
                            key={module.label}
                          >
                            {module.submodules.length > 0 ? <ModuleCollapse minimized={moduleState.minimized} onClick={this.toggleModule.bind(this, section, module)} /> : null}
                            {submodules.map(submodule => {
                              return (
                                <Submodule
                                  title={submodule.label}
                                  link="#"
                                  key={submodule.label}
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
        <Search onInput={this.setQuery} />
      </SideNav>
    );
  }
}

export default FilterableSideNav;