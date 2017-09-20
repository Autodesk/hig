# hig-react

React components for the HIG

## Consume

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save hig-react
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import { Button } from 'hig-react';

// Styles
import 'hig-react/lib/hig-react.css';

// using CommonJS modules
var ReactHIG = require('hig-react');
var Button = ReactHIG.Button;
```

You can find the library on `window.ReactHIG`.

## Usage

for more code examples see the hig website: [hig.autodesk.com](http://hig.autodesk.com)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'hig-react';
import 'hig-react/lib/hig-react.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button title="Hello World!" />
      </div>
    )
  }
}
```

## Contribute

please see our [DEVELOPING.md](./DEVELOPING.md) for running a `storybook` and `playground` locally to play around with the source and see our [CONTRIBUTING.md](../../../CONTRIBUTING.md) and how to get your code back in the repo

