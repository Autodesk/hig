var Icons = require('../../basics/icons/icons.js');
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
        }else {
            var methodArray = Object.getOwnPropertyNames( Object.getPrototypeOf( this ) );
            // CHECK IF ALL METHODS IN COMPONENT ARE DEFINED IN INTERFACE
            methodArray.forEach(function(v, i){
                if(v != "constructor" && v != "defaults" && v[0] != "_" && !this._interface["methods"][v]){
                    console.error("METHOD: \"" + this.constructor.name + '.' + v + "\" IS NOT DEFINED AS INTERFACE OR IS NOT A VALID INTERFACE METHOD");
                }
            }, this);

            // CHECK IF ALL METHODS IN INTERFACE ARE IMPLEMENTED
            for(var k in this._interface["methods"]){
                if(methodArray.indexOf(k) === -1){
                    console.error(`METHOD: \"${this.constructor.name}.${k}\" IS NOT IMPLEMENTED BY THIS COMPONENT YET AND NEEDS AN IMPLEMENTATION`);
                }
            };
        }

        // CHECK DEFAULTS ARE DEFINED
        if(!this._defaults){
            console.warn(`NO DEFAULTS SET FOR ${this.constructor.name}, PLEASE DEFINE DEFAULTS IN _defaults PROPERTY OF YOUR CLASS`);
        }else{
            for(var v in this._interface['defaults']){
                if(this._defaults[v] === undefined){
                    console.error(`DEFAULT VALUE: \"${this.constructor.name}.${v}\" IS DEFINED IN THE INTERFACE BUT NOT IMPLIMENTED`, this);
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

        // SET PARTIALS IF ANY
        if(this._partials){
            this.partials = this.constructor._partials;
        }
    }

    get el() {
        if(this._el) { return this._el }

        throw `ELEMENT: You cannot access ${this.constructor.name}'s \`el\` property before it is mounted.`;
    }

    set el(element) {
        this._el = element;
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
            data = (data || {});

            // ICON MIXIN
            data.renderIcon = function(){
                return function (text, render) {
                    var k = Mustache.render(text, data);
                    var i = (k == "") ? "" : Icons[k];
                    if(i == undefined){
                        console.warn("NO HIG ICON FOUND WITH THE NAME: "+k);
                    }
                    return "<div class='hig__icon'>" + i + "</div>";
                }
            }
            elWrapper.innerHTML = Mustache.render(
                template,
                data,
                (partials || {})
            );
            this._rendered = elWrapper.firstChild;
        }else{
            console.error("RENDER ALREADY CALLED ON THIS COMPONENT, USE PROPER METHODS TO UPDATE CONTENT");
        }

    }

    _componentDidMount() {
        // Subclass should implement this if needed
    }

    /**
     * Inserts the HIG Element into the DOM using mountNode. If beforeChild is specified the HIG Element should be inserted before that.
     * If string, this is a CSS selector if more than one element matches it takes the first
     * @param {String | HTMLElement} mountNode - CSS selector or HTMLElement where to mount
     * @param {String | HTMLElement | null} beforeChild - if defined will use beforeChild instead of appendChild
     * @param {String | HTMLElement | null} scopeNode - if defined will limit search inside of this element
     * @returns {HTMLElement} el - HTMLElement that is mounted to DOM
     */

    mount(mountNode, beforeChild, scopeNode){
        var parentNode = this._findDOMEl(mountNode, scopeNode);
        var refNode = this._findDOMEl(beforeChild, scopeNode);

        this.el = parentNode.insertBefore(this._rendered, refNode);
        this._componentDidMount();
        return mountNode.el;
    }

    /**
     * Inserts a partial child into the DOM at a specified comment.
     * @param {String} searchComment - HTML comment to target
     * @param {HIGComponent} mountNode - HIG Component to attach to DOM
     * @param {String | HTMLElement | null} scopeNode - if defined will limit search inside of this element
     * @returns {HTMLElement} el - HTMLElement that is mounted to DOM
     */

    mountPartialToComment(searchComment, mountNode, scopeNode){
        function filterNone() {
            return NodeFilter.FILTER_ACCEPT;
        }

        var comment = null;

        var iterator = document.createNodeIterator((this.el || document), NodeFilter.SHOW_COMMENT, filterNone, false); // Fourth argument, which is actually obsolete according to the DOM4 standard, is required in IE 11
        var curNode;
        while (curNode = iterator.nextNode()){
            if(curNode.nodeValue == searchComment){
                comment = curNode;
            }
        }

        if(comment){
            var refNode = (scopeNode) ? scopeNode.el : comment;
            if(mountNode._rendered){
                mountNode.el = comment.parentNode.insertBefore(mountNode._rendered, refNode);
                mountNode._componentDidMount();
            }else{
                mountNode.el = comment.parentNode.insertBefore(mountNode, refNode);
            }

            return mountNode.el;
        }else{
            console.error(`MOUNT PARTIAL TO COMMENT: ${this.constructor.name} has no comment \"${searchComment}\" to mount to.`);
        }
    }

    /**
     * Remove the HTMLElement from the DOM, does NOT destroy the component, lifecyclemanagement is handled by the adapter or implementation layer!
     * @returns null
     */

    unmount(){
        if (!this.el) { return }
        this.el.parentNode.removeChild(this.el); // use removeChild for IE11 support
    }

    /**
     * Attach a document event listener
     * @param {String} eventType - event type, for example "click"
     * @param {String} targetClass - query selector for target class
     * @param {HTMLElement} scopeElement - element that defines the scope in which this takes place
     * @param {Function} executeOnEventFunction - function that will be executed on event
     * @returns {Function} disposeFunction - function to call to remove event listener
     */

    _attachListener(eventType, targetClass, scopeElement, executeOnEventFunction ){

        // #TODO: dont attach event listeners twice if _attachListener is called by second item, save events in local this._events object and loop through before attaching a new event

        function childOf(/*child node*/c, /*parent node*/p){ //returns boolean
            while( (c=c.parentNode) && c!==p );
            return !!c;
        }

        var q = this._findDOMEl(targetClass, scopeElement);
        var eventTarget, eventFn;

        if(eventType == 'hover' || eventType == 'mouseenter'){
            eventFn = executeOnEventFunction;
            eventTarget = q;
            eventType = 'mouseenter';
        }else{
            eventFn = (event) => {
                var element = event.target;

                if(q && (childOf(element, q) || element === q)){
                    executeOnEventFunction(event, this);
                }
            };
            eventTarget = document;
        }

        eventTarget.addEventListener(eventType, eventFn);

        var dispose = function(){
            eventTarget.removeEventListener(eventType, eventFn);
        };

        return dispose;
    }

    /**
     * Determines search type and returns the first DOM element found
     * @param {String | HTMLElement} f - input to search
     * @param {String | HTMLElement} [s] - optional scope for search
     * @returns {HTMLElement} object that was found
     */

    _findDOMEl(f, s){
        if(typeof f === "string"){
            // do our selection
            var domEl = (s || document).querySelectorAll(f);
            if(!domEl || domEl.length === 0){
                debugger
                return console.error("TARGET NOT FOUND ", f);
            }else{
                return domEl[0];
            }
        }else{
            return f; // already a HTMLElement, no need to search
        }
    }

    /**
     * Returns first matching element if found, creates and returns an element if not
     * @param {String} searchComment - HTML comment to target where element should be inserted if created
     * @param {String} tagname - Type of tag to create if selector doesn't find an element. E.g. `div`
     * @param {String} selector - Selector of the possibly existing element
     * @returns {HTMLElement} HTMLElement that was found or created
     */

    _findOrAddElement(searchComment, tagname, selector) {
        const existingEl = this.el.querySelector(selector, this.el);
        if (existingEl) {
            return existingEl;
        }

        const newEl = document.createElement(tagname);
        newEl.classList.add(selector.replace('.', ''));
        return this.mountPartialToComment(searchComment, newEl);
    }

    /**
     * Searches for an element and removes it if found.
     * @param {String} selector - Selector of element to remove
     * @returns null
     */

    _removeElementIfFound(selector) {
        const existingEl = this.el.querySelector(selector, this.el);
        if (existingEl) {
            return existingEl.remove();
        }
    }

    /**
     * Get the Icon SVG String
     * @param {String} icon - icon ID
     * @returns {String} String with SVG of the icon
     */

    _getIconString(icon){
        return Icons[icon];
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

    get _partials() {
        return this.constructor._partials;
    }

}

module.exports = Core;