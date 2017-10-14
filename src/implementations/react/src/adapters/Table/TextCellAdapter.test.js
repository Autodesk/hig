import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import TextCellAdapter from './TextCellAdapter';

describe('TextCellAdapter', () => {
  it('implements the text cell interface', () => {
    expect((mockInstance) => {
      mount(<TextCellAdapter
        higInstance={mockInstance}
        text="test"
        detail="test detail"
        alignment="left"
      />);
    }).toImplementHIGInterfaceOf(HIG.Table._partials.TableRow._partials.TextCell);
  });
});
