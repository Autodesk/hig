## Contributing to HIG

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Filing Issues](#filing-issues)
  - [Suggestions](#suggestions)
  - [Bug Reports](#bug-reports)
- [Contributing Code](#contributing-code)
- [Contributing Features](#contributing-features)
  - [Fork the project](#fork-the-project)
  - [Create a new branch off of the `development` branch](#create-a-new-branch-off-of-the-development-branch)
  - [Develop new functionality](#develop-new-functionality)
  - [Create a pull request](#create-a-pull-request)
- [Open source governance](#open-source-governance)
- [See Also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Filing Issues

The HIG project is meant to evolve with feedback - the project and its users greatly appreciate any thoughts on ways to improve the design or features. There are three type of issues you may file: suggestions, bug reports and requests for code contributions.

#### Suggestions

 Please use the `enhancement` tag to specifically denote issues that are suggestions - this helps us triage and respond appropriately.

#### Bug Reports

As with all pieces of software, you may end up running into bugs. Please submit bugs as regular issues on GitHub - HIG developers are regularly monitoring issues and will try to fix open bugs quickly.

The best bug reports include a detailed way to predictably reproduce the issue, and a working example that demonstrates the issue, if possible.

### Contributing Code

The HIG project accepts and greatly appreciates contributions. The project follows the [fork & pull](https://help.github.com/articles/using-pull-requests/#fork--pull) model for accepting contributions.

When contributing code, please also include appropriate tests as part of the pull request, and follow the same comment and coding style as the rest of the project. Take a look through the existing code for examples of the testing and style practices the project follows.

Please view the [contribution example][] for an example of the recommended package structure, and follow the guidelines in the HIG React [architecture document](ARCHITECTURE.md).

[contribution example]: ./docs/sample-component

### Contributing Features

All pull requests for new features must go through the following process:

* Please familiarize yourself with the [Developing guide](DEVELOPING.md).
* Start an Intent-to-implement GitHub issue for discussion of the new feature. HIG developers will review the request and start a discussion. For new HIG React controls, a UX designer may be brought in to review the proposal.
* Written approval from the HIG engineering team (GitHub comment) must be received before any pull requests are submitted.
* Development occurs on a separate branch of a separate fork, noted in the intent-to-implement issue
* Commit messages should adhere to the [Angular Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).
* A pull request is created, referencing the issue.
* HIG developers will provide feedback on pull requests, looking at code quality, style, tests, performance, and directional alignment with the goals of the project. That feedback should be discussed and incorporated.
* Approval via code review from the Tech Lead and another core committer, who can confirm engineering quality and direction.

There are two primary types of code contributions, which have somewhat different requirements. 
* React Component
  * Add a [Storybook](DEVELOPING.md#Storybook) integration for the component.
  * A [visual regression test](DEVELOPING.md#visual-regression-testing) must be added for the component.
  * Add unit tests using the [Jest/Enzyme system](DEVELOPING.md#Unit-testing)
  * Include details on how to use the component in the README file. Use the button component as an example. This documentation is included in the storybook.
  * Follow the [JSDoc style guide](https://github.com/shri/JSDoc-Style-Guide) for documentation commenting conventions. These comments generate documentation in the storybook.
* Theming Component
  * Include documentation on how to use the theming data in an application in the component README file.

#### Fork the project

Fork the `hig` project with your GitHub account.

#### Create a new branch off of the `development` branch

On your fork, locally, create a new branch off of `development`.
The name of your branch should include the type of change it holds, a brief description of the changes, and the issue number if relevant.
E.g. Fixing a typo in the readme as discussed in issue #101 would have a branch name like this:

```
docs/fix-readme-type-101
```

#### Develop new functionality
Read [DEVELOPING](DEVELOPING.md) for more information about how to develop within this project. Once your changes are complete ensure your branch meets testing, coverage, and linting standards.
	- Ensure changes are tested
	- Add to the Storybook for manual testing if needed
	- Ensure branch meets testing, coverage, and linting standards
		- `yarn test-ci`
		- `yarn lint`

#### Create a pull request

When you're ready for feedback, create a pull request against the `development` branch. The title of your pull request should be a concise description of the changes within it. The description of the PR should include the reason behind your PR, a brief explanation of your approach, and highlights of any especially interesting or potentially surprising details. If the change is visual, add a screenshot or gif to the pull request description.

When you create a pull request, our continuous integration system automatically runs tests,ensures test coverage stays above a threshold, and ensures code complies with linting standards. All CI checks must pass before the pull request is ready to merge.

A core committer will review your pull request and provide feedback or merge it into `development` as appropriate.

### Open source governance

The HIG project's chief and primary concern is with the development of HIG Interface and platform specific implementations, an open source library of components which increase developer efficiency and provide a consistent look and feel to web applications across Autodesk. The look and feel of components is based on Autodesk Human Interface guidelines designs and the various product teams that contribute to HIG. The HIG project's governance model thus reflects only the need to steer the engineering direction of the components and not any other activities which are out of scope.

Our governance model is as follows:

There is a single Tech Lead, who will have the final say on all decisions regarding technical direction.
The Tech Lead directs the Core Committers, whose members include the Tech Lead and those who have been appointed by the Tech Lead as Core Committers.
In the event the Tech Lead is unable to perform his or her duties, or abdicates, the Core Committers can select a new Tech Lead from amongst themselves.
In the event there are no Core Committers, Autodesk Inc. will appoint one.
Core Committers:

- Tech Lead: Stacey Shkuratoff (@staceyshk)

### See Also

* [DEVELOPING](DEVELOPING.md)
