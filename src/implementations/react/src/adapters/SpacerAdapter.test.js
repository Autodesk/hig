import {mount} from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import Slot from '../elements/components/GlobalNav/Slot';
import Spacer from './SpacerAdapter'
import SharedExamples from '../elements/components/GlobalNav/SharedExamples'

const Context = props => {
  return (
    <Spacer
      type={props.type}
      width={props.width}
      inset={props.inset}
    />
  );
};

function setupReactContext(props) {
  const reactContainer = document.createElement("div");
  const reactWrapper = mount(<Context {...props}/>,
  {
    attachTo: reactContainer
  });
  return {reactWrapper, reactContainer}
}

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higSpacer = new HIG.Spacer({...props});
  higSpacer.mount(higContainer);

  return {higContainer, higItem: higSpacer}
}

describe("Spacer", () => {
  it('renders the basic spacer', () => {
    const props = {};
    const {reactWrapper, reactContainer} = setupReactContext(props);
    const {higContainer, higItem} = createHigContext(props);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(higContainer.firstElementChild.outerHTML);
  });

  it('renders some non defaults', () => {
    const props = {
      type: 'stack', width: 'none', inset: 'xxl'
    };

    const {reactWrapper, reactContainer} = setupReactContext(props);
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  describe('setting and updating props', () => {
    const shex = new SharedExamples(Context, createHigContext);

    const configSets = [{
      key: 'type', sampleValue: 'inline', updateValue: 'stack', mutator: 'setType'
    }, {
      key: 'width', sampleValue: 'xs', updateValue: 'xl', mutator: 'setWidth'
    }, {
      key: 'inset', sampleValue: 'xl', updateValue: 'none', mutator: 'setInset'
    }];

    configSets.forEach(function(config) {

      it(`can set props for ${config.key}`, () => {
        shex.verifyPropsSet(config);
      });

      it(`can update props for ${config.key}`, () => {
        shex.verifyPropsUpdate(config);
      });
    });
  });
});