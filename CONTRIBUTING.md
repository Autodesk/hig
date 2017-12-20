## Contributing to HIG

### Filing Issues

**Suggestions**

The HIG project is meant to evolve with feedback - the project and its users greatly appreciate any thoughts on ways to improve the design or features. Please use the `enhancement` tag to specifically denote issues that are suggestions - this helps us triage and respond appropriately.

**Bugs**

As with all pieces of software, you may end up running into bugs. Please submit bugs as regular issues on GitHub - HIG developers are regularly monitoring issues and will try to fix open bugs quickly.

The best bug reports include a detailed way to predictably reproduce the issue, and possibly even a working example that demonstrates the issue.

### Contributing Code

The HIG project accepts and greatly appreciates contributions. The project follows the [fork & pull](https://help.github.com/articles/using-pull-requests/#fork--pull) model for accepting contributions.

When contributing code, please also include appropriate tests as part of the pull request, and follow the same comment and coding style as the rest of the project. Take a look through the existing code for examples of the testing and style practices the project follows.

### Contributing Features

All pull requests for new features must go through the following process:
* Please familiarize yourself with the [DEVELOPING](DEVELOPING.md) resources
* Start an Intent-to-implement GitHub issue for discussion of the new feature.
* LGTM from Tech Lead and one other core committer is required
* Development occurs on a separate branch of a separate fork, noted in the intent-to-implement issue
* A pull request is created, referencing the issue.
* HIG developers will provide feedback on pull requests, looking at code quality, style, tests, performance, and directional alignment with the goals of the project. That feedback should be discussed and incorporated
* LGTM from Tech Lead and one other core committer, who confirm engineering quality and direction.

#### Fork the project
Fork the `hig` project with your GitHub account.

#### Create a new branch off of the `development` branch
On your fork, locally, create a new branch off of `development`.
The name of your branch should include the type of change it holds, a brief description of the changes, and the issue number if relevant.
E.g. Fixing a typo in the readme as discussed in issue #101 would have a branch name like this:
```
bugs/fix-readme-type-101
```

#### Develop new functionality
Read [DEVELOPING](DEVELOPING.md) for more information about how to develop within this project. Once your changes are complete ensure your branch meets testing, coverage, and linting standards.
	- Ensure changes are tested
	- Add to the playground for manual testing if needed
	- Ensure branch meets testing, coverage, and linting standards
		- `yarn test --coverage`
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

- Tech Lead: Thijs Bernolet (@recyclerobot)

### See Also

* [DEVELOPING](DEVELOPING.md)
