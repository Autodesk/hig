# HIG Acceptance app

This package is for use by developers and designers to get feedback on components in development.

## Setup

Rendering components in development on the current branch requires some set up.

```
cd ../node_modules/react
yarn link react
cd ../acceptance
yarn bootstrap
```

## Starting the server

To see the acceptance app running in development run the following:

```
yarn start
```

## Deploying

Host work from this branch on the cloud to get feedback.

```
yarn deploy
```
