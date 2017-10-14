import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import ShortcutAdapter from './ShortcutAdapter';

describe('ShortcutAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      mount(<ShortcutAdapter
        higInstance={mockInstance}
        onClick={() => {}}
        title="Foo"
        link="http://autodesk.com"
        icon="settings"
      />);
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.TopNav._partials.Shortcut);
  });
});
