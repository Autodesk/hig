// !/usr/bin/env node
const fetchPublishedVersion = require("./fetchPublishedVersion");
const exec = require('../exec.js');
const packageName = process.argv[2];
const packageConfig = require('./getPackageConfig')(packageName);

// Log a message to the console with timestamp
function info(infoString) {
  console.log(`[publish-if-needed.js ${Date.now()}]: ${infoString}`);
}

// Takes two symantic version strings and returns the highest one
// Returns null if equal
function getHighestVersion(version1, version2) {
  if (version1 !== version2) {
    const tokens = [version1, version2].map(version =>
      version.split(/\./).map(token => Number(token))
    );
    const numTokens = Math.min(...tokens.map(version => version.length));
    for (let i = 0; i < numTokens; ++i) {
      if (tokens[0][i] > tokens[1][i]) {
        return version1;
      } else if (tokens[1][i] > tokens[0][i]) {
        return version2;
      }
    }
  }
  return null;
}

// Exit the script with a success message
function exitPublish() {
  info("Publishing");
  exec("npm publish")
  info("Finished");
  return process.exit(0);
}

// Exit the script with a failure message, the two versions that produced
// the failure as arguments
function exitNoPublish(localVersion, publishedVersion) {
  info(`Publication not needed.`);
  info("Finished");
  return process.exit(0);
}

// Exit with an error message, the error message string as argument
function exitError(message) {
  info(message);
  info("Exiting");
  process.exit(1); // exit failure
}

// Main
async function validateVersion() {
  info(`Checking version of ${packageName}`);

  const localVersion = packageConfig.version;

  info(`Local version is ${packageConfig.name}@${localVersion}`);

  const publishedVersion = await fetchPublishedVersion(packageConfig.name);

  info(`Published version is ${packageConfig.name}@${publishedVersion}`);

  const highestVersion = getHighestVersion(publishedVersion, localVersion);
  switch (highestVersion) {
    case null:
      exitNoPublish(localVersion, publishedVersion);
      break;
    case publishedVersion:
      exitNoPublish(localVersion, publishedVersion);
      break;
    case localVersion:
      exitPublish();
      break;
    default:
      exitError("Unspecified error");
      break;
  }
}

validateVersion();
