const { createArchive, handleError } = require("./_archive");

async function start() {
  console.log("Archiving builds...");

  const archivePath = await createArchive(
    ["packages/*/build/**/*"],
    "builds.tgz"
  );

  console.log(`Archive written to: ${archivePath}`);
}

start().catch(handleError);
