import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import DropdownAdapter from './NewDropdownAdapter';
import OptionAdapter from './NewOptionAdapter';

describe('DropdownAdapter', () => {
  it('implements the hig interface', () => {
    const mockOptionInterface = { setLabel: () => {} };
    expect(mockInstance => {
      mount(
        <DropdownAdapter
          higInstance={mockInstance}
          label="Favorite word"
          instructions="Instructions"
          placeholder="Placeholder"
          open={true}
          disabled={false}
          required="You have to pick something"
          selectedOptionLabel="Foo"
          onBlur={() => {}}
          onClickOutside={() => {}}
          onFocus={() => {}}
          onKeypress={() => {}}
          onTargetClick={() => {}}
        >
          <OptionAdapter value="123" />
        </DropdownAdapter>
      );
      mockInstance.close();
      mockInstance.disable();
      mockInstance.noLongerRequired();
    }).toImplementHIGInterfaceOf(HIG.Dropdown);
  });
});