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

## Adding a new icon
To add a new svg icon to our stack, simply add the `svg` file to the [src/web/basics/icons/src](src/web/basics/icons/src) directory.
Next run the following command:
```bash
npm run build-icons
```
which will trigger our build script to create an updated release file in [src/web/basics/icons/release](src/web/basics/icons/release). The build script in itself simply does a `SVGO` optimize of the svg, and stores the optimized svg as a string in a key-value object in our release file, read more about the script here: [src/web/basics/icons/build/build.js](src/web/basics/icons/build/build.js).

## Running visual regression tests

- Make sure `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` are set in `/.env`.
- Run the gemini tests and generate a report: `$ npm run gemini-report`
- View the report: `$ open ./gemini-report/index.html`