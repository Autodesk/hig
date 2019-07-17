# Sample Component Breadcrumbs

> This is a private sample package, showing the basics on contributing a HIG component.

This component accepts [`Text-Link`](../../packages/text-link) & [`Typography`](../../packages/typography) as its child nodes, and displays them in a "breadcrumbs" style.

----

## Getting started
* Clone the repository
* Copy the [`sample-component`](../sample-component) folder to [`packages`](../../packages) folder
* Change directory to [`packages/storybook`](../../packages/storybook) and run `yarn storybook` to preview the component

## Instruction
### package.json
HIG components should implement similar `package.json` file as showning in this [sample component](./package.json), to get the consistent configrations, building, testing processes in HIG.

### Component export
Each package should have at least one export of the component, in this sample package, we export component `SampleComponentBreadcrumbs` in [`src/index.js`](./src/index.js). We can also have more exports for constants, sub-components, etc.

### Storybook preview
HIG uses [storybook](https://storybook.js.org) to preview components. Each component package should put its stories in [`*.stories.js`](./src/__stories__/SampleComponentBreadcrumbs.stories.js) file in [`src/__stories__/`](./src/__stories__) folder, and the stories will be included in storybook automatically.

### Unit testing
[Jest](http://jestjs.io/) along with [Enzyme](http://airbnb.io/enzyme/) is used to run the unit testing. In this sample package, we implement the unit test in [`SampleComponentBreadcrumbs.test.js`](./src/SampleComponentBreadcrumbs.test.js), and snapshots are stored in [`src/__snapshots__`](./src/__snapshots__).

### Visual regression testing
HIG runs visual regression tests via [Gemini](https://gemini-testing.github.io/). Each component package should put the gemini test files in [`src/__gemini__`](./src/__gemini__) folder, and the tests will be included in HIG visual tests suite automatically.