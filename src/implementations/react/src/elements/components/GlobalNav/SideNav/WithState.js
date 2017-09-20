import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import { filter, group, mergeState, getModuleState } from './model';

export default function WithState(WrappedComponent) {
  class SideNavWithState extends Component {
    static propTypes = {
      links: PropTypes.arrayOf(PropTypes.object),
      modules: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })
      ),
      onModuleChange: PropTypes.func.isRequired,
      submodules: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })),
      activeModuleId: PropTypes.string
    }

    constructor(props) {
      super(props);

      this.state = {
        query: '',
        activeModuleId: '',
        moduleStates: {}
      }
    }

    static defaultProps = {
      activeModuleId: null,
      query: '',
      modules: [],
      submodules: [],
      links: []
    }

    setQuery = (event) => {
      this.setState({ query: event.target.value || '' });
    }

    setActiveModuleId = (id) => {
      this.setState({ activeModuleId: id });

      if(this.props.onModuleChange) {
        this.props.onModuleChange(id);
      }
    }

    toggleModuleMinimized = (id) => {
      const moduleState = getModuleState(this.state.moduleStates, id);

      this.setState({
        moduleStates: {
          ...this.state.moduleStates,
          [id]: {
            ...moduleState,
            minimized: !moduleState.minimized
          }
        }
      });
    }

    handleModuleClick = (id) => {
      const submodules = this.props.submodules.filter(s => s.moduleId === id);

      if (submodules.length > 0) {
        this.toggleModuleMinimized(id);
        this.setActiveModuleId(submodules[0].id);
      } else {
        this.setActiveModuleId(id);
      }
    }

    renderedQuery() {
      return this.props.query
        ? this.props.query
        : this.state.query;
    }

    render() {
      const query = this.renderedQuery();
      const { modules, submodules, ...otherProps } = this.props;
      const filteredProps = filter(this.props, query);
      const filteredPropsWithState = mergeState(filteredProps, this.state);
      const groupedProps = group(filteredPropsWithState);

      return (
        <WrappedComponent
          {...otherProps}
          groups={groupedProps}
          query={query}
          setQuery={this.setQuery}
          setActiveModuleId={this.setActiveModuleId}
          toggleModuleMinimized={this.toggleModuleMinimized}
          onModuleClick={this.handleModuleClick}
          onSubmoduleClick={this.setActiveModuleId}
          disableCollapse={modules.length <= 5 || query.length > 0}
          searchable={this.props.searchable}
        />
      );
    }
  }

  WithState.__docgenInfo = {
    props: {
      links: {
        description: 'An array of props for building links on the bottom of the side nav'
      },
      modules: {
        description: 'An array of props for building modules'
      },
      onModuleChange: {
        description: 'A funciton that will be called when the user activates a module or submodule'
      },
      submodules: {
        description: 'An array of props for building submodules'
      }
    }
  };

  return SideNavWithState;
}
