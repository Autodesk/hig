import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import ButtonAdapter from './NewButtonAdapter';

describe('ButtonAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <ButtonAdapter
          higInstance={mockInstance}
          disabled={true}
          title="Foo"
          style="secondary"
          size="large"
          icon="settings"
          link="http://autodesk.com"
          target="_blank"
          type="secondary"
          width="shrink"
          onBlur={() => {}}
          onClick={() => {}}
          onFocus={() => {}}
          onHover={() => {}}
        />
      );
      mockInstance.enable();
    }).toImplementHIGInterfaceOf(HIG.Button);
  });
});
