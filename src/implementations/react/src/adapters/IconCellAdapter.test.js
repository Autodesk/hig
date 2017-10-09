import React from 'react'
import { mount } from 'enzyme'

import * as HIG from 'hig-vanilla'

import IconCellAdapter from "./IconCellAdapter"

describe('IconCellAdapter', () =>{
  it('implements hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <IconCellAdapter higInstance={mockInstance} icon="settings" />
      )
    }).toImplementHIGInterfaceOf(HIG.Table._partials.TableRow._partials.IconCell)
  })
})    