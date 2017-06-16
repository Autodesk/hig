import './search.scss';

var Template = require('./search.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Search
 *
 * @class
 */

class Search extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setPlaceholder(placeholder){
        this._findDOMEl(".hig__global-nav__top-nav__search__inputholder__input", this.el).setAttribute('placeholder', placeholder);
    }

    setQuery(query){
        this._findDOMEl(".hig__global-nav__top-nav__search__inputholder__input", this.el).value = query;
    }

    showClearIcon(){
        this._findDOMEl(".hig__global-nav__top-nav__search__clear", this.el).classList.add("hig__global-nav__top-nav__search__clear--show");
    }

    hideClearIcon(){
        this._findDOMEl(".hig__global-nav__top-nav__search__clear", this.el).classList.remove("hig__global-nav__top-nav__search__clear--show");
    }

    onClearIconClick(fn){
        return this._attachListener("click", '.hig__global-nav__top-nav__search__clear', this.el, fn);
    }

    onInput(fn){
        return this._attachListener("input", '.hig__global-nav__top-nav__search__inputholder__input', this.el, fn);
    }

    onFocusIn(fn){
        return this._attachListener("focusin", '.hig__global-nav__top-nav__search__inputholder__input', this.el, fn);
    }

    onFocusOut(fn){
        return this._attachListener("focusout", '.hig__global-nav__top-nav__search__inputholder__input', this.el, fn);
    }

}

Search._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Search'];
Search._defaults = {
    "query": "",
    "placeholder": "Search"
};
Search._partials = {};

module.exports = Search;