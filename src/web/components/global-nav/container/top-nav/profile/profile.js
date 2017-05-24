import './profile.scss';

var Template = require ('./profile.html');
var Interface = require('interface.json');
var Core = require('_core.js');
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
    return this._attachListener("click", '.hig__global-nav__profile', this.el, fn);
  }

  setImage(imageURL) {
    if (imageURL) {
      this.image = imageURL;
      this.el.children.first().setAttribute("src", this.image);
    }
  }

}

Profile._interface = Interface['components']['GlobalNav']['partials']['Container']['partials']['TopNav']['partials']['Profile'];
Profile._defaults = {
  image: 'https://placekitten.com/g/50/50'
};

module.exports = Profile;