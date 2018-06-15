import monorepoConfig from "semantic-release-monorepo";
import readPkg from "read-pkg";

import createGitHubSuccessComment from "./createGitHubSuccessComment";

const packageName = readPkg.sync().name;

export default {
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
