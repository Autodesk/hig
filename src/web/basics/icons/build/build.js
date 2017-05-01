var fs   = require('fs'),
    path = require('path'),
    SVGO = require('svgo');

var svgo = new SVGO({
    plugins: [
        { removeViewBox: false },
        { removeUselessStrokeAndFill: false },
        { collapseGroups: true },
        { mergePaths: false },
        { convertPathData: false },
        { convertShapeToPath: false },
        { accessibility:
            {
                type: 'full',
                active: true,
                fn: function(data, params) {

                    var svg = data.content[0];

                    if (svg.isElem('svg')) {
                        if (!svg.hasAttr('role')) {
                            svg.addAttr({
                                name: 'role',
                                value: 'img',
                                prefix: '',
                                local: 'role'
                            });
                        }
                        if (!svg.hasAttr('title')) {
                            svg.addAttr({
                                name: 'title',
                                value: '___###NAME###___',
                                prefix: '',
                                local: 'title'
                            });
                        }
                    }

                    return data;
                }
            }
        }
    ]
});

var distLocation = __dirname + "/../release/";
if (!fs.existsSync(distLocation)) fs.mkdirSync(distLocation);
var distfile = __dirname + "/../release/hig-icons-bundle.js";
var srcLocation = __dirname + "/../src/";

fs.writeFileSync(distfile, "var HIGIcons = {}; module.exports = HIGIcons; \n");

fs.readdir(srcLocation, function(err, filenames) {
    if (err) {
        console.log('[x] ERROR: ' + err);
        return;
    }
    filenames.forEach(function(filename) {
        var data = fs.readFileSync(srcLocation + filename, 'utf8');
        if(!data) console.log('[x] ERROR: NO DATA');
        var cleanFileName = filename.replace(".svg", "");

        // CLEANUP FILE AND MINIMIZE
        svgo.optimize(data, function(result) {

            // EXPORT TO JS FILE
            var svg_string = "HIGIcons['" + cleanFileName + "'] = ";
            svg_string += '"' + result.data.replace('___###NAME###___', cleanFileName).replace(/"/g, '\\"') + '";\n';

            fs.appendFileSync(distfile, svg_string); // write to our dist file

        });
    });

    console.log("Icons bundle created in: "+distfile);
});