import React from 'react'
import {mount} from 'enzyme'

import * as HIG from 'hig-vanilla'

import TableAdapter from './TableAdapter';
import TableHeadAdapter from './TableHeadAdapter'
import TableRowAdapter from './TableRowAdapter'

describe('TableAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <TableAdapter
          higInstance={mockInstance}
          selectable={true}
          density={"standard"}
        >
          <TableHeadAdapter />
          <TableRowAdapter />
        </TableAdapter>
      );

    }).toImplementHIGInterfaceOf(HIG.Table);
  });
});
