import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Icon } from "../../hig-react";

const iconKeys = [
  "add",
  "archive",
  "assets",
  "attachment",
  "back",
  "bookmark",
  "building-ops",
  "calendar",
  "caret",
  "check-white",
  "checklist",
  "checkmark-blue-dark",
  "checkmark",
  "clear-small",
  "clock",
  "close-hamburger",
  "close-small",
  "close",
  "collaboration",
  "collapse-panel",
  "collapse",
  "comment",
  "compare",
  "complete",
  "copy",
  "cost-control",
  "document-management",
  "double-caret",
  "download",
  "edit",
  "expand-panel",
  "expand",
  "export",
  "external",
  "favorite",
  "field",
  "file-assembly",
  "file-document",
  "file-generic",
  "file-image",
  "file-part",
  "file-pdf",
  "file-presentation",
  "file-spreadsheet",
  "file-video",
  "file-zip",
  "filter-tokens",
  "filter",
  "folder-open",
  "folder",
  "forward",
  "globe",
  "grid",
  "hamburger",
  "help",
  "hidden",
  "home",
  "insight",
  "issue",
  "item",
  "layout",
  "list",
  "location",
  "lock",
  "model-coordination",
  "paste",
  "permission-group",
  "permission-individual",
  "photos",
  "play",
  "print",
  "profile",
  "project-management",
  "publish",
  "quantities",
  "redo",
  "rfi",
  "save",
  "search",
  "settings",
  "share",
  "sync",
  "tag",
  "trash",
  "undo",
  "unlock",
  "upload",
  "visible",
  "x-close-gray"
];

const iconKeys16 = [
  "add",
  "archive",
  "assets",
  "attachment",
  "back",
  "bookmark",
  "building-ops",
  "calendar",
  "checklist",
  "checkmark",
  "clock",
  "close",
  "collaboration",
  "collapse-panel",
  "comment",
  "compare",
  "complete",
  "copy",
  "cost-control",
  "document-management",
  "download",
  "edit",
  "expand-panel",
  "export",
  "external",
  "favorite",
  "field",
  "file-assembly",
  "file-document",
  "file-generic",
  "file-image",
  "file-part",
  "file-pdf",
  "file-presentation",
  "file-spreadsheet",
  "file-video",
  "file-zip",
  "filter",
  "filter-tokens",
  "folder",
  "folder-open",
  "forward",
  "globe",
  "grid",
  "help",
  "hidden",
  "home",
  "insight",
  "issue",
  "item",
  "layout",
  "list",
  "location",
  "lock",
  "model-coordination",
  "paste",
  "permission-group",
  "permission-individual",
  "photos",
  "play",
  "print",
  "profile",
  "project-management",
  "publish",
  "quantities",
  "redo",
  "rfi",
  "save",
  "search",
  "settings",
  "share",
  "sync",
  "tag",
  "trash",
  "undo",
  "unlock",
  "upload",
  "visible"
];

