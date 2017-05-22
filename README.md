# Human Interface Guidelines

HIG code provides stateless object-oriented components in platform specific code that are application framework agnostic and light-weight.

## Web Implementation

### Getting Started

```bash
npm install
webpack --watch
```

### Basic Example: Button
```javascript
var Button = new Hig.Button({
    "title": "just a button",
    "link": "http://autodesk.com"
});

Button.mount("body");

Button.onClick(function(e){
    e.preventDefault();
    console.log("Button CLICK")
});
```

more advanced button examples can be found in [the components tests dir](src/web/basics/button/tests/tests-button.html)

### Goal

*Increase quality across Autodesk user experiences by providing a simple and constrained framework of experiences designed by HIG design team.*

HIG Provides **stateless**, **pure functional** components, it aims to be **framework agnostic** and **light-weight**.

HIG.JS aims to provide a layer of abstraction that has a curated set of components to build a user interface.

HIG is the `view` in the `MVVM` pattern:  
![mvvm](https://i-msdn.sec.s-msft.com/dynimg/IC564167.png)  
read more about the `MVVM` pattern on [this msdn page](https://msdn.microsoft.com/en-us/library/hh848246.aspx).

### Design

HIG identifies 4 levels of detail in a UI: 
- `Basics`: These are the most basic building blocks of the design: color, typography, icons, buttons, form elements etc.
- `Components`: These are distinct pieces of the product experience, things like dialog boxes, navigation bars, toolbars, and inspectors.
- `Page Types`: Think of these as specific types of views or screens within our products. This includes canvas views, list or grid indexes, dashboards, and item details.
- `Mini-Experiences`: These are collections of components or pages that create a small, discrete experience within our products: sign-in, trial, sharing, in-product learning.
