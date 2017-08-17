import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import filterSections from './filterSections';

export default function withState(WrappedComponent) {
  return class FilterableNavWithState extends Component {
    constructor(props) {
      super(props);

      this.state = {
        query: '',
        activeModule: '',
        moduleStates: {}
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

    setActiveModule = (id) => {
      this.setState({ activeModule: id });

      if(this.props.onModuleChange) {
        this.props.onModuleChange(id);
      }
    }

    toggleSectionMinimized = (id) => {
      const section = this.props.sections.find(s => s.id === id);
      const updatedModules = section.groups
        .reduce((acc, group) => { return acc.concat(...group.modules) }, [])
        .reduce((acc, module) => {
          const state = this._moduleState(module.id);

          return {
            ...acc,
            [module.id]: {...state, minimized: !this._isSectionMinimized(section)}
          }
        }, {});

      this.setState({ moduleStates: {
        ...this.state.moduleStates,
        ...updatedModules
      }})
    }

    toggleModuleMinimized = (id) => {
      const _moduleState = this._moduleState(id);

      this.setState({
        moduleStates: {
          ...this.state.moduleStates,
          [id]: {
            ..._moduleState,
            minimized: !_moduleState.minimized
          }
        }
      });
    }

    _moduleKey(section, module, submodule = { label: '' }) {
      return `${section.headerLabel}-${module.label}-${submodule.label}`;
    }

    _moduleState(id) {
      const state = this.state.moduleStates[id] || {};

      if (state.minimized === undefined) {
        state.minimized = true;
      }

      return state;
    }

    _isSectionMinimized(section) {
      return section
        .groups
        .reduce((acc, g) => { return acc.concat(...g.modules) }, [])
        .every(module => this._moduleState(module.id).minimized);
    }

    _renderedQuery() {
      if (this.props.query === undefined) {
        return this.props.query;
      }
      return this.state.query;
    }

    _mergeState(sections) {
      return sections.map(section => {
        return {
          ...section,
          minimized: this._isSectionMinimized(section),
          groups: section.groups.map(group => {
            return {
              ...group,
              modules: group.modules.map(module => {
                const moduleState = this._moduleState(module.id);
                return {
                  ...module,
                  active: module.id === this.state.activeModule,
                  minimized: moduleState.minimized,
                  submodules: module.submodules.map(submodule => {
                    return {
                      ...submodule,
                      active: submodule.id === this.state.activeModule
                    }
                  })
                }
              })
            }
          })
        }
      });
    }

    render() {
      const query = this._renderedQuery();
      const sections = this._mergeState(filterSections(this.props.sections, query));

      return (
        <WrappedComponent
          query={query}
          sections={sections}
          links={this.props.links}
          setQuery={this.setQuery}
          setActiveModule={this.setActiveModule}
          toggleModuleMinimized={this.toggleModuleMinimized}
          toggleSectionMinimized={this.toggleSectionMinimized}
        />
      );
    }
  }
}