const newIcons = {
  rocket: `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g transform="translate(0,-952.36218)"><path style="color:#000000;enable-background:accumulate;" d="m 91.962707,960.39945 c -8.833296,-5.42939 -28.754496,3.29866 -45.961896,20.50613 -3.3128,3.31277 -6.3032,6.72353 -8.9273,10.12045 l -12.9931,-3.75652 -6.3639,17.67769 9.8994,4.2426 -4.9497,9.1924 11.3137,11.3137 9.1924,-4.9497 4.2427,9.8995 17.6777,-6.364 -3.7566,-12.9931 c 3.3969,-2.6242 6.8077,-5.6144 10.1205,-8.9272 17.207396,-17.20743 25.935496,-37.12872 20.506096,-45.96195 z m -14.849296,14.84924 c 2.7337,2.73362 2.7336,7.16587 0,9.89951 -2.7335,2.73361 -7.1658,2.73359 -9.8994,2e-5 -2.7337,-2.73368 -2.7337,-7.16593 -1e-4,-9.89954 2.7337,-2.73358 7.1659,-2.73364 9.8995,10e-6 z m -57.3198,48.12741 c -3.2117,0.1587 -6.5268,1.577 -9.1482,4.1985 -4.7243996,4.7245 -5.5374996,11.7071 -2.1211996,16.2635 4.5560996,3.4161 11.5388996,2.6031 16.2633996,-2.1214 2.6214,-2.6214 4.0398,-5.9364 4.1984,-9.1482 -2.5597,1.1119 -5.6411,0.6345 -7.734,-1.4584 -2.0929,-2.0929 -2.5703,-5.1743 -1.4584,-7.734 z" fill="#000000" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"></path></g></svg>`,
  planet: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 59" version="1.1" x="0px" y="0px"><title>6 -Planet- (space, astronomy)</title><desc>Created with Sketch.</desc><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-746.000000, -382.000000)" fill="#000000"><g transform="translate(746.000000, 382.000000)"><path d="M53,52 C52.448,52 52,52.448 52,53 C52,53.552 52.448,54 53,54 C53.552,54 54,53.552 54,53 C54,52.448 53.552,52 53,52"></path><path d="M57,9 C56.448,9 56,9.448 56,10 C56,10.552 56.448,11 57,11 C57.552,11 58,10.552 58,10 C58,9.448 57.552,9 57,9"></path><path d="M7,56 C6.448,56 6,56.448 6,57 C6,57.552 6.448,58 7,58 C7.552,58 8,57.552 8,57 C8,56.448 7.552,56 7,56"></path><path d="M5,3.9971 C5.285,4.3761 5.623,4.7151 6.003,5.0001 C5.623,5.2851 5.285,5.6231 5,6.0031 C4.715,5.6231 4.377,5.2851 3.997,5.0001 C4.377,4.7151 4.715,4.3761 5,3.9971 M4,9.0001 C4,9.5521 4.447,10.0001 5,10.0001 C5.553,10.0001 6,9.5521 6,9.0001 C6,7.3461 7.346,6.0001 9,6.0001 C9.553,6.0001 10,5.5521 10,5.0001 C10,4.4481 9.553,4.0001 9,4.0001 C7.346,4.0001 6,2.6541 6,1.0001 C6,0.4481 5.553,0.0001 5,0.0001 C4.447,0.0001 4,0.4481 4,1.0001 C4,2.6541 2.654,4.0001 1,4.0001 C0.447,4.0001 0,4.4481 0,5.0001 C0,5.5521 0.447,6.0001 1,6.0001 C2.654,6.0001 4,7.3461 4,9.0001"></path><path d="M43,38 C43.553,38 44,38.448 44,39 C44,39.552 43.553,40 43,40 L22,40 C21.447,40 21,39.552 21,39 C21,38.448 21.447,38 22,38 L43,38 Z M15,33 C15,32.448 15.447,32 16,32 L35,32 C35.553,32 36,32.448 36,33 C36,33.552 35.553,34 35,34 L16,34 C15.447,34 15,33.552 15,33 L15,33 Z M24,26 L34,26 C34.553,26 35,26.448 35,27 C35,27.552 34.553,28 34,28 L24,28 C23.447,28 23,27.552 23,27 C23,26.448 23.447,26 24,26 L24,26 Z M23,17 C22.447,17 22,16.552 22,16 C22,15.448 22.447,15 23,15 L33,15 C33.553,15 34,15.448 34,16 C34,16.552 33.553,17 33,17 L23,17 Z M33,9 L38,9 C38,9.695 38.105,10.366 38.295,11 L33,11 C32.447,11 32,10.552 32,10 C32,9.448 32.447,9 33,9 L33,9 Z M45,4 C47.757,4 50,6.243 50,9 C50,10.343 49.462,11.558 48.597,12.457 C48.561,12.495 48.526,12.534 48.489,12.571 C48.295,12.761 48.083,12.933 47.86,13.09 C47.814,13.122 47.767,13.154 47.719,13.185 C47.49,13.334 47.25,13.466 46.998,13.577 C46.951,13.598 46.903,13.615 46.855,13.634 C46.592,13.74 46.319,13.829 46.035,13.889 C46.004,13.896 45.972,13.899 45.94,13.905 C45.635,13.963 45.322,14 45,14 C42.243,14 40,11.757 40,9 C40,8.701 40.038,8.411 40.088,8.126 C40.104,8.037 40.122,7.948 40.143,7.86 C40.196,7.637 40.264,7.42 40.346,7.21 C40.385,7.108 40.428,7.007 40.474,6.908 C41.269,5.196 42.992,4 45,4 L45,4 Z M40,57 C38.776,57 37.724,56.261 37.258,55.207 L37.168,54.934 C37.114,54.77 37.075,54.616 37.047,54.468 C37.023,54.314 37,54.16 37,54 C37,52.346 38.346,51 40,51 C40.181,51 40.357,51.023 40.529,51.053 C40.583,51.063 40.636,51.075 40.689,51.088 C40.813,51.117 40.932,51.156 41.049,51.199 C41.116,51.225 41.183,51.25 41.248,51.28 C41.363,51.333 41.474,51.394 41.581,51.461 C41.668,51.516 41.751,51.577 41.832,51.641 C41.866,51.668 41.899,51.696 41.932,51.724 C42.225,51.977 42.475,52.286 42.659,52.647 L42.779,52.882 C42.919,53.228 43,53.604 43,54 C43,55.654 41.654,57 40,57 L40,57 Z M31.263,23 C30.71,23 30.263,22.552 30.263,22 C30.263,21.448 30.71,21 31.263,21 L55.435,21 C54.393,18.06 52.835,15.313 50.827,12.871 C51.567,11.761 52,10.431 52,9 C52,5.14 48.859,2 45,2 C42.752,2 40.753,3.07 39.472,4.722 C36.44,3.584 33.259,3 30,3 C23.587,3 17.692,5.251 13.056,9 L26.623,9 C27.176,9 27.623,9.448 27.623,10 C27.623,10.552 27.176,11 26.623,11 L10.838,11 C8.06,13.802 5.893,17.208 4.548,21 L24.661,21 C25.214,21 25.661,21.448 25.661,22 C25.661,22.552 25.214,23 24.661,23 L3.926,23 C3.662,23.98 3.45,24.98 3.298,26 L15,26 C15.553,26 16,26.448 16,27 C16,27.552 15.553,28 15,28 L3.082,28 C3.033,28.661 3,29.327 3,30 C3,30.673 3.033,31.339 3.082,32 L8.737,32 C9.29,32 9.737,32.448 9.737,33 C9.737,33.552 9.29,34 8.737,34 L3.298,34 C3.837,37.615 5.094,40.999 6.921,44 L22.942,44 C23.495,44 23.942,44.448 23.942,45 C23.942,45.552 23.495,46 22.942,46 L8.268,46 C9.052,47.062 9.911,48.065 10.838,49 L31,49 C31.553,49 32,49.448 32,50 C32,50.552 31.553,51 31,51 L13.056,51 C17.692,54.749 23.587,57 30,57 C31.89,57 33.781,56.788 35.637,56.392 C36.489,57.938 38.114,59 40,59 C42.757,59 45,56.757 45,54 C45,53.501 44.904,53.028 44.767,52.572 C47.521,50.77 49.89,48.553 51.773,46 L29.175,46 C28.622,46 28.175,45.552 28.175,45 C28.175,44.448 28.622,44 29.175,44 L53.1,44 C54.94,40.969 56.17,37.583 56.697,34 L43,34 C42.447,34 42,33.552 42,33 C42,32.448 42.447,32 43,32 L56.921,32 C56.969,31.338 57,30.672 57,30 C57,27.617 56.677,25.267 56.067,23 L31.263,23 Z"></path></g></g></g></svg>`,
  raygun: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path fill="#000000" d="M83.838,51.516c7.533-5.484,12.515-12.99,12.515-12.99s-12.348-18.876-27.58-18.876H38.885v11.023  l-4.721,1.265v-6.051h-2.885v6.824l-6.913,1.852v-4.335h-2.884v5.108l-10.046,2.69c-0.194-2.411-2.19-4.312-4.651-4.312  c-2.589,0-4.688,2.099-4.688,4.688s2.099,4.688,4.688,4.688c2.461,0,4.456-1.902,4.651-4.312l10.046,2.691v5.108h2.884v-4.336  l6.913,1.851v6.824h2.885v-6.05l4.721,1.264v11.023H48.5v1.604c0,4.371,3.539,7.908,7.909,7.908h3.973l5.592,0.147  c4.37,0,7.909,3.539,7.909,7.909v4.14c0,4.943,9.292,4.943,9.292,4.943c4.369,0,8.829-0.578,8.829-4.943V62.713  c-4.071-5.556-2.268-3.035-8.16-11.195L83.838,51.516z M67.166,59.185c0,2.338-2.32,4.233-5.183,4.233h-5.325  c-2.861,0-5.183-1.896-5.183-4.233v-1.764c0-0.091,0.027-0.178,0.033-0.269c0.064-0.828,0.418-1.589,0.977-2.222  c0.003-0.006,0.008-0.012,0.014-0.014c0.181-0.202,0.384-0.392,0.603-0.564c0.037-0.03,0.083-0.052,0.12-0.081  c0.196-0.143,0.399-0.28,0.619-0.399c0.094-0.049,0.199-0.086,0.295-0.132c0.184-0.082,0.36-0.17,0.556-0.236  c0.165-0.056,0.348-0.088,0.522-0.133c0.142-0.033,0.277-0.08,0.424-0.104c0.329-0.055,0.669-0.082,1.021-0.082h5.325  c0.351,0,0.69,0.027,1.021,0.082c0.146,0.025,0.282,0.07,0.422,0.104c0.091,0.021,0.17,0.058,0.257,0.082l-3.883,6.182l2.794,1.122  c1.808-1.924,2.967-3.846,3.72-5.612c0.458,0.589,0.761,1.268,0.816,2.005c0.007,0.092,0.033,0.178,0.033,0.27v1.766H67.166z"></path></svg>`
};

const parentContainerStyles = {
  display: "flex",
  flexWrap: "wrap"
};

class IconSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="Icon">
        <div className="test-container hig__rich-text">
          <h3>Included 24px Icons</h3>
          <div style={parentContainerStyles}>
            {iconKeys.map(key => {
              return <Icon nameOrSVG={key} key={key} />;
            })}
          </div>
        </div>

        <div className="test-container-1 hig__rich-text">
          <h3>Included 16px Icons</h3>
          <div style={parentContainerStyles}>
            {iconKeys16.map(key => {
              return <Icon nameOrSVG={key} size="16" key={key} />
            })}
          </div>
        </div>

        <div className="test-container-1 hig__rich-text">
          <h3>SVG Icons</h3>
          <div style={parentContainerStyles}>
            {Object.keys(newIcons).map(key => {
              return <Icon nameOrSVG={newIcons[key]} key={key} />;
            })}
          </div>
        </div>

      </PlaygroundSection>
    );
  }
}

export default IconSection;
