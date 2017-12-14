import Core from '_core.js';
import Button from 'components/button/button';
import Template from './profile-flyout-content.html';
import './profile-flyout-content.scss';

/**
 * Creates an ProfileFlyoutContent
 *
 * @class
 */

class ProfileFlyoutContent extends Core {
  constructor(options) {
    super(options);
    this.options = options;
    this._render(Template, options);
  }

  _componentDidMount() {
    this.signOutButton = new Button({
      title: this.options.signOutLabel,
      link: this.options.signOutLink,
      size: 'small',
      type: 'secondary'
    });
    this.mountPartialToComment('SIGN_OUT_BUTTON', this.signOutButton);

    this.settingsLink = new Button({
      title: this.options.profileSettingsLabel,
      link: this.options.profileSettingsLink,
      size: 'small',
      type: 'secondary'
    });
    this.mountPartialToComment('SETTINGS_LINK', this.settingsLink);
  }

  setEmail(email) {
    const el = this.el.querySelector('.hig__global-nav__top-nav__profile__profile-flyout-content__email');
    el.textContent = email;
    el.setAttribute('title', email);
  }

  setName(name) {
    const el = this.el.querySelector('.hig__global-nav__top-nav__profile__profile-flyout-content__name');
    el.textContent = name;
    el.setAttribute('title', name);
  }

  setProfileSettingsLabel(label) {
    this.settingsLink.setTitle(label);
  }

  setSignOutLabel(label) {
    this.signOutButton.setTitle(label);
  }

  setProfileSettingsLink(link) {
    this.settingsLink.setLink(link);
  }

  setSignOutLink(link) {
    this.signOutButton.setLink(link);
  }

  onProfileSettingsClick(fn) {
    return this.settingsLink.onClick(fn);
  }

  onSignOutClick(fn) {
    return this.signOutButton.onClick(fn);
  }
}

ProfileFlyoutContent._interface = {
  methods: {
    setEmail: {},
    setName: {},
    setProfileSettingsLabel: {},
    setSignOutLabel: {},
    setProfileSettingsLink: {},
    setSignOutLink: {},
    onProfileSettingsClick: {},
    onSignOutClick: {}
  },
  defaults: {}
};
ProfileFlyoutContent._defaults = {};

export default ProfileFlyoutContent;
