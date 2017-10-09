import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import ProfileAdapter from './ProfileAdapter';

describe('TopNav ProfileAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      const wrapper = mount(
        <ProfileAdapter
          higInstance={mockInstance}
          open={true}
          image="/my-image.png"
          name="Tom Petty"
          email="tom.petty@email.com"
          profileSettingsLabel="Settings"
          profileSettingsLink="http://autodesk.com"
          signOutLabel="Sign out"
          signOutLink="/sign-out"
          onSignOutClick={() => {}}
          onProfileSettingsClick={() => {}}
          onProfileImageClick={() => {}}
          onProfileClickOutside={() => {}}
        />
      );
      wrapper.props().higInstance.close();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.TopNav._partials.Profile);
  });
});