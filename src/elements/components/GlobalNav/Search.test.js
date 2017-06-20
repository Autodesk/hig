import { mount } from 'enzyme';
import * as HIG from 'hig.web';
import React from 'react';

import GlobalNav from './GlobalNav';
import SideNav from './SideNav';
import Search from './Search'
import Section from './Section';
import SectionList from './SectionList';
import Group from './Group';
import Module from './Module';
import Submodule from './Submodule';

import SharedExamples from './SharedExamples';


const Context = props => {
  return (
    <GlobalNav>
      <SideNav>
        <Search placeholder={props.placeholder}/> 
        <SectionList>
          <Section>
            <Group>
              <Module tile={props.moduleTitle}>
                <Submodule title={props.submoduleTitle}/>
              </Module>  
            </Group>
          </Section>  
        </SectionList>
      </SideNav>  
    </GlobalNav>  
  )
}

function setUpSearch(){
  const defaults = {
      placeholder: 'Search for something',
      submoduleTitle: "Document New",
      moduleTitle: "Docoument Workflow"
  };

  const reactContainer = document.createElement('div');
  const wrapper = mount(<Context {... defaults} />, {attachTo: reactContainer} );
  return { wrapper, reactContainer };
}

describe('<Search>', () => {
  it('will is rendered as a child of Side Nav', () => {
    const { reactContainer } = setUpSearch();

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });
});
