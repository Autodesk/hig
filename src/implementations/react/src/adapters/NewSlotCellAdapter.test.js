import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import SlotCellAdapter from './NewSlotCellAdapter';

describe('SlotCellAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <SlotCellAdapter
          higInstance={mockInstance}
        >
          <h1>Slot content</h1>
        </SlotCellAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.Table._partials.TableRow._partials.SlotCell);
  });
});