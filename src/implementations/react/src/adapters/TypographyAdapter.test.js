import {mount} from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import {default as Typography} from './TypographyAdapter';

const Context = props => {
  return (
    <Typography type={props.type} text={props.text}/>
  );
};

function setupReactContext(props) {
  const reactContainer = document.createElement("div");
  const reactWrapper = mount(<Context {...props}/>, {
                                                      attachTo: reactContainer
                                                    });
  return {reactWrapper, reactContainer}
}

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higSpacer = new HIG.Typography({...props});
  higSpacer.mount(higContainer);

  return {higContainer, higItem: higSpacer}
}

describe("Typography Adapter", () => {
  it('renders a basic typography adapter', () => {
    const props = {type: 'h1', text: "Come at me, bro!"}
    const {reactWrapper, reactContainer} = setupReactContext(props);
    const {higContainer, higItem} = createHigContext(props);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(higContainer.firstElementChild.outerHTML);
  });

  describe('can update props', () => {
    const props = {type: 'h1', text: "Come at me, bro!"};

    const { higContainer, higItem } = createHigContext(props);
    const {reactWrapper, reactContainer} = setupReactContext(props);

    const newProps = {type: 'h3', text: 'Calm down, bro!'};


    //Update hig-vanilla instance
    higItem.setType(newProps.type);
    higItem.setText(newProps.text);

    //Update React Instance
    reactWrapper.setProps(newProps);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    //Check them against each other
    expect(reactContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );

  });
});