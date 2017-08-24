import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNavAdapter from '../GlobalNavAdapter';
import SubNavAdapter from './SubNavAdapter';
import TabsAdapter from './TabsAdapter';
import TabAdapter from './TabAdapter';

const Context = props => {
  return (
    <GlobalNavAdapter>
      <SubNavAdapter
        moduleIndicatorName={props.moduleIndicatorName}
        moduleIndicatorIcon={props.moduleIndicatorIcon}
      >
        {props.Tabs}
      </SubNavAdapter>
    </GlobalNavAdapter>
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
        <TabsAdapter defaultSelectedTabId={1}>
          <TabAdapter label="Things" key={1} id={1} />
        </TabsAdapter>
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
