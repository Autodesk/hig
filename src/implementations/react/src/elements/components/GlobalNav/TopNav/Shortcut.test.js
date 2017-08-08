
import { mount } from 'enzyme';
import * as HIG from 'hig.web';
import React from 'react';

import GlobalNav from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNav from './TopNav';
import Shortcut from './Shortcut';
import SharedExamples from './../SharedExamples';

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <Shortcut title={props.title} link={props.link} icon={props.icon} />
      </TopNav>
    </GlobalNav>
  );
};

function setupReactContext() {
  const props = { title: 'GEARS', link: '/settings', icon: 'gear' };
  const reactContainer = document.createElement('div');
  mount(<Context {...props} />, { attachTo: reactContainer });
  return { reactContainer };
}

describe('Shortcut', () => {
  describe('constructor', () => {
    it('has a good snapshot', () => {
      const { reactContainer } = setupReactContext();
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      var elems = reactContainer.getElementsByClassName(
        'hig__global-nav__top-nav__shortcut'
      );
      expect(elems.length).toEqual(1);
    });
  });
});
