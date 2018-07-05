import monorepoConfig from "semantic-release-monorepo";

export default function createReleaseConfig({ packageName }) {
  return {
    ...monorepoConfig,
    tagFormat: `${packageName}@\${version}`,
    prepare: [
      "@semantic-release/changelog",
      "@semantic-release/npm",
      "upgrade-dependents/semantic-release",
      "@semantic-release/git"
    ],
    success: []
  };
}
