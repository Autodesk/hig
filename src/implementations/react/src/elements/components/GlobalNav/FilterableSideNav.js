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
      activeModule: '',
      moduleStates: {},
      sectionStates: {}
    }
  }

  static propTypes = {
    query: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
    onModuleChange: PropTypes.func.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        headerLabel: PropTypes.string,
        headerName: PropTypes.string,
        groups: PropTypes.arrayOf(
          PropTypes.shape({
            modules: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
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

  static defaultProps = {
    query: '',
    sections: [],
    links: []
  }

  setQuery = (event) => {
    this.setState({ query: event.target.value });
  }

  moduleKey(section, module, submodule = { label: '' }) {
    return `${section.headerLabel}-${module.label}-${submodule.label}`;
  }

  moduleState(key) {
      const state = {
      ...this.state.moduleStates[key],
      active: this.state.activeModule === key,
      key
    };

    if (state.minimized === undefined) {
      state.minimized = true;
    }

    return state;
  }

  sectionModules(section) {

  }

  toggleModuleMinimized(key) {
    const moduleState = this.moduleState(key);

    this.setState({
      moduleStates: {
        ...this.state.moduleStates,
        [key]: {
          ...moduleState,
          minimized: !moduleState.minimized
        }
      }
    });
  }

  setActiveModule(key, event) {
    event.preventDefault();
    this.setState({ activeModule: key });
  }

  sectionMinimized(section) {
    return section
      .groups
      .reduce((acc, g) => { return acc.concat(...g.modules) }, [])
      .every(module => this.moduleState(module.id).minimized);
  }

  toggleSectionMinimized(section) {
    this.setState({ moduleStates: {
      ...this.state.moduleStates,
      ...section.modules.reduce((acc, module) => {
        const key = this.moduleKey(section, module);
        const state = this.moduleState(key);

        return {
          ...acc,
          [key]: {...state, minimized: !this.sectionMinimized(section)}
        }
      }, {})
    }})
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
                <SectionCollapse minimized={this.sectionMinimized(section)} onClick={this.toggleSectionMinimized.bind(this, section.id)} />
                {section.groups.map((group, i) => {
                  return (
                    <Group key={i}>
                      {group.modules.map(module => {
                        const key = this.moduleKey(section, module);
                        const moduleState = this.moduleState(key);
                        const submodules = moduleState.minimized ? [] : module.submodules;

                        return (
                          <Module
                            icon={module.icon}
                            contentImage={module.contentImage}
                            title={module.label}
                            active={moduleState.active}
                            onClick={this.setActiveModule.bind(this, key)}
                            key={key}
                          >
                            {module.submodules.length > 0
                              ? <ModuleCollapse
                                  minimized={moduleState.minimized}
                                  onClick={this.toggleModuleMinimized.bind(this, key)}
                                />
                              : null
                            }
                            {submodules.map(submodule => {
                              const key = this.moduleKey(section, module, submodule);
                              const state = this.moduleState(key);

                              return (
                                <Submodule
                                  title={submodule.label}
                                  onClick={this.setActiveModule.bind(this, key)}
                                  active={state.active}
                                  key={key}
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