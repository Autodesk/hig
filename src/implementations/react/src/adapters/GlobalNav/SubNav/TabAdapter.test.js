
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNav from '../../../adapters/GlobalNav/GlobalNavAdapter';
import Tabs from './TabsAdapter';

const Context = props => {
  return (
    <GlobalNav>
      <GlobalNav.SubNav>
        <Tabs>
          <Tabs.Tab active={props.active} label={props.label} key={props.id} />
        </Tabs>
      </GlobalNav.SubNav>
    </GlobalNav>
  );
};

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higNav = new HIG.GlobalNav();
  higNav.mount(higContainer);

  const higSubNav = new higNav.partials.SubNav({});
  higNav.addSubNav(higSubNav);

  const higTabs = new higSubNav.partials.Tabs();
  higSubNav.addTabs(higTabs);

  const higTab = new higTabs.partials.Tab(props);
  higTabs.addTab(higTab);

  return { higContainer, higItem: higTab };
}

function createReactComponent(props) {
  const reactContainer = document.createElement('div');
  const wrapper = mount(<Context {...props} />, {
    attachTo: reactContainer
  });
  return { wrapper, reactContainer };
}

describe('<Tab>', () => {
  it('will render defualt tabs', () => {
    const defaults = {};
    const { wrapper, reactContainer } = createReactComponent(defaults);
    const { higContainer, higItem } = createHigContext(defaults);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('updates sets and updates props', () => {
    const initialProps = { label: 'Such Tab', key: 2 };
    const updatedProps = { label: 'Many Tab', key: 3, active: true };
    const { wrapper, reactContainer } = createReactComponent(initialProps);
    const { higContainer, higItem } = createHigContext(initialProps);

    wrapper.setProps(updatedProps);
    higItem.setLabel(updatedProps.label);
    higItem.activate();

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  ['onClick'].forEach(eventName => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { wrapper, reactContainer } = createReactComponent({});
      console.warn = warnSpy;

      wrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });
});
