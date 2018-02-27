import React, { Component } from "react";
import * as PropTypes from "prop-types";

import { filter, group, mergeState, getModuleState } from "./model";

export default function WithState(WrappedComponent) {
  class SideNavWithState extends Component {
    static propTypes = {
      links: PropTypes.arrayOf(PropTypes.object),
      modules: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          minimized: PropTypes.bool
        })
      ),
      onModuleChange: PropTypes.func.isRequired,
      submodules: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })
      ),
      activeModuleId: PropTypes.string
    };

    static defaultProps = {
      activeModuleId: null,
      query: "",
      modules: [],
      submodules: [],
      links: []
    };

    constructor(props) {
      super(props);

      this.state = {
        query: "",
        activeModuleId: this.props.activeModuleId,
        moduleStates: this.initialModuleStates()
      };
    }

    setQuery = event => {
      this.setState({ query: event.target.value || "" });
    };

    setActiveModuleId = id => {
      this.setState({ activeModuleId: id });

      if (this.props.onModuleChange) {
        this.props.onModuleChange(id);
      }
    };

    _submodulesByModuleId = () =>
      this.props.submodules.reduce((result, submodule) => {
        const key = submodule.moduleId;

        if (result[key]) {
          result[key].push(submodule);
        } else {
          result[key] = [submodule]; // eslint-disable-line no-param-reassign
        }
        return result;
      }, {});

    initialModuleStates = () => {
      const moduleStates = {};
      const groupedSubmodules = this._submodulesByModuleId();
      Object.keys(groupedSubmodules).forEach(moduleId => {
        const isLargeModule = groupedSubmodules[moduleId].length > 5;
        const isInactiveModule = moduleId !== this.props.activeModuleId;

        const moduleProps = this.props.modules.find(
          module => module.id === moduleId
        );

        const initialModuleState =
          moduleProps && typeof moduleProps.minimized !== "undefined"
            ? moduleProps.minimized
            : isLargeModule && isInactiveModule;

        moduleStates[moduleId] = {
          minimized: initialModuleState
        };
      });

      return moduleStates;
    };

    toggleModuleMinimized = id => {
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
    };

    handleModuleClick = id => {
      this.toggleModuleMinimized(id);
      this.setActiveModuleId(id);

      if (this.props.onModuleClick) {
        this.props.onModuleClick(id);
      }
    };

    handleSubmoduleClick = id => {
      this.setActiveModuleId(id);
      if (this.props.onSubmoduleClick) {
        this.props.onSubmoduleClick(id);
      }
    };

    renderedQuery() {
      return this.props.query ? this.props.query : this.state.query;
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
          onSubmoduleClick={this.handleSubmoduleClick}
          disableCollapse={modules.length <= 5 || query.length > 0}
          searchable={this.props.searchable}
        />
      );
    }
  }

  SideNavWithState.__docgenInfo = {
    props: {
      activeModuleId: {
        description: "id of the active module or submodule"
      },
      links: {
        description:
          "An array of props for building links on the bottom of the side nav"
      },
      modules: {
        description: "An array of props for building modules"
      },
      onModuleChange: {
        description:
          "A funciton that will be called when the user activates a module or submodule"
      },
      onModuleClick: {
        description:
          "A funciton that will be called when the user clicks on a module"
      },
      onSubmoduleClick: {
        description:
          "A funciton that will be called when the user clicks on a submodule"
      },
      submodules: {
        description: "An array of props for building submodules"
      }
    }
  };

  return SideNavWithState;
}
