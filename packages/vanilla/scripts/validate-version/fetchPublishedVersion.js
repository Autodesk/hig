import registryUrl from 'registry-url';
import fetch from 'node-fetch';
import url from 'url';
import localPackageJson from '../../package.json';

const remotePackageUrl = url.resolve(registryUrl(), localPackageJson.name);

// Get the package.json version published to NPM
async function fetchPublishedVersion() {
  return fetch(remotePackageUrl)
    .then(res => res.json())
    .then(pkg => pkg['dist-tags'].latest);
}

export default fetchPublishedVersion;
