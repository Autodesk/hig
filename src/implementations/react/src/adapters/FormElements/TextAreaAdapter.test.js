import React from 'react';
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import TextAreaAdapter from './TextAreaAdapter';

describe('TextAreaAdapter', () => {
  it('implements the hig interface', () => {
    expect(spiedInstance => {
      mount(
        <TextAreaAdapter
          higInstance={spiedInstance}
          value="Foo"
          instructions="Type in your favorite word"
          placeholder="Fizz"
          label="Favorite word"
          name="favorite-word"
          disabled={true}
          required="You really have to fill this out"
          onBlur={() => {}}
          onChange={() => {}}
          onFocus={() => {}}
          onInput={() => {}}
        />
      )
      mount(
        <TextAreaAdapter
          higInstance={spiedInstance}
          disabled={false}
          required=""
        />
      )
    }).toImplementHIGInterfaceOf(HIG.TextArea);
  });
});
