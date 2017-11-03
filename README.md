# Human Interface Guidelines

HIG is Autodesk's unified design system, so we can build better products faster.

HIG aims to provide implementations for the major platforms (web/native ios/native android/...) with one **shared interface.json** that makes sure all the different implementations are consistent across the platforms. To understand how we structured the HIG, please go and read our [interface.json](packages/hig-interface/interface.json).

## Implementations
Currently HIG has 2 implementations:
- Vanilla html/css/javascript, see [src/implementations/vanilla](src/implementations/vanilla)
- React, see [src/implementations/react](src/implementations/react)

## Design

HIG identifies 4 levels of detail in a UI:
- `Basics`: These are the most basic building blocks of the design: color, typography, icons, buttons, form elements, etc.
- `Components`: These are distinct pieces of the product experience, things like dialog boxes, navigation bars, toolbars and inspectors.
- `Page Types`: Think of these as specific types of views or screens within our products. This includes canvas views, list or grid indexes, dashboards and item details.
- `Mini-Experiences`: These are collections of components or pages that create a small, discrete experience within our products: sign-in, trial, sharing, in-product learning.

## Contributing

Read our contribution guidelines here: [CONTRIBUTING.md](CONTRIBUTING.md)
