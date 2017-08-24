import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GlobalNavAdapter from '../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNavAdapter from '../../../adapters/GlobalNav/TopNav/TopNavAdapter';
import SideNav from './SideNav';
import Slot from './Slot';

class GlobalNav extends Component {
  static propTypes = {
    sideNav: PropTypes.shape({
      copyright: PropTypes.string,
      headerLabel: PropTypes.string,
      headerLink: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.object),
      onHeaderClick: PropTypes.func,
      onSuperHeaderClick: PropTypes.func,
      superHeaderLabel: PropTypes.string,
      superHeaderLink: PropTypes.string,
    }),
    onModuleChange: PropTypes.func.isRequired,
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }),
    ),
    submodules: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }))
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleSideNavOpen = () => {
    this.setState({ sideNavOpen: !this.state.sideNavOpen });
  }

  render() {
    return (
      <GlobalNavAdapter sideNavOpen={this.state.sideNavOpen}>
        <TopNavAdapter onHamburgerClick={this.toggleSideNavOpen}/>
        <SideNav
          onModuleChange={this.props.onModuleChange}
          modules={this.props.modules}
          submodules={this.props.submodules}
          {...this.props.sideNav}
        />
        <Slot>{this.props.children}</Slot>
      </GlobalNavAdapter>
    )
  }
}

export default GlobalNav;