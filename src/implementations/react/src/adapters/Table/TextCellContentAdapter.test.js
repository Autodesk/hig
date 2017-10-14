import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import TextCellContentAdapter from './TextCellContentAdapter';

describe('TextCellAdapter', () => {
  it('implements the text cell interface', () => {
    expect((mockInstance) => {
      mount(<TextCellContentAdapter
        higInstance={mockInstance}
        text="test"
        detail="test detail"
        alignment="left"
      />);
    }).toImplementHIGInterfaceOf(HIG.TextCellContent);
  });
});
