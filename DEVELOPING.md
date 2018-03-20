# Developing - HIG

We use Yarn workspaces and Lerna to manage interdependencies between packages. To get set up, run this from the project root:

```bash
yarn
```

## Developing hig-vanilla
Find information about HIG-Vanilla here [DEVELOPING](packages/vanilla/README.md)

## Developing hig-react
Find information about HIG-React here [DEVELOPING](packages/react/README.md)

# Deployment

1. Switch to `development` branch.
1. `yarn update-packages  # Update package version numbers and adds tags and publish commit`
1. `git push --follow-tags  # Push development and new tags`
1. Create a pull request to merge `development` into `master`.
1. Merge.
