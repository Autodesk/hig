import './{{ dashCase name }}.scss';

var Template = require('./{{ dashCase name }}.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an {{ properCase name }}
 *
 * @class
 */

class {{ properCase name }} extends Core {
  constructor(options){
    super(options);
    this._render(Template, options);
  }
}

{{ properCase name }}._defaults = {};
{{ properCase name }}._partials = {};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  {{ properCase name }}._interface = Interface## replace interface here ##;
}

module.exports = {{ properCase name }};