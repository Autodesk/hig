import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import FlyoutAdapter from './FlyoutAdapter';

describe('FlyoutAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      mount(<FlyoutAdapter
        higInstance={mockInstance}
        open
        onClickOutside={() => {}}
        content={<h1>Flyout content</h1>}
      >
        <div>Click me to see the flyout</div>
      </FlyoutAdapter>);
      mount(<FlyoutAdapter
        higInstance={mockInstance}
        open={false}
      />);
    }).toImplementHIGInterfaceOf(HIG.Flyout);
  });
});
