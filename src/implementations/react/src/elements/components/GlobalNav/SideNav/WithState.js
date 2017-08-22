import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import { filter, group, mergeState, getModuleState } from './model';

export default function withState(WrappedComponent) {
  class SideNavWithState extends Component {
    static propTypes = {
      links: PropTypes.arrayOf(PropTypes.object),
      query: PropTypes.string,
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
      this.setState({ query: event.target.value });
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

    renderedQuery() {
      if (this.props.query === undefined) {
        return this.props.query;
      }
      return this.state.query;
    }

    render() {
      const { modules, submodules, query, ...otherProps } = this.props;
      const renderedQuery = this.renderedQuery();
      const filteredProps = filter({ modules, submodules }, renderedQuery);
      const filteredPropsWithState = mergeState(filteredProps, this.state);
      const groupedProps = group(filteredPropsWithState);

      return (
        <WrappedComponent
          groups={groupedProps}
          query={renderedQuery}
          setQuery={this.setQuery}
          setActiveModule={this.setActiveModule}
          toggleModuleMinimized={this.toggleModuleMinimized}
          onModuleClick={this.handleModuleClick}
          onSubmoduleClick={this.setActiveModule}
          {...otherProps}
        />
      );
    }
  }

  return SideNavWithState;
}
