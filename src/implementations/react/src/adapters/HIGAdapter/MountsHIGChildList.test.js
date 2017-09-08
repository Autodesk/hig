import React from 'react';
import { mount } from "enzyme";
import { MountsHIGChildList } from './index';

describe('MountsHIGChildList', () => {
  class VanillaParent {
    addThing = jest.fn()
  }
  function ChildComponent(props) {
    return <h1>{props.id}</h1>
  }

  function context(props, ids) {
    return (
      <MountsHIGChildList {...props} >
        {ids.map(id => <ChildComponent key={id} id={id} />)}
      </MountsHIGChildList>
    );
  }

  describe('with a list of children', () => {
    it('assigns index to children', () => {
      const higInstance = new VanillaParent();
      const props = {
        higInstance,
        mounter: 'addThing',
        mounted: true
      }
      const wrapper = mount(context(props, ['1', '2', '3']));

      expect(wrapper.find(ChildComponent).first()).toHaveProp('index');
    });
  });

  it('provides the higInstance via context as "higParent"', () => {
    const higInstance = new VanillaParent();
    const wrapper = mount(
      <MountsHIGChildList higInstance={higInstance} mounted={true}>
        <ChildComponent />
      </MountsHIGChildList>
    );

    const context = wrapper.instance().getChildContext();
    expect(context.higParent).toEqual(higInstance);
  });

  describe('with a null child', () => {
    it('does not blow up', () => {
      expect(() => {
          const higInstance = new VanillaParent();
          const wrapper = mount(
            <MountsHIGChildList higInstance={higInstance} mounted={true}>
              <ChildComponent />
              {null}
              <ChildComponent />
            </MountsHIGChildList>
        );
      }).not.toThrow();
    });
  })
});
