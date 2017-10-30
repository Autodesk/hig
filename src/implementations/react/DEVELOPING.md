## Getting Started

in this directory simple run:
```
npm install
```

To start developing, simply run:
```
npm run start
```

To start seeing React examples on our playground, run:
```
npm run playground
```

To make a production build, run:
```
npm run build
```

## Developing for HIG-React

HIG React components can be divided into two groups. Adapters and Components.

### Adapters
Consider the Button. It has a few properties (e.g. title, size) and a few event handlers (e.g. onClick). It does not have complext state. In order to use the vanilla Button in React, we create an adapter for it. See `ButtonAdapter.js`.

Adapters are a special type of React component that allow a vanilla component to be used in a React app. They map props in the React world to methods on a component in the vanilla world. Adapters do the following work:
- Map react props to methods on a vanilla component
- Map event handlers from React to a vanilla component
- Mount react components as partials within a vanilla component
- Mount lists of components as partials within a vanilla component
- Mount arbitrary content within a vanilla component

#### Testing
We test adapters using Jest. Adapter tests mount the adapter an ensures that all methods in the adapting components interface are called.

### Components
Now consider GlobalNav. GlobalNav coordinates many vanilla components and manages quite a lot of state. A complex widget like GlobalNav is implemented in two layers. It has an adapter, just as Button does (see `GlobalNavAdapter.js`) and it has a React Component that manages state and renders the various adapters needed to create a full, working GlobalNav.

Components do the following work:
- Composes multiple adapters that must be used together
  E.g. The Dropdown component renders the DropdownAdapter and OptionAdapter
- Manages state
  E.g. Dropdown remembers the currently selected option and displays its label
- Allow prop-driven control
  E.g. Dropdown allows the client developer to override the currently selected option via a prop.

#### Testing
Components are tested as any React component is tested. Use Jest to ensure that given a set of props or state, the component passes the appropriate props to the components it renders. Read up on Jest and React testing for more information on testing components.


## Publishing a new version to NPM
Core committers follow these steps when deploying a new version of the library:

- First, ensure the `development` build is passing on CircleCI.
- Check out the `development` branch and pull down the latest changes.
- Update the package version by running `npm version patch`.
- Commit the changes to `package.json` and `package-lock.json` made by the previous step.
- Tag the commit at the new version `git tag <new version>` (E.g. `git tag v0.28.8`)
- Push this change up to origin
- Create a pull request of `development` againt `master`.
- Once the `development` build passes on CircleCI, merge the PR.
- CircleCI will run a build again on the `master` branch. If all the checks pass it will publish the new version to NPM.