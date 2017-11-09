const Mustache = require('mustache');
const validateInterface = require('./_validateInterface');

class Core {
  /**
     * Our constructor mixes the options with the defaults (_defaults function) provided by the implementation class
     * @abstract
     * @param {Object} [options] - Options object with the overrides for our defaults
     */

  constructor(options = {}) {
    if (process.env.NODE_ENV !== 'production') {
      validateInterface(this);
    }

    // MIX OPTIONS WITH DEFAULTS
    // This modifies the passed options object
    options = {
      ...this._defaults,
      ...options
    };

    // SET PARTIALS IF ANY
    if (this._partials) {
      this.partials = this.constructor._partials;
    }
  }

  get el() {
    if (this._el) {
      return this._el;
    }

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

  _render(template, data = {}, partials = {}, tagname = 'div') {
    if (!this._rendered) {
      const elWrapper = document.createElement(tagname);

      elWrapper.innerHTML = Mustache.render(template, data, partials);
      this._rendered = elWrapper.firstChild;
    } else {
      console.error(
        'RENDER ALREADY CALLED ON THIS COMPONENT, USE PROPER METHODS TO UPDATE CONTENT'
      );
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

  mount(mountNode, beforeChild, scopeNode) {
    const parentNode = this._findDOMEl(mountNode, scopeNode);
    const refNode = this._findDOMEl(beforeChild, scopeNode);

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

  mountPartialToComment(searchComment, mountNode, scopeNode) {
    function filterNone() {
      return NodeFilter.FILTER_ACCEPT;
    }

    let comment = null;

    const iterator = document.createNodeIterator(
      this.el || document,
      NodeFilter.SHOW_COMMENT,
      filterNone,
      false
    ); // Fourth argument, which is actually obsolete according to the DOM4 standard, is required in IE 11
    let curNode;
    while ((curNode = iterator.nextNode())) {
      if (curNode.nodeValue == searchComment) {
        comment = curNode;
      }
    }

    if (comment) {
      const refNode = scopeNode ? scopeNode.el : comment;
      if (mountNode._rendered) {
        mountNode.el = comment.parentNode.insertBefore(
          mountNode._rendered,
          refNode
        );
        mountNode._componentDidMount();
      } else {
        mountNode.el = comment.parentNode.insertBefore(mountNode, refNode);
      }

      return mountNode.el;
    }
    console.error(
      `MOUNT PARTIAL TO COMMENT: ${this.constructor.name} has no comment \"${searchComment}\" to mount to.`
    );
    return null;
  }

  /**
     * Remove the HTMLElement from the DOM, does NOT destroy the component, lifecyclemanagement is handled by the adapter or implementation layer!
     * @returns null
     */

  unmount() {
    let el;

    try {
      el = this.el;
    } catch (error) {
      return;
    }

    if (el.parentNode) {
      el.parentNode.removeChild(this.el); // use removeChild for IE11 support
    }
  }

  /**
     * Attach a document event listener
     * @param {String} eventTypes - event types, for example "click", supports multiple events, seperated by space, ex: "click touchstart"
     * @param {String} targetClass - query selector for target class
     * @param {HTMLElement} scopeElement - element that defines the scope in which this takes place
     * @param {Function} executeOnEventFunction - function that will be executed on event
     * @returns {Function} disposeFunction - function to call to remove event listener, note: only returns dispose function when single eventType has been requested
     */

  _attachListener(
    eventTypes,
    targetClass,
    scopeElement,
    executeOnEventFunction
  ) {
    function childOf(/* child node */ c, /* parent node */ p) {
      // returns boolean
      while ((c = c.parentNode) && c !== p);
      return !!c;
    }

    const q = this._findDOMEl(targetClass, scopeElement);
    let eventTarget;
    let eventFn;

    const events = eventTypes.split(' ');
    for (let i = 0; i < events.length; i++) {
      let eventType = events[i];

      if (eventType === 'hover') {
        eventType = 'mouseenter';
      }

      if (eventType === 'mouseenter' || eventType === 'scroll') {
        eventFn = executeOnEventFunction;
        eventTarget = q;
      } else {
        eventFn = (event) => {
          const element = event.target;

          if (q && (childOf(element, q) || element === q)) {
            executeOnEventFunction(event, this);
          }
        };
        eventTarget = document;
      }

      eventTarget.addEventListener(eventType, eventFn);

      if (events.length === 1) {
        const dispose = function () {
          eventTarget.removeEventListener(eventType, eventFn);
        };

        return dispose;
      }
    }
  }

  /**
     * Determines search type and returns the first DOM element found
     * @param {String | HTMLElement} f - input to search
     * @param {String | HTMLElement} [s] - optional scope for search
     * @returns {HTMLElement} object that was found
     */

  _findDOMEl(f, s) {
    if (typeof f === 'string') {
      // do our selection
      const domEl = (s || document).querySelectorAll(f);
      if (!domEl || domEl.length === 0) {
        return console.error('TARGET NOT FOUND ', f);
      }
      return domEl[0];
    }
    return f; // already a HTMLElement, no need to search
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
    newEl.classList.add(...selector.split('.').filter(c => c.length > 0));
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
    return null;
  }

  /**
     * Get the Icon SVG String
     * @param {String} icon - icon ID
     * @returns {String} String with SVG of the icon


    /**
     * Returns valid interface methods
     * @returns {Object} interface methods
     */

  help() {
    return this._interface;
  }

  defaults() {
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
