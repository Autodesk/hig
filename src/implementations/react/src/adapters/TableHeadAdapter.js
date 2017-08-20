// import HIGElement from "../elements/HIGElement";
// import * as PropTypes from "prop-types";
// import createComponent from "./createComponent";
// import HIGNodeList from "../elements/HIGNodeList";
// import TextHeadCellComponent, { TextHeadCellAdapter} from './TextHeadCellAdapter'

// export class TableHeadAdapter extends HIGElement {
//   constructor(HIGConstructor, initialProps) {
//     super(HIGConstructor, initialProps);

//     this.props = { ...initialProps };

//     this.cells = new HIGNodeList([
//       {
//         TextHeadCellAdapter: {
//           type: TextHeadCellAdapter,
//           HIGConstructor: this.hig.partials.TextHeadCell,
//           onAdd: (instance, beforeInstance) => {
//             this.hig.addCell(instance, beforeInstance);
//           }
//         }
//       }
//     ]);
//   }
// }
