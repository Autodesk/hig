import './profile.scss';

var Template = require ('./profile.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Flyout = require('./../../../../../basics/flyout/flyout.js');
/**
 * Creates an Profile
 *
 * @class
 *
 */

class Profile extends Core {

  constructor(options){
    super(options);
    this._render(Template, options);
  }

  // bind the supplied fn to click events on this element.
  onProfileImageClick(fn) {
    return this._attachListener("click", '.hig__global-nav__profile__image-wrapper', this.el, fn);
  }

  open() {
    const flyout = new Flyout();
    const flyoutContent = document.createElement('div');
    flyoutContent.textContent = 'oh hey world, sup?';
    this.mountPartialToComment('FLYOUT', flyout, this.el);
    // flyout.addTarget(this.el.find('.hig__global-nav__profile__image-wrapper'));
    flyout.addSlot(flyoutContent);
    flyout.open();
    flyout.onClickOutside(() => { flyout.close(); })
  }

  close() {

  }

  setImage(imageURL) {
    if (imageURL) {
      this.image = imageURL;
      this.el.children.first().setAttribute("src", this.image);
    }
  }

}

Profile._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Profile'];
Profile._defaults = {
  image: 'https://placekitten.com/g/50/50'
};

module.exports = Profile;