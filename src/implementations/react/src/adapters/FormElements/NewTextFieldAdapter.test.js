import React from 'react';
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import TextFieldAdapter from './NewTextFieldAdapter';

describe('TextFieldAdapter', () => {
  it('implements the hig interface', () => {
    expect(spiedInstance => {
      mount(
        <TextFieldAdapter
          higInstance={spiedInstance}
          value="Foo"
          instructions="Type in your favorite word"
          placeholder="Fizz"
          label="Favorite word"
          name="favorite-word"
          icon="settings"
          disabled={true}
          required="You really have to fill this out"
          showClearButton={true}
          onBlur={() => {}}
          onChange={() => {}}
          onClearButtonClick={() => {}}
          onFocus={() => {}}
          onInput={() => {}}
        />
      )
      mount(
        <TextFieldAdapter
          higInstance={spiedInstance}
          disabled={false}
          showClearButton={false}
          required=""
        />
      )
    }).toImplementHIGInterfaceOf(HIG.TextField);
  });
});
