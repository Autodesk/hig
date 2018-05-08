# Human Interface Guidelines

HIG is Autodesk's unified design system, so we can build better products faster.

## Design Patterns

HIG identifies 4 levels of detail in a UI:
- `Basics`: These are the most basic building blocks of the design: color, typography, icons, buttons, form elements, etc.
- `Components`: These are distinct pieces of the product experience, things like dialog boxes, navigation bars, toolbars and inspectors.
- `Page Types`: Think of these as specific types of views or screens within our products. This includes canvas views, list or grid indexes, dashboards and item details.
- `Mini-Experiences`: These are collections of components or pages that create a small, discrete experience within our products: sign-in, trial, sharing, in-product learning.

## Implementations

Each HIG pattern is implemented as a set of React components. Each pattern is published to NPM individually under the @hig namespace, to allow you to import only what you'll use.

This repository also holds 3 deprecated packages:
- `hig-interface`: [packages/interface](packages/interface)
- `hig-vanilla`: [packages/vanilla](packages/vanilla)
- `hig-react`: [packages/react](packages/react)

## Contributing

Read our contribution guidelines here: [CONTRIBUTING.md](CONTRIBUTING.md)
