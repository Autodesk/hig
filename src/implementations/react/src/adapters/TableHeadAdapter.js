import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";
import HIGNodeList from "../elements/HIGNodeList";
import HIGChildValidator from "../elements/HIGChildValidator";
import TextHeadCellComponent, {
  TextHeadCellAdapter
} from "./TextHeadCellAdapter";
import SlotHeadCellComponent, {
  SlotHeadCellAdapter
} from "./SlotHeadCellAdapter";

export class TableHeadAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };

    this.cells = new HIGNodeList({
      TextHeadCellAdapter: {
        type: TextHeadCellAdapter,
        HIGConstructor: this.hig.partials.TextHeadCell,
        onAdd: (instance, beforeInstance) => {
          this.hig.addCell(instance, beforeInstance);
        }
      },
      SlotHeadCellAdapter: {
        type: SlotHeadCellAdapter,
        HIGConstructor: this.hig.partials.SlotHeadCell,
        onAdd: (instance, beforeInstance) => {
          this.hig.addCell(instance, beforeInstance);
        }
      }
    });
  }

  componentDidMount() {
    this.cells.componentDidMount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "children": {
          //no-op
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case TextHeadCellAdapter:
        return this.cells.createElement(ElementConstructor, props);
      case SlotHeadCellAdapter:
        return this.cells.createElement(ElementConstructor, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, beforeChild = {}) {
    if (instance instanceof SlotHeadCellAdapter  || instance instanceof TextHeadCellAdapter) {
      this.cells.insertBefore(instance);
    } else {
      throw new Error(
        `${this.constructor.name} cannot have a child of type ${instance
          .constructor.name}`
      );
    }
  }
}

const TableHeadComponent = createComponent(TableHeadAdapter);

TableHeadAdapter.PropTypes = {
  children: HIGChildValidator([TextHeadCellComponent, SlotHeadCellComponent])
}

TableHeadComponent.__docgenInfo = {
  props: {
    children: {
      description: "support adding TextHeadCell and SlotHeadCell"
    }
  }
};

TableHeadComponent.TextHeadCell = TextHeadCellComponent;
TableHeadComponent.SlotHeadCell = SlotHeadCellComponent;

export default TableHeadComponent
