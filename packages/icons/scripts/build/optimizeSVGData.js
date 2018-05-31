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
          }

          return data;
        }
      }
    }
  ]
});

function optimizeSVG(svg) {
  return new Promise(((fullfill, reject) => {
    return svgo.optimize(svg.data, (result) => {
      const optimizedSvg = Object.assign(svg, { data: result.data} );
      return fullfill(optimizedSvg, reject)
    });
  }));
}

module.exports = optimizeSVG;
