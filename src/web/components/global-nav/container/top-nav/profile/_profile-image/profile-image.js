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

    setImage(imageUrl) {
        this.el
            .querySelector('.hig__global-nav__container__top-nav__profile__profile-image__image')
            .setAttribute("src", imageUrl);
    }

}

ProfileImage._interface = {
    methods: {
        "onClick": {},
        "setImage": {}
    },
    defaults: {}
};
ProfileImage._defaults = {};

module.exports = ProfileImage;
