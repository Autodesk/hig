import Interface from 'interface.json';
import Core from '_core.js';
import Flyout from 'basics/flyout/flyout';
import ProfileImage from 'components/global-nav/top-nav/profile/_profile-image/profile-image';
import ProfileFlyoutContent from 'components/global-nav/top-nav/profile/_profile-flyout-content/profile-flyout-content';
import Template from './profile.html';
import './profile.scss';
/**
 * Creates an Profile
 *
 * @class
 *
 */

class Profile extends Core {
  constructor(options) {
    super(options);
    this.options = options;
    this._render(Template, options);
  }

  _componentDidMount() {
    this.flyout = new Flyout();
    this.mountPartialToComment('FLYOUT', this.flyout, this.el);
    this.flyoutContent = new ProfileFlyoutContent(this.options);
    this.profileImage = new ProfileImage({ image: this.options.image });
    this.flyout.addSlot(this.flyoutContent);
    this.flyout.addTarget(this.profileImage);
  }

  // bind the supplied fn to click events on this element.
  onProfileImageClick(fn) {
    return this.profileImage.onClick(fn);
  }

  open() {
    this.flyout.open();
  }

  close() {
    this.flyout.close();
  }

  onProfileClickOutside(fn) {
    return this.flyout.onClickOutside(fn);
  }

  setImage(imageUrl) {
    this.profileImage.setImage(imageUrl);
  }

  setEmail(email) {
    this.flyoutContent.setEmail(email);
  }

  setName(name) {
    this.flyoutContent.setName(name);
  }

  setProfileSettingsLabel(label) {
    this.flyoutContent.setProfileSettingsLabel(label);
  }

  setSignOutLabel(label) {
    this.flyoutContent.setSignOutLabel(label);
  }

  setProfileSettingsLink(link) {
    this.flyoutContent.setProfileSettingsLink(link);
  }

  setSignOutLink(link) {
    this.flyoutContent.setSignOutLink(link);
  }

  onProfileSettingsClick(fn) {
    return this.flyoutContent.onProfileSettingsClick(fn);
  }

  onSignOutClick(fn) {
    return this.flyoutContent.onSignOutClick(fn);
  }
}

Profile._interface = Interface.components.GlobalNav.partials.TopNav.partials.Profile;

Profile._defaults = {
  email: 'email@example.com',
  name: 'name',
  profileSettingsLink: 'https://www.autodesk.com',
  profileSettingsLabel: 'Profile Settings',
  signOutLink: '#',
  signOutLabel: 'Sign Out'
};

export default Profile;
