const registryUrl = require("registry-url");
const fetch = require("node-fetch");
const url = require("url");
const localPackageJson = require("../../package.json");

const remotePackageUrl = url.resolve(registryUrl(), localPackageJson.name);

// Get the package.json version published to NPM
async function fetchPublishedVersion() {
  return fetch(remotePackageUrl)
    .then(res => res.json())
    .then(pkg => pkg["dist-tags"].latest);
}

module.exports = fetchPublishedVersion;
