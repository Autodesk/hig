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
            title: this.options.profileSettingsLabel
        });
        this.mountPartialToComment('SETTINGS_LINK', this.settingsLink);
    }

    setEmail(email) {
        // this.el.children.first().setAttribute("src", this.image);
    }

    setName(name) {

    }

    setSignOutLabel(label) {

    }

    setSignOutLink(link) {

    }

}

module.exports = ProfileFlyoutContent;