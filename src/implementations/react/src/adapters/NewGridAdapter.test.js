import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import GridAdapter from './NewGridAdapter';
import GridItemAdapter from './NewGridItemAdapter';

describe('GridAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <GridAdapter
          higInstance={mockInstance}
        >
          <GridItemAdapter />
        </GridAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.Grid);
  });
});
