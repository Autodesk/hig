# hig-react

React components for the HIG

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save @hig/hig-react
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import { Button } from 'hig-react';

// Styles
import 'hig-react/lib/hig-react.css';

// using CommonJS modules
var ReactHIG = require('@hig/hig-react');
var Button = ReactHIG.Button;
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/@hig/hig-react/lib/hig-react.umd.js"></script>
```

You can find the library on `window.ReactHIG`.

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@hig/hig-react';
import '@hig/hig-react/lib/hig-react.css';

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

