const fs = require("fs");
const SVGO = require("svgo");

const svgo = new SVGO({
  plugins: [
    { removeViewBox: false },
    { removeUselessStrokeAndFill: false },
    { collapseGroups: true },
    { mergePaths: false },
    { convertPathData: false },
    { convertShapeToPath: false },
    {
      accessibility: {
        type: "full",
        active: true,
        fn(data, _params) {
          const svg = data.content[0];

          if (svg.isElem("svg")) {
            if (!svg.hasAttr("role")) {
              svg.addAttr({
                name: "role",
                value: "img",
                prefix: "",
                local: "role"
              });
            }
            if (!svg.hasAttr("title")) {
              svg.addAttr({
                name: "title",
                value: "___###NAME###___",
                prefix: "",
                local: "title"
              });
            }
          }

          return data;
        }
      }
    }
  ]
});

const distLocation = `${__dirname}/../src/elements/components/Icons/release/`;
if (!fs.existsSync(distLocation)) fs.mkdirSync(distLocation);
const distfile = `${__dirname}/../src/elements/components/Icons/release/hig-icons-bundle.js`;
const srcLocation = `${__dirname}/../src/elements/components/Icons/src/`;

fs.writeFileSync(distfile, "const HIGIcons = {}; \n");

fs.readdir(srcLocation, (err, filenames) => {
  if (err) {
    console.log(`[x] ERROR: ${err}`);
    return;
  }

  filenames.filter(f => f[0] !== ".").forEach(filename => {
    const data = fs.readFileSync(srcLocation + filename, "utf8");
    if (!data) console.log("[x] ERROR: NO DATA");
    const cleanFileName = filename.replace(".svg", "");

    // CLEANUP FILE AND MINIMIZE
    svgo.optimize(data, result => {
      // EXPORT TO JS FILE
      let svgString = `HIGIcons['${cleanFileName}'] = `;
      svgString += `"${result.data
        .replace("___###NAME###___", cleanFileName)
        .replace(/"/g, '\\"')}";\n`;

      fs.appendFileSync(distfile, svgString); // write to our dist file
    });
  });

  fs.appendFileSync(distfile, "export default HIGIcons; \n");

  console.log(`Icons bundle created in: ${distfile}`);
});
