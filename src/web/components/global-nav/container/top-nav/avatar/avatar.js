import './avatar.scss';

var Template = require ('./avatar.html');
var Interface = require('interface.json');
var Core = require('_core.js');
/**
 * Creates an Avatar
 *
 * @class
 *
 */

class Avatar extends Core {

  constructor(options){
    super(options);
    this._render(Template, options);
  }

  // bind the supplied fn to click events on this element.
  onClick(fn) {
    return this._attachListener("click", this.el, this.el, fn);
  }

  setImage(imageURL) {
    if (imageURL) {
      this.image = imageURL;
      this.el.children.first().setAttribute("src", this.image);
    }
  }

}

Avatar._interface = Interface['components']['GlobalNav']['partials']['Container']['partials']['TopNav']['partials']['Avatar'];
Avatar._defaults = {
  image: 'foo.png'
};
Avatar._partials = {
  Avatar: Avatar
};

module.exports = Avatar;