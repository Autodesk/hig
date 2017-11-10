import localPackageJson from '../../package.json';

// Get the package.json version from the local codebase
export default function getLocalVersion() {
  return localPackageJson.version;
}
