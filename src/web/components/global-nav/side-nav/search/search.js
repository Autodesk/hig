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

    }

}

Search._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Search'];
Search._defaults = {
    "placeholder": "Search"
};
Search._partials = {};

module.exports = Search;