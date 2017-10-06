import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import GridItemAdapter from './NewGridItemAdapter';

describe('GridItemAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <GridItemAdapter
          higInstance={mockInstance}
          fraction="one-quarter"
        >
        </GridItemAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.Grid._partials.GridItem);
  });
});