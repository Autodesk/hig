import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import TooltipAdapter from './TooltipAdapter';

describe('TooltipAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      mount(
        <TooltipAdapter
          higInstance={mockInstance}
          open={true}
          onClickOutside={() => {}}
          content={'Tooltip content'}
          anchorPoint='top-center'
        >
          <div>Click me to see the Tooltip</div>
        </TooltipAdapter>
      );
      mount(
        <TooltipAdapter
          higInstance={mockInstance}
          open={false}
        />
      );
    }).toImplementHIGInterfaceOf(HIG.Tooltip);
  });
});
