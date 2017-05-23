# Developing

So you want to help out? Great! Let's get you up and running:

## Getting Started

```bash
npm install
webpack --watch
```

## Writing a new component
Creating a new component (or subcomponent) consists of 2 parts:
1. Write the `interface.json` outline
2. Write your html/css/js implementation, for this provide `plop skeleton templates` to get you started, type the following command to start the interactive shell:

```bash
plop
```
use the arrows to select the `hig_skeleton`, type your component name (ex: `component123`), next type the location where you would want your component directory to live (ex: `src/web/components/component123_parent`). This will generate a `html`, `sass` and `js` file in the directory you provided, in our example it would create: 
```
src/web/components/component123_parent/component123/component123.html
src/web/components/component123_parent/component123/component123.sass
src/web/components/component123_parent/component123/component123.js
```

## Running visual regression tests

- Make sure `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` are set in `/.env`.
- Install http-server packcage via `npm install http-server -g`
- In the root directory of the project run command `http-server` from command line
- In separate command line windo run the tests and generate a report: `$ npm run gemini-report`
- View the report: `$ open ./gemini-report/index.html`
