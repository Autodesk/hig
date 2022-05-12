import monorepoConfig from "semantic-release-monorepo";

function createProductionReleaseConfig({ packageName }) {
  return {
    ...monorepoConfig,
    tagFormat: `${packageName}@\${version}`,
    prepare: [
      "@semantic-release/changelog",
      "@semantic-release/npm",
      "upgrade-dependents/semantic-release",
      "@semantic-release/git",
    ],
    success: [],
  };
}

function createDryRunReleaseConfig(payload) {
  return {
    ...createProductionReleaseConfig(payload),
    dryRun: true,
    ci: false,
    branch: "development",
    verifyConditions: [],
    prepare: [],
    publish: [],
  };
}

export default function createReleaseConfig(payload) {
  if (process.env.RELEASE_DRY_RUN) {
    return createDryRunReleaseConfig(payload);
  }

  return createProductionReleaseConfig(payload);
}
