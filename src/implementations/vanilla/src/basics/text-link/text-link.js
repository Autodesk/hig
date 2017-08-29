import './text-link.scss';

var Template = require('./text-link.html');
var Interface = require('interface.json');
var Core = require('../../helpers/js/_core.js');

const TYPES = ['primary', 'secondary'];

/**
* Creates a TextLink
*
* @class
*/

class TextLink extends Core {
    constructor(options = {}) {
        super(options);
        this._render(Template, options);
        this.initialOptions = options;
    }

    _componentDidMount() {
        if (this.initialOptions) {
            if (this.initialOptions.href) {
                this.setHref(this.initialOptions.href);
            }

            if (this.initialOptions.text) {
                this.setText(this.initialOptions.text);
            }

            if (this.initialOptions.type) {
                this.setType(this.initialOptions.type);
            }
        }
    }

    setText(text) {
        this.el.setAttribute('alt', text);
        this.el.innerHTML = text;
    }

    setHref(href) {
        this.el.setAttribute('href', href);
        this.el.href = href;
    }

    setType(type) {
        if (!TextLink.AvailableTypes.includes(type)) {
            console.error(`TextLink cannot have type "${type}". Only these types are allowed: `, TextLink.AvailableTypes);
            return;
        }
        this.el.classList.remove(...TextLink.AvailableTypes.map(t => `hig__text-link--${t}`));
        this.el.classList.add(`hig__text-link--${type}`);
    }

    onClick(fn) {
        return this._attachListener("click", this.el, this.el, fn);
    }

}

TextLink._interface = Interface['basics']['TextLink'];
TextLink.AvailableTypes = TYPES;

TextLink._defaults = {
    href: null,
    text: 'Text',
    type: 'primary'
};

module.exports = TextLink;
