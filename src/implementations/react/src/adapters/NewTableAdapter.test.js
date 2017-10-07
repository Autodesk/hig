import React from 'react'
import {mount} from 'enzyme'

import * as HIG from 'hig-vanilla'

import TableAdapter from './NewTableAdapter';
import TableHeadAdapter from './NewTableHeadAdapter'
import TableRowAdapter from './NewTableRowAdapter'

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
