import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import SpacerAdapter from './NewSpacerAdapter';

describe('SpacerAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <SpacerAdapter
          higInstance={mockInstance}
          inset="s"
          type="stack"
          width="m"
        >
          <h1>Slot content</h1>
        </SpacerAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.Spacer);
  });
});