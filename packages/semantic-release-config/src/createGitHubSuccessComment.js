/* eslint-disable max-len, no-template-curly-in-string */

export default function createGitHubSuccessComment({ packageName }) {
  const subject =
    '<%= issue.pull_request ? "PR is included" : "issue has been resolved" %>';
  const mainHeading = `:tada: This ${subject} in \`${packageName}@<%= nextRelease.version %>\` :tada:`;
  const releaseInfosExp = "releases.filter(release => Boolean(release.name))";
  const hasReleasesExp = `${releaseInfosExp}.length > 0`;
  const releasesHeadingExp = '"The release is available on:"';
  const linkExp = "`* [${releaseInfo.name}](${releaseInfo.url})`";
  const releaseListExp = `${releaseInfosExp}.map(releaseInfo => ${linkExp}).join("\\n")`;
  const releasesExp = `${releasesHeadingExp} + "\\n\\n" + ${releaseListExp}`;
  const releases = `<%= ${hasReleasesExp} ? ${releasesExp} : "" %>`;

  return `${mainHeading}\n\n${releases}`;
}
