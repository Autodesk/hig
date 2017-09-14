#!/usr/bin/env node
var request = require('request');

const localPackagePath = '../package.json';
const remotePackageUrl = 'https://raw.githubusercontent.com/Autodesk/hig/master/src/implementations/react/package.json';

// Log a message to the console with timestamp
function info(infoString) {
  console.log(`[validate-version.js ${Date.now()}]: ${infoString}`);
}

// Takes two symantic version strings and returns the highest one
// Returns null if equal
function getHighestVersion(version1, version2) {
  if (version1 !== version2) {
    const tokens = [version1, version2].map((version) =>
      version.split(/\./).map((token) => Number(token))
    );
    const numTokens = Math.min(...tokens.map((version) => version.length));
    for (var i = 0; i < numTokens; ++i) {
      if (tokens[0][i] > tokens[1][i]) {
        return version1;
      } else if (tokens[1][i] > tokens[0][i]) {
        return version2;
      }
    }
  }
  return null;
}

// Get the package.json version from the local codebase
function getLocalVersion() {
  const localPackageJson = require(localPackagePath);
  return localPackageJson.version;
}

// Get the package.json version from github master
function withRemoteVersion(successCallback, errorCallback) {
  request(remotePackageUrl, function(error, response) {
    if (String(response.statusCode).match(/2\d\d/)) {
      const packageJson = JSON.parse(response.body);
      successCallback(packageJson.version);
    } else {
      errorCallback(error, response.statusCode);
    }
  });
}

// Exit the script with a success message
function exitSuccess() {
  info('Passed!');
  info('Finished');
  return process.exit(0);
}

// Exit the script with a failure message, the two versions that produced
// the failure as arguments
function exitFailure(localVersion, remoteVersion) {
  info('Failed! Local version must be higher than remote version.');
  info('Finished');
  return process.exit(1);
}

// Exit with an error message, the error message string as argument
function exitError(message) {
  info(message);
  info('Exiting')
  process.exit(1); // exit failure
}

// Main

info('Starting');

const localVersion = getLocalVersion();

info(`Local version is ${localVersion}`);

withRemoteVersion(function(remoteVersion) {
  info(`Remote version is ${remoteVersion}`);
  const highestVersion = getHighestVersion(remoteVersion, localVersion);
  switch (highestVersion) {
    case null:
      exitFailure(localVersion, remoteVersion);
      break;
    case remoteVersion:
      exitFailure(localVersion, remoteVersion);
      break;
    case localVersion:
      exitSuccess();
      break;
    default:
      exitError("Unspecified error");
      break;
  }
}, function(error, code) {
  exitError(`Error retreiving remote version:\n`
    + `Error message: ${error}\n`
    + `Http code: ${code}`
  );
});
