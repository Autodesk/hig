import './profile-image.scss';

const Template = require('./profile-image.html');
const Core = require('_core.js');

/**
 * Creates a ProfileImage
 *
 * @class
 */

class ProfileImage extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  setImage(imageUrl) {
    this.el
      .querySelector('.hig__global-nav__top-nav__profile__profile-image__image')
      .setAttribute('src', imageUrl);
  }
}

ProfileImage._defaults = {};

if (process.env.NODE_ENV !== 'production') {
  ProfileImage._interface = {
    methods: {
      onClick: {},
      setImage: {}
    },
    defaults: {}
  };
}

module.exports = ProfileImage;
