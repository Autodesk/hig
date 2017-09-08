import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import GlobalNavAdapter from '../NewGlobalNavAdapter';
import TabsAdapter from './NewTabsAdapter';
import TabAdapter from './NewTabAdapter';

describe('TabsAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <TabsAdapter
          higInstance={mockInstance}
        >
          <TabAdapter />
        </TabsAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.SubNav._partials.Tabs);
  });
});
