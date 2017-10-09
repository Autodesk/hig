import React from 'react'
import { mount } from 'enzyme'

import * as HIG from 'hig-vanilla'
import TextHeadCellAdapter from './TextHeadCellAdapter'

describe('TextHeadCellAdapter', () => {
  it('implements the text cell interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <TextHeadCellAdapter 
          higInstance={mockInstance}
          text="test"
          alignment="left"
          width="30px"
        />    
      ) 
    }).toImplementHIGInterfaceOf(HIG.Table._partials.TableHead._partials.TextHeadCell)
  })  
})