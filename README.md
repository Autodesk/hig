# Human Interface Guidelines

HIG provides **stateless**, **pure functional** components, it aims to be **framework agnostic** and **light-weight**.
HIG aims to provide implementations for the mayor platforms (web/native ios/native android/...) with one **shared interface.json** that makes sure all the different implementations are consistent across the platforms. To understand how we structured the HIG, please go and read our [interface.json](src/interface/interface.json).

## Web Implementation
The HIG Web implementation consists of `html`, `css` and `js`. You can opt to only consume the `html` and `css` part and write the wrapper against the `interface.json` yourself (hard) or opt to use our `js` wrapper directly (easy). 

### Developing / Contributing
read our developing docs here: [DEVELOPING.md](DEVELOPING.md) and contribution guidelines here: [CONTRIBUTING.md](CONTRIBUTING.md) 

### Consuming the HIG Basic Example: Button
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

HIG.JS aims to provide a layer of abstraction that has a curated set of components to build a user interface.

## Design

HIG identifies 4 levels of detail in a UI: 
- `Basics`: These are the most basic building blocks of the design: color, typography, icons, buttons, form elements etc.
- `Components`: These are distinct pieces of the product experience, things like dialog boxes, navigation bars, toolbars, and inspectors.
- `Page Types`: Think of these as specific types of views or screens within our products. This includes canvas views, list or grid indexes, dashboards, and item details.
- `Mini-Experiences`: These are collections of components or pages that create a small, discrete experience within our products: sign-in, trial, sharing, in-product learning.

## Test Examples for HIG Components
[adsk-hig.github.io/hig/](https://adsk-hig.github.io/hig/).
