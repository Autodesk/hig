const path = require("path");
const execSync = require("child_process").execSync;

const SEPARATOR = process.platform === "win32" ? ";" : ":",
  env = Object.assign({}, process.env);

env.PATH = path.resolve("./node_modules/.bin") + SEPARATOR + env.PATH;

module.exports = function myExecSync(cmd) {
  const output = execSync(cmd, {
    cwd: process.cwd(),
    env: env
  });

  console.log(output);
}
