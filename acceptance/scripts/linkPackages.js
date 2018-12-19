const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const PACKAGES_DIR = path.join(process.cwd(), '../packages');

function linkPackages() {
  const packages = fs.readdirSync(PACKAGES_DIR)
    .filter(node => fs.lstatSync(path.join(PACKAGES_DIR, node)).isDirectory());

  packages.forEach(function(pack) {
    const packagePath = path.join(PACKAGES_DIR, pack)
    exec("cd "+packagePath+" && yarn link", function(err) {
      if (err) {
        console.error(err);
        return;
      }

      try {
        const packageJson = JSON.parse(fs.readFileSync(path.resolve(packagePath, 'package.json')));

        return exec("yarn link "+packageJson.name, function(err) {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Linked "+pack+" package.");
        });
      } catch(error) {
        return null;
      }
    });
  });
}

linkPackages();
