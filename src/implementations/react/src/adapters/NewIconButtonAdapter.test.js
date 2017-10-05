import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import IconButtonAdapter from './NewIconButtonAdapter'

describe('IconButtonAdapter', () => {
  it('implementes hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <IconButtonAdapter 
          higInstance={mockInstance} 
          disabled={true}
          title="Test"
          link="#"
          icon='settings'
          onClick={() => {}}
          onHover={() => {}}
          onFocus={() => {}}
          onBlur={() => {}}
        />
      );

      mount(
        <IconButtonAdapter 
        higInstance={mockInstance} 
        disabled={false}
        title="Test"
        link="#"
        icon='settings'
        onClick={() => {}}
        onHover={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
      />)


      
    }).toImplementHIGInterfaceOf(HIG.IconButton)
  });
});