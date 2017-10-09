import React from 'react';
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import CheckboxAdapter from './NewCheckboxAdapter';

describe('CheckboxAdapter', () => {
  it('implements the hig interface', () => {
    expect(spiedInstance => {
      mount(
        <CheckboxAdapter
          higInstance={spiedInstance}
          value="Foo"
          label="Favorite word"
          name="favorite-word"
          checked={true}
          disabled={true}
          required="You really have to fill this out"
          onChange={() => {}}
          onClearButtonClick={() => {}}
          onFocus={() => {}}
          onHover={() => {}}
        />
      )
      mount(
        <CheckboxAdapter
          higInstance={spiedInstance}
          disabled={false}
          required=""
          checked={false}
        />
      )
    }).toImplementHIGInterfaceOf(HIG.Checkbox);
  });
});
