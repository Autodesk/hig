import {readPackage} from 'read-pkg';
import createReleaseConfig from './src/index';

const packageName = readPackage.sync().name;

module.exports = createReleaseConfig({ packageName });
