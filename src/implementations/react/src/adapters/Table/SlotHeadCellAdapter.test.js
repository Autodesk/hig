import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import SlotHeadCellAdapter from './SlotHeadCellAdapter';

describe('SlotHeadCellAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      mount(<SlotHeadCellAdapter
        higInstance={mockInstance}
      >
        <h1>Slot content</h1>
      </SlotHeadCellAdapter>);
    }).toImplementHIGInterfaceOf(HIG.Table._partials.TableHead._partials.SlotHeadCell);
  });
});
