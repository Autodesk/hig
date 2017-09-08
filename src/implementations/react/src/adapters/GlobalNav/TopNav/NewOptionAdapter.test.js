import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import OptionAdapter from './NewOptionAdapter';

describe('Help OptionAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <OptionAdapter
          higInstance={mockInstance}
          onClick={() => {}}
          name="Autodesk"
          link="http://autodesk.com"
        />
      )
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.TopNav._partials.Help._partials.Option);
  });
});
