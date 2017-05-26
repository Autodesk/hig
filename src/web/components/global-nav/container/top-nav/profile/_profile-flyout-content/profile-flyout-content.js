import './profile-flyout-content.scss';

var Template = require('./profile-flyout-content.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Button = require('../../../../../../basics/button/button.js');

/**
 * Creates an ProfileFlyoutContent
 *
 * @class
 */

class ProfileFlyoutContent extends Core {

    constructor(options){
        super(options);
        this.options = options;
        this._render(Template, options);
    }

    _componentDidMount() {
        this.signOutButton = new Button({
            title: this.options.signOutLabel
        });
        this.mountPartialToComment('SIGN_OUT_BUTTON', this.signOutButton);

        this.settingsLink = new Button({
            title: this.options.profileSettingsLabel,
            style: 'link'
        });
        this.mountPartialToComment('SETTINGS_LINK', this.settingsLink);
    }

    setEmail(email) {
        const el = this.el.querySelector('.src__components__global-nav__container__top-nav__profile__profile-flyout-content__email');
        el.textContent = email;
        el.setAttribute('title', email);
    }

    setName(name) {
        const el = this.el.querySelector('.src__components__global-nav__container__top-nav__profile__profile-flyout-content__name')
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

}

ProfileFlyoutContent._interface = {
    methods: {
        "setEmail": {},
        "setName": {},
        "setProfileSettingsLabel": {},
        "setSignOutLabel": {},
        "setProfileSettingsLink": {},
        "setSignOutLink": {}
    },
    defaults: {}
};
ProfileFlyoutContent._defaults = {};

module.exports = ProfileFlyoutContent;