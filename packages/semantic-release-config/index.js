const readPkg = require("read-pkg");
const createReleaseConfig = require("./build/index").default;

const packageName = readPkg.sync().name;

module.exports = createReleaseConfig({ packageName });
