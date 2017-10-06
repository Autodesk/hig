import { mount } from 'enzyme';
import React from 'react';

import * as HIG from 'hig-vanilla';
import AvatarAdapter from './NewAvatarAdapter';

describe('AvatarAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <AvatarAdapter
          higInstance={mockInstance}
          name="Tilda Swinton"
          size="medium"
          image="/my-image.png"
        />
      )
    }).toImplementHIGInterfaceOf(HIG.Avatar);
  });
});
