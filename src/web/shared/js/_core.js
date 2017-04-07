var Mustache = require('mustache');

class Core {

    /**
     * Our constructor mixes the options with the defaults (_defaults function) provided by the implementation class
     * @abstract
     * @param {Object} [options] - Options object with the overrides for our defaults
     */

    constructor(options) {

        this._events = {};

        // CHECK INTERFACE COMPATIBILITY
        if(!this._interface){
            console.warn("NO INTERFACE SET FOR CLASS, PLEASE DEFINE INTERFACE IN _interface PROPERTY OF YOUR CLASS");
        }else{
            var methodArray = Object.getOwnPropertyNames( Object.getPrototypeOf( this ) );
            methodArray.forEach(function(v, i){
                if(v != "constructor" && v != "render" && v != "defaults" && v != "events" && v.indexOf('add') != 0 && v[0] != "_" && !this._interface["methods"][v]){
                    console.error("METHOD: \"" + v + "\" IS NOT DEFINED AS INTERFACE OR IS NOT A VALID INTERFACE METHOD");
                }
            }, this);
        }

        // CHECK DEFAULTS ARE DEFINED
        if(!this._defaults){
            console.warn("NO DEFAULTS SET FOR CLASS, PLEASE DEFINE DEFAULTS IN _defaults PROPERTY OF YOUR CLASS");
        }else{
            for(var v in this._interface['defaults']){
                if(!this._defaults[v]){
                    console.error("DEFAULT VALUE: \"" + v + "\" IS DEFINED IN THE INTERFACE BUT NOT IN YOUR CLASS",this);
                }
            };
        }

        // MIX OPTIONS WITH DEFAULTS
        if(options){
            var defaults = this._defaults;
            if(defaults){
                for(var key in defaults){
                    if (!defaults.hasOwnProperty(key)) continue; // skip loop if the property is from prototype
                    if(!options[key]){
                        options[key] = defaults[key];
                    }
                }
            }
        }else{
            options = this._defaults;
        }
    }

    /**
     * Attach a document event listener
     * @param {String} eventType - event type, for example "click"
     * @param {String} targetClass - query selector for target class
     * @param {HTMLElement} scopeElement - element that defines the scope in which this takes place
     * @param {String} eventFunction - function that will be executed on event
     * @returns null
     */

    _attachListener(eventType, targetClass, scopeElement, eventFunction ){

        // #TODO: dont attach event listeners twice if _attachListener is called by second item, save events in local this._events object and loop through before attaching a new event
        
        function childOf(/*child node*/c, /*parent node*/p){ //returns boolean
            while( (c=c.parentNode) && c!==p ); 
            return !!c; 
        }

        var q;

        if(typeof targetClass == 'object'){
            q = targetClass;
        }else{
            q = scopeElement.querySelectorAll(targetClass);
            q = (q) ? q[0] : false;
        }

        if(eventType == 'hover'){
            q.addEventListener('mouseenter', function(event){
                event.preventDefault();
                // scopeElement.dispatchEvent(e);
                eventFunction(event);
            });
        }else{
            document.addEventListener(eventType, function(event){
                var element = event.target;
                
                if(q && (childOf(element, q) || element === q)){
                    event.preventDefault();
                    // scopeElement.dispatchEvent(e);
                    eventFunction(event);
                }
            });
        }
    }

    addHigEventListener(event, fn){
        console.error("NO EVENTS DEFINED FOR THIS COMPONENT");
    }

    /**
     * Does the actual rendering for the template and references the result in the $el var of the class
     * @param {String} target - query selector target string
     * @param {Object} data - query selector target string
     * @param {String} template - template string
     * @param {Object} partials - object with potential partials
     * @returns {Object} el - DOM object with the rendered result
     */

    _render(target, data, template, partials){
        var DOMTarget = target;
        
        if(typeof target != "object") {
            DOMTarget = document.querySelectorAll(target);
            if(!DOMTarget && !DOMTarget[0]){
                console.error("TARGET NOT FOUND ", target);
            }
            DOMTarget = DOMTarget[0];
        }
        
        var elWrapper = document.createElement('div');
        elWrapper.innerHTML = Mustache.render(
            template, 
            (data || {}),
            (partials || {})
        );
        var el = elWrapper.firstChild;
        DOMTarget.appendChild(el);
        return el
    }   

    /**
     * Returns valid interface methods
     * @returns {Object} interface methods
     */

    help(){
        return this._interface;
    }

    defaults(){
        return this._defaults;
    }
    
    get _interface() {
        return this.constructor._interface;
    }

    get _defaults() {
        return this.constructor._defaults;
    }

}

module.exports = Core;