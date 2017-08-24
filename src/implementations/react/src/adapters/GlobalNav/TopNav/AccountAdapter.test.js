import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNavAdapter from '../GlobalNavAdapter';
import TopNavAdapter from './TopNavAdapter';
import ProjectAccountSwitcherAdapter from './ProjectAccountSwitcherAdapter';
import AccountAdapter from './AccountAdapter';

const onItemClick = function() {
  return 'onItemClick';
};

const onClickOutside = function() {
  return 'onClickOutside';
};

const Context = props => {
  return (
    <GlobalNavAdapter>
      <TopNavAdapter>
        <ProjectAccountSwitcherAdapter>
          <AccountAdapter {...props} />
        </ProjectAccountSwitcherAdapter>
      </TopNavAdapter>
    </GlobalNavAdapter>
  );
};

function createOrionAccount(props) {
  const reactContainer = document.createElement('div');
  const reactWrapper = mount(<Context {...props} />, {
    attachTo: reactContainer
  });

  return { reactWrapper, reactContainer };
}

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higNav = new HIG.GlobalNav();
  higNav.mount(higContainer);

  const higTopNav = new higNav.partials.TopNav({});
  higNav.addTopNav(higTopNav);

  const projectAccountSwitcher = new higTopNav.partials.ProjectAccountSwitcher({
  });

  higTopNav.addProjectAccountSwitcher(projectAccountSwitcher);
  projectAccountSwitcher.hideCaret();

  const account = new projectAccountSwitcher.partials.Account(props);
  projectAccountSwitcher.addAccount(account);

  return { higContainer, higItem: account };
}

describe('<Account>', () => {
  it('renders an Account', () => {
    const defaults = {};
    const { higContainer, higItem } = createHigContext(defaults);
    const { reactWrapper, reactContainer } = createOrionAccount(defaults);

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('setting and updating props', () => {
    const defaults = {
      image: 'test.jpg',
      label: 'testLabel'
    };

    const nextProps = {
      image: 'newImage.jpg',
      label: 'newLabel',
      active: true
    };

    const { higContainer, higItem } = createHigContext(defaults);
    const { reactWrapper, reactContainer } = createOrionAccount(defaults);

    reactWrapper.setProps(nextProps);

    higItem.setImage(nextProps.image);
    higItem.setLabel(nextProps.label);
    higItem.activate();

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('warns when passed an unsupported property', () => {
    const warnSpy = jest.fn();
    const { reactWrapper, reactContainer } = createOrionAccount({});
    console.warn = warnSpy;

    reactWrapper.setProps({ realProp: false });

    expect(warnSpy).toHaveBeenCalled();
  });

  ['onClick'].forEach(eventName => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { reactWrapper, reactContainer } = createOrionAccount({});
      console.warn = warnSpy;

      reactWrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });
});
