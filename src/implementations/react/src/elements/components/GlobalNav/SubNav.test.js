
import { mount } from 'enzyme';
import * as HIG from 'hig.web';
import React from 'react';

import GlobalNav from '../../../adapters/GlobalNav/GlobalNavAdapter';
import SubNav from './SubNav';
import Tabs from './Tabs';
import Tab from '../../../adapters/GlobalNav/SubNav/TabAdapter';

const Context = props => {
  return (
    <GlobalNav>
      <SubNav
        moduleIndicatorName={props.moduleIndicatorName}
        moduleIndicatorIcon={props.moduleIndicatorIcon}
      >
        {props.Tabs}
      </SubNav>
    </GlobalNav>
  );
};

describe('<SubNav>', () => {
  it('renders with props', () => {
    const defaultProps = {
      moduleIndicatorName: 'Documents Library',
      moduleIndicatorIcon: 'hamburger',
      Tabs: null
    };
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context {...defaultProps} />, {
      attachTo: reactContainer
    });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  it('updates props', () => {
    const defaultProps = {
      moduleIndicatorName: 'Documents Library',
      moduleIndicatorIcon: 'hamburger',
      Tabs: null
    };
    const updatedProps = {
      ...defaultProps,
      moduleIndicatorName: 'Projects Library',
      moduleIndicatorIcon: 'project-management'
    };
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context {...defaultProps} />, {
      attachTo: reactContainer
    });

    wrapper.setProps(updatedProps);
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  it('adds and removes tabs', () => {
    const defaultProps = {
      moduleIndicatorName: 'Documents Library',
      moduleIndicatorIcon: 'hamburger',
      Tabs: null
    };
    const updatedProps1 = {
      ...defaultProps,
      Tabs: (
        <Tabs defaultSelectedTabId={1}>
          <Tabs.Tab label="Things" key={1} id={1} />
        </Tabs>
      )
    };
    const updatedProps2 = { ...defaultProps, Tabs: null };
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context {...defaultProps} />, {
      attachTo: reactContainer
    });

    wrapper.setProps(updatedProps1);
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

    wrapper.setProps(updatedProps2);
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });
});
