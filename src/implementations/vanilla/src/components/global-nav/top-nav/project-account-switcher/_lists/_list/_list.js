var Template = require('./_list.html');
var Core = require('_core.js');

var Title = require('./_list-title/_list-title.js');

import './_list.scss';

/**
 * Creates an List
 *
 * @class
 */

class List extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addTitle(title){
      var t = new Title({
        title: title
      });

      return this.mountPartialToComment('TITLE', t);      
    }

    addItem(newInstance, referenceInstance){
      this.mountPartialToComment('ITEMS', newInstance, referenceInstance);
    }
}

List._interface = {
  "methods": {
    "addTitle": {},
    "addItem": {}
  }
};
List._defaults = {};
List._partials = {};

module.exports = List;