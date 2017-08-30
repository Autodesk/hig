import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';
import Flyout from '../elements/components/Flyout';
import {ButtonAdapter} from './ButtonAdapter';

describe('FlyoutAdapter', () => {


  // function createOrionComponent(props = {}) {
  //   const orionContainer = document.createElement('div');
  //   const orionWrapper = mount(<Flyout {...props} />,
  //     { attachTo: orionContainer });

  //   return { orionWrapper, orionContainer };
  // }

  const Context = props => {
    return (
      <Flyout
        anchorPoint={props.anchorPoint}
        open={this.props.open}
        onClickOutside={this.props.onClickOutside}
        content={props.conten}
      >
        <Button title={props.buttonTitle}   />
      </Flyout>
    )
  }

  function createHigComponent(initialProps = {}) {
    const higContainer = document.createElement('div');
    const flyout = new HIG.Flyout(initialProps);
    flyout.mount(higContainer);

    return { higComponent: flyout, higContainer };
  }

  it('renders', () => {
    const { higComponent, higContainer } = createHigComponent({});
    const { orionContainer, orionWrapper } = createOrionComponent({});

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders with non-default props', () => {

    const buttonProps = { "title": "Open setter flyout" };
    const higButton = new HIG.Button(buttonProps);
    const spy = jest.fn();

    const higProps = {
      anchorPoint: 'bottom-left',
      open: true,
      onClickOutside: spy,
    };

    const orionProps = {
      anchorPoint: 'bottom-left',
      open: true,
      onClickOutside: spy,
      target: new ButtonAdapter(buttonProps)
    };

    const { higComponent, higContainer } = createHigComponent(higProps);
    const { orionContainer, orionWrapper } = createOrionComponent(orionProps );

    higComponent.addTarget(higButton);
    higComponent.open();

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();
    expect(orionContainer.firstElementChild.outerHTML)
      .toEqual(higContainer.firstElementChild.outerHTML);
  });

  it('upates props correctly', () => {

  })
});

