import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import ProfileAdapter from "./ProfileAdapter";

describe("TopNav ProfileAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      const wrapper = mount(
        <ProfileAdapter
          higInstance={mockInstance}
          open
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
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.TopNav._partials.Profile
    );
  });
});
