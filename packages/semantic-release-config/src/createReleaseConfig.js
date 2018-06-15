import monorepoConfig from "semantic-release-monorepo";

import createGitHubSuccessComment from "./createGitHubSuccessComment";

export default function createReleaseConfig({ packageName }) {
  return {
    ...monorepoConfig,
    tagFormat: `${packageName}@\${version}`,
    prepare: [
      "@semantic-release/changelog",
      "@semantic-release/npm",
      "@semantic-release/git"
    ],
    success: [
      {
        path: "@semantic-release/github",
        successComment: createGitHubSuccessComment({ packageName })
      }
    ]
  };
}
