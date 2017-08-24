
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNavAdapter from '../GlobalNavAdapter';
import TopNavAdapter from './TopNavAdapter';
import ProjectAccountSwitcherAdapter from './ProjectAccountSwitcherAdapter';
import ProjectAdapter from './ProjectAdapter';

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
          <ProjectAdapter {...props} />
        </ProjectAccountSwitcherAdapter>
      </TopNavAdapter>
    </GlobalNavAdapter>
  );
};

function createOrionProject(props) {
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

  const project = new projectAccountSwitcher.partials.Project(props);
  projectAccountSwitcher.addProject(project);

  return { higContainer, higItem: project };
}

describe('<Project>', () => {
  it('renders an Project', () => {
    const defaults = {};
    const { higContainer, higItem } = createHigContext(defaults);
    const { reactContainer, reactWrapper } = createOrionProject(defaults);

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('setting and updating props', () => {
    const defaults = {
      image: 'oldImage.jpg',
      label: 'oldTestLabel'
    };

    const nextProps = {
      image: 'newOrionImage.jpg',
      label: 'newOrionLabel',
      active: true
    };

    const { higContainer, higItem } = createHigContext(defaults);
    const { reactContainer, reactWrapper } = createOrionProject(defaults);

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
    const { reactWrapper, reactContainer } = createOrionProject({});
    console.warn = warnSpy;

    reactWrapper.setProps({ realProp: false });

    expect(warnSpy).toHaveBeenCalled();
  });

  ['onClick'].forEach(eventName => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { reactWrapper, reactContainer } = createOrionProject({});
      console.warn = warnSpy;

      reactWrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });
});
