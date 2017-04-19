# hig-react-fiber

A custom fiber renderer for hig-web

## Structure

### hig-react.js

A `HIG` component which transitions children to use the custom React Fiber Reconciler.

A generic `Slot` component which transitions back to using ReactDOM from within the HIG context. Note - the hig component must support adding a slot

### hig-react-elements.js

A set of low level components which adapt HIG.Web components to the React Lifecycle. They implement the following interface:

```typescript
interface OrionElement {
  /**
   * The constructor which takes the initial props. Responsible for creating the
   * hig component, setting initial properites, and setting up event listeners
   */
  new(props: any): void;

  /**
   * Delegates to the HIG.Web#mount method
   */
   mount(mountNode: HTMLElement, beforeChild: HTMLElement | null);

  /**
   * Removes event listeners then calls HIG.Web#unmount method
   */
  unmount(): void;

  /**
   * Optional. Removes event listeners then calls HIG.Web#unmount method
   */
  commitUpdate?(updatePayload: UpdatePayload, oldProps: Properties, newProps: Properties): void;

  /**
   * Optional. Figures out what type instance is and calls the appropriate HIG.Web
   * append method (e.g. appendItem, appendSlot). If beforeChild is specified it
   * passes the corresponding HIG.Web instance into the HIG.Web#append* call as the
   * second argument.
  *
   * Only container components need to implement this.
   */
   appendChild?(instance: OrionElement, beforeChild?: OrionElement): void;

   /**
    * Optional. Returns the underlying instance. In the case of
    * Slot it must return the underlying DOM node so we can transition
    * the context back to the DOM.
    */
   getDOMNode?(): void
}

/**
 * An alternating array of PropKey/PropValue pairs. Inspired by ReactDOM.
 */
type UpdatePayload = any[];

/**
 * Standard React properties object
 */
type Properties: { [key: string]: any };
```

### hig-web.js

The actual UI components owned by the HIG.Web team. They implement the following interface:

```typescript
interface HIGElement {
  /**
   * Returns the underlying DOM Node.
   */
  el: HTMLElement;

  /**
   * The constructor takes props and should create a DOM element internally
   * See interface defaults for the supported props
   */
  new(props?: Properties): void;

  /**
   * Inserts the HIG Element into the DOM using mountNode. If beforeChild is
   * specified the HIG Element should be inserted before that.
   *
   * If string, this is a CSS selector if more than one element matches it takes the first
   */
   mount(mountNode: string | HTMLElement, beforeChild: string | HTMLElement | null);

  /**
   * Removes the HIG Element from the DOM
   */
  unmount(): void;

  /**
   * set${Property}
   *
   * setters for each property that the Element supports. Check interface.json for these methods. These
   * methods should always be void and take content specific arguments.
   *
   * Example - setLabel('hello'), setOpen(true)
   */
  setProperty(...args: any[]): void;

  /**
   * on${Event}
   *
   * Takes an event listener as an argument and returns a disposable.
   * internally this listener should be wired to the DOM. Check interface.json for these methods as well.
   *
   * Example
   *
   *  const button = new HIG.Button();
   *  const disposable = button.onClick(() => alert('hello world'));
   *  disposable.dispose();
   */
  onEvent(listener: Function): Disposable

  /**
   * add${Element}
   *
   * mounts the element provided to the component by calling Element#mount with
   * the appropriate mountNode and if needed beforeChild.
   *
   * Example - addSlot, addSidebar, addTop, addGroup
   */
  addElement(element: HIGElement): void;
}

/**
 * An object returned which represents a resource allocation. Calling dispose
 * deallocates the resource. In the case of HIG.Web it's used for event listeners
 * so that HIG.Web doesn't need to maintain any event listener state.
 *
 * See https://en.wikipedia.org/wiki/Dispose_pattern for details.
 */
interface Disposable {
  /**
   * Removes the event listener
   */
  dispose(): void;
}

type Properties = { [key: string]: any };
```

### index.js

A set of examples of using the HIG primitives with the DOM.


### TODO

* Switch getDOMNode to el property getter
* Use interface json (mock help method) to generate properties in Orion Elements
  * Use defaults to figure out property names
  * Add mock for event names with 'onEvent' style
  * Rename append* methods to add* methods
* Better error messaging for failure modes:
  * Trying to append the wrong child type
  * Trying to add a child to the DOM when it should be nested inside another HIG.Web component
* Create a base class in hig-react-elements to help tidy up some boilerplate
* Consider contributing to ReactPortal since it looks like we can't use it switch
  rendering modes yet (https://github.com/facebook/react/blob/f6c4fe6cbbdca375b50ac10373007a9b74279e95/src/renderers/dom/fiber/ReactDOMFiber.js#L534)
* Try to back port this version of HIG.Web to hig-playground to see if we can have
  a common implementation