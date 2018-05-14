# Developing - HIG

We use Yarn workspaces and Lerna to manage interdependencies between packages. To get set up, run this from the project root:

```bash
yarn
```

# Testing

## Unit Tests

Currently, to run Jest tests, run this from the project root:

```bash
cd packages/storybook
yarn test
```

## Visual Regression Tests

We use Gemini to ensure that changes do not break the visual presentation of components. We use Storybook to render an example of a component, then save a screenshot of the example to the repository.

```bash
cd packages/storybook
yarn gemini-update  # Update snapshots
yarn gemini         # Check components against committed snapshots
```

# Deployment

1. Switch to `development` branch.
1. `yarn update-packages  # Update package version numbers and adds tags and publish commit`
1. `git push --follow-tags  # Push development and new tags`
1. Create a pull request to merge `development` into `master`.
1. Merge.
