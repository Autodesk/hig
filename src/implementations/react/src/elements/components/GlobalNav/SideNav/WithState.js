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
      }))
    }

    constructor(props) {
      super(props);

      this.state = {
        query: '',
        activeModule: '',
        moduleStates: {}
      }
    }

    static defaultProps = {
      query: '',
      modules: [],
      submodules: [],
      links: []
    }

    setQuery = (event) => {
      this.setState({ query: event.target.value || '' });
    }

    setActiveModule = (id) => {
      this.setState({ activeModule: id });

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
      const submodulesPresent = this.props.submodules.some(s => s.moduleId === id);

      if (submodulesPresent) {
        this.toggleModuleMinimized(id);
      } else {
        this.setActiveModule(id);
      }
    }

    render() {
      const { modules, submodules, ...otherProps } = this.props;
      const filteredProps = filter({ modules, submodules }, this.state.query);
      const filteredPropsWithState = mergeState(filteredProps, this.state);
      const groupedProps = group(filteredPropsWithState);

      return (
        <WrappedComponent
          groups={groupedProps}
          query={this.state.query}
          setQuery={this.setQuery}
          setActiveModule={this.setActiveModule}
          toggleModuleMinimized={this.toggleModuleMinimized}
          onModuleClick={this.handleModuleClick}
          onSubmoduleClick={this.setActiveModule}
          disableCollapse={modules.length <= 5 || this.state.query.length > 0}
          {...otherProps}
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
