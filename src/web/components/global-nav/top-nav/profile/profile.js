import './profile.scss';

var Template = require ('./profile.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Flyout = require('./../../../../basics/flyout/flyout.js');
var ProfileImage = require('./_profile-image/profile-image.js');
var ProfileFlyoutContent = require('./_profile-flyout-content/profile-flyout-content.js');
/**
 * Creates an Profile
 *
 * @class
 *
 */

class Profile extends Core {

  constructor(options){
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

Profile._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Profile'];

Profile._defaults = {
  image: 'https://placekitten.com/g/50/50',
  email: 'email@example.com',
  name: 'name',
  profileSettingsLink: 'https://www.autodesk.com',
  profileSettingsLabel: "Profile Settings",
  signOutLabel: "Sign Out"
};

module.exports = Profile;