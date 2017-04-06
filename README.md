# hig.web

## Getting Started

```
npm install
webpack --watch
```

## Documentation

### Goal

*Increase quality across Autodesk user experiences by providing a simple and constrained framework of experiences designed by HIG design team.*

HIG Provides **stateless**, **pure functional** components, it aims to be **framework agnostic** and **light-weight**.

HIG.JS aims to provide a layer of abstraction that has a curated set of components to build a user interface.

HIG is the `view` in the `MVVM` pattern:  
![mvvm](https://i-msdn.sec.s-msft.com/dynimg/IC564167.png)  
read more about the `MVVM` pattern on [this msdn page](https://msdn.microsoft.com/en-us/library/hh848246.aspx).

### Conceptual

**Why provide JS?**  
- `modifier functions`: limit all the possible ways you modify an object by providing clear methods, ex: `setTitle`
- `events`: list the possible interactions with the object, ex: `hig.click` 
- Javascript allows to define and control the area events are attached to (prevent people attaching events to the wrong element)
- Allows for automated testable UI independant from any application logic

**Why have a single `interface.json`?**  
Because HIG aims to unify user experience **across platforms**, by consolidating the interface to a single file we're able to drive the cross platform implementation conversation on the same terms.

### Implementation

Our web implementation consists of 3 files: a `template` written in HTML, a `style` definition written in CSS and a `javascript interface`.

#### Templates (HTML)

All our templates are written in pure html with [Moustache](https://mustache.github.io/) `{{}}` template syntax support.

#### Style (SASS/CSS)

Style definition is written in [SASS](http://sass-lang.com/) and transpiled to `CSS`

#### Interface (JS)

Design blocks on all levels are defined as `Objects` that you can interface with, to list the valid interface methods and events simply create a `new Object` and call its `help()` method, for example in your chrome console:

```
var button = new Button();
button.help();
```

will return an Object with its interface methods and events:

```
{
    "setTitle": "Sets the title of a button",
    "setLink": "Sets the link of a button",
    "events": {
        "click": "Button has been clicked"
    }
}
```

A typical HIG Object inherits from `_core` and has **2 static properties** you need to define:  
`_defaults`: set the default values of your object in an object  
`_interface`: read from the global HIG.interface JSON and get your respective interface, always specify a valid interface to play nice with `_core`.

When creating a `new` HIG Object you pass the `target` as first parameter and (optional) Mustache template values as second parameter. These optional template values will get mixed with the defaults defined in `_defaults`. All this happens in the [_core constructor](implementation/_core/_core.js#L12) method.

Summary of a typical HIG Object:
```
Object
  |
  + _defaults = `Object` with default values for Mustache template
  + _interface = `Object` with possible `methods` and `events`
  + constructor(target, templateValues)
  + render(target, templateValues) = sets the `el` of our object and binds the `Events` to the object
  + methods(input) = methods defined in the interface JSON
  + this.el = DOM element that you can listen to for `Events` listed in the interface JSON
  + this.help() = Returns a human readable list of interface methods and events
```

### Design

HIG identifies 4 levels of detail in a UI: 
- `Basics`: These are the most basic building blocks of the design: color, typography, icons, buttons, form elements etc.
- `Components`: These are distinct pieces of the product experience, things like dialog boxes, navigation bars, toolbars, and inspectors.
- `Page Types`: Think of these as specific types of views or screens within our products. This includes canvas views, list or grid indexes, dashboards, and item details.
- `Mini-Experiences`: These are collections of components or pages that create a small, discrete experience within our products: sign-in, trial, sharing, in-product learning.