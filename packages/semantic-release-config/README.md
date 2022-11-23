# Semantic Release Configuration

> Semantic Release configuration for Weave packages

This package extends [semantic-release-monorepo][] to publish Weave packages via [semantic-release][].

Changes from `semantic-release-monorepo` include:

* A custom `tagFormat` matching `packageName@version`, e.g. `@hig/button@0.1.0`
* Changelog generation via [@semantic-release/changelog][]

[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-monorepo]: https://github.com/Updater/semantic-release-monorepo
[@semantic-release/changelog]: https://github.com/semantic-release/changelog
