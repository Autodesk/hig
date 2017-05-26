import './profile-image.scss';

var Template = require('./profile-image.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates a ProfileImage
 *
 * @class
 */

class ProfileImage extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

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

module.exports = ProfileImage;
