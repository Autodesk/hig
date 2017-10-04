import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import OptionAdapter from './NewOptionAdapter';

describe('OptionAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      const wrapper = mount(
        <OptionAdapter
          higInstance={mockInstance}
          label="Foo"
          selected={true}
          onClick={() => {}}
          onHover={() => {}}
          value="123"
        />
      );
      mockInstance.deselect();
    }).toImplementHIGInterfaceOf(HIG.Dropdown._partials.Option);
  });
});