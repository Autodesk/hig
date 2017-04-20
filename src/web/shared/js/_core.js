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
            // CHECK IF ALL METHODS IN COMPONENT ARE DEFINED IN INTERFACE
            methodArray.forEach(function(v, i){
                if(v != "constructor" && v != "defaults" && v[0] != "_" && !this._interface["methods"][v]){
                    console.error("METHOD: \"" + v + "\" IS NOT DEFINED AS INTERFACE OR IS NOT A VALID INTERFACE METHOD");
                }
            }, this);
            
            // CHECK IF ALL METHODS IN INTERFACE ARE IMPLEMENTED
            for(var k in this._interface["methods"]){
                if(methodArray.indexOf(k) === -1){
                    console.error("METHOD: \"" + k + "\" IS NOT IMPLEMENTED BY THIS COMPONENT YET AND NEEDS AN IMPLEMENTATION");
                }
            };
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
     * Creation of the DOM element and mustache template rendering
     * @param {String} template - template string
     * @param {Object} [data] - default values on render
     * @param {Object} [partials] - object with potential partials
     * @returns null
     */

    _render(template, data, partials){
        if(!this._rendered){
            var elWrapper = document.createElement('div');
            elWrapper.innerHTML = Mustache.render(
                template, 
                (data || {}),
                (partials || {})
            );
            this._rendered = elWrapper.firstChild;
        }else{
            console.error("RENDER ALREADY CALLED ON THIS COMPONENT, USE PROPER METHODS TO UPDATE CONTENT");
        }
        
    }

    /**
     * Inserts the HIG Element into the DOM using mountNode. If beforeChild is specified the HIG Element should be inserted before that.
     * If string, this is a CSS selector if more than one element matches it takes the first
     * @param {String | HTMLElement} mountNode - CSS selector or HTMLElement where to mount
     * @param {String | HTMLElement | null} beforeChild - if defined will use beforeChild instead of appendChild
     * @returns null
     */

    mount(mountNode, beforeChild){
        var parentNode = this._findDOMEl(mountNode);
        var refNode = this._findDOMEl(beforeChild);

        this.el = parentNode.insertBefore(this._rendered, refNode);
    }

    /**
     * Remove the HTMLElement from the DOM, does NOT destroy the component, lifecyclemanagement is handled by the adapter or implementation layer!
     * @returns null
     */

    unmount(){
        this.el.remove();
    }   

    /**
     * Attach a document event listener
     * @param {String} eventType - event type, for example "click"
     * @param {String} targetClass - query selector for target class
     * @param {HTMLElement} scopeElement - element that defines the scope in which this takes place
     * @param {String} executeOnEventFunction - function that will be executed on event
     * @returns {Function} disposeFunction - function to call to remove event listener
     */

    _attachListener(eventType, targetClass, scopeElement, executeOnEventFunction ){

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

        var eventTarget, eventFn;

        if(eventType == 'hover' || eventType == 'mouseenter'){
            eventFn = executeOnEventFunction;
            eventTarget = q;
            eventType = 'mouseenter';
            // e = q.addEventListener('mouseenter', eventFn);
        }else{
            eventFn = function(event){
                var element = event.target;
                
                if(q && (childOf(element, q) || element === q)){
                    event.preventDefault();
                    executeOnEventFunction(event);
                }
            };
            eventTarget = document;
            // e = document.addEventListener(eventType, clickEventFunction);
        }

        eventTarget.addEventListener(eventType, eventFn);

        var dispose = function(){
            eventTarget.removeEventListener(eventType, eventFn);
        };

        return dispose;
    }

    /**
     * Determines search type and returns the DOM element occordingly
     * @param {String | HTMLElement} f - input to search
     * @returns {HTMLElement} object that was found
     */
    
    _findDOMEl(f){
        if(typeof f === "string"){
            // do our selection
            var domEl = document.querySelectorAll(f);
            if(!domEl || domEl.length === 0){
                return console.error("TARGET NOT FOUND ", f);
            }else{
                return domEl[0];
            }
        }else{
            return f; // already a HTMLElement, no need to search
        }
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