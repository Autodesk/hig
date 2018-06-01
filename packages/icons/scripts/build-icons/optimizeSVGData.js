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
        fn(data, _, options) {
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
                value: `${options.title}-${options.size}`,
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

function optimizeSVG(svg) {
  return new Promise((fullfill, reject) =>
    svgo.optimize(svg.data, svg).then(result => {
      const optimizedSvg = Object.assign(svg, { data: result.data });
      return fullfill(optimizedSvg, reject);
    })
  );
}

module.exports = optimizeSVG;
