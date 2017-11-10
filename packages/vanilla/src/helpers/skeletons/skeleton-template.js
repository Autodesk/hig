import Interface from 'interface.json';
import Core from '_core.js';
import './{{ dashCase name }}.scss';
import Template from './{{ dashCase name }}.html';

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

{{ properCase name }}._interface = Interface## replace interface here ##;
{{ properCase name }}._defaults = {};
{{ properCase name }}._partials = {};

export default {{ properCase name }};