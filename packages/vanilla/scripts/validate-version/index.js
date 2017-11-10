// !/usr/bin/env node
import fetchPublishedVersion from "./fetchPublishedVersion";
import getLocalVersion from "./getLocalVersion";

// Log a message to the console with timestamp
function info(infoString) {
  console.log(`[validate-version.js ${Date.now()}]: ${infoString}`);
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
function exitSuccess() {
  info("Passed!");
  info("Finished");
  return process.exit(0);
}

// Exit the script with a failure message, the two versions that produced
// the failure as arguments
function exitFailure() {
  info("Failed! Local version must be higher than published version.");
  info("Finished");
  return process.exit(1);
}

// Exit with an error message, the error message string as argument
function exitError(message) {
  info(message);
  info("Exiting");
  process.exit(1); // exit failure
}

// Main
async function validateVersion() {
  info("Starting");

  const localVersion = getLocalVersion();

  info(`Local version is ${localVersion}`);

  const publishedVersion = await fetchPublishedVersion();

  info(`Published version is ${publishedVersion}`);

  const highestVersion = getHighestVersion(publishedVersion, localVersion);
  switch (highestVersion) {
    case null:
      exitFailure(localVersion, publishedVersion);
      break;
    case publishedVersion:
      exitFailure(localVersion, publishedVersion);
      break;
    case localVersion:
      exitSuccess();
      break;
    default:
      exitError("Unspecified error");
      break;
  }
}

validateVersion();
