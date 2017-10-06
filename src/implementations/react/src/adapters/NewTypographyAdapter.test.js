import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import TypographyAdapter from './NewTypographyAdapter';

describe('TypographyAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      mount(
        <TypographyAdapter
          higInstance={mockInstance}
          text="Foo"
          type="primary"
        />
      );

      // Not implementing applyTypographyToElement
      mockInstance.applyTypographyToElement(document.createElement('div'));
    }).toImplementHIGInterfaceOf(HIG.Typography);
  });
});
