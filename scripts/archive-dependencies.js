const { createArchive, handleError } = require("./_archive");

async function start() {
  console.log("Archiving dependencies...");

  const archivePath = await createArchive(
    [".dependency-hash", "node_modules/**/*", "packages/*/node_modules/**/*"],
    "dependencies.tgz"
  );

  console.log(`Archive written to: ${archivePath}`);
}

start().catch(handleError);
