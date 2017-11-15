const registryUrl = require("registry-url");
const fetch = require("node-fetch");
const url = require("url");

// Get the package.json version published to NPM
async function fetchPublishedVersion(packagePublishedName) {
  const remotePackageUrl = url.resolve(registryUrl(), packagePublishedName);
  return fetch(remotePackageUrl)
    .then(res => res.json())
    .then(pkg => pkg["dist-tags"].latest);
}

module.exports = fetchPublishedVersion;
