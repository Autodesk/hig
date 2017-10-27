import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../state/actions';
import fixtures from '../fixtures';
import StateReport from '../components/StateReport';

import { GlobalNav } from 'hig-react';

class App extends Component {
  render() {
    const globalNavProps = {
      sideNavOpenByDefault: true,
      modules: fixtures.modules,
      submodules: fixtures.submodules,
      onModuleChange: this.props.changeModule,
      activeModuleId: this.props.activeModuleId,
      showSubNav: true,
      sideNav: {
        superHeaderLabel: 'AutoDesk HIG',
        headerLabel: 'Redux Example App',
      }
    };

    return (
      <GlobalNav {...globalNavProps}>
        <StateReport
          activeModuleId={this.props.activeModuleId}
          onModuleChange={this.props.changeModule}
        />
      </GlobalNav>
    );
  }
}

App.propTypes = {
  activeModuleId: PropTypes.string.isRequired,
  changeModule: PropTypes.func.isRequired
}

const mapStateToProps = (state={}) => {
  return {
    activeModuleId: state.activeModuleId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);