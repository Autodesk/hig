import PropTypes from 'prop-types';
import HIGElement from "../elements/HIGElement";
import createComponent from "./createComponent";
import HIGNodeList from "../elements/HIGNodeList";
import HIGChildValidator from "../elements/HIGChildValidator";
import TextCellComponent, {
  TextCellAdapter
} from "./TextCellAdapter";
import SlotCellComponent, {
  SlotCellAdapter
} from "./SlotCellAdapter";
import IconCellComponent, { IconCellAdapter } from "./IconCellAdapter";

export class TableRowAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };

    this.cells = new HIGNodeList({
      TextCellAdapter: {
        type: TextCellAdapter,
        HIGConstructor: this.hig.partials.TextCell,
        onAdd: (instance, beforeInstance) => {
          this.hig.addCell(instance, beforeInstance);
        }
      },
      SlotCellAdapter: {
        type: SlotCellAdapter,
        HIGConstructor: this.hig.partials.SlotCell,
        onAdd: (instance, beforeInstance) => {
          this.hig.addCell(instance, beforeInstance);
        }
      },
      IconCellAdapter: {
        type: IconCellAdapter,
        HIGConstructor: this.hig.partials.IconCell,
        onAdd: (instance, beforeInstance) => {
          this.hig.addCell(instance, beforeInstance);
        }
      }
    });
  }

  componentDidMount() {
    this.cells.componentDidMount();

    if (this.props.selected !== undefined) {
      this.commitUpdate(['selected', this.props.selected]);
    }
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
        case "selected": {
          propValue ? this.hig.select() : this.hig.deselect();
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
      case TextCellAdapter:
        return this.cells.createElement(ElementConstructor, props);
      case IconCellAdapter:
        return this.cells.createElement(ElementConstructor, props);
      case SlotCellAdapter:
        return this.cells.createElement(ElementConstructor, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, beforeChild = {}) {
    if (
      instance instanceof SlotCellAdapter ||
      instance instanceof TextCellAdapter || instance instanceof IconCellAdapter
    ) {
      this.cells.insertBefore(instance);
    } else {
      throw new Error(
        `${this.constructor.name} cannot have a child of type ${instance
          .constructor.name}`
      );
    }
  }

  removeChild(instance) {
    if (instance instanceof TextCellAdapter ||
      instance instanceof IconCellAdapter || instance instanceof SlotCellAdapter)
    {
      this.cells.removeChild(instance);
    }
    instance.unmount();
  }


}

const TableRowComponent = createComponent(TableRowAdapter);

TableRowAdapter.PropTypes = {
  children: HIGChildValidator([TextCellComponent, SlotCellComponent, IconCellComponent]),
  selected: PropTypes.bool
};

TableRowComponent.__docgenInfo = {
  props: {
    children: {
      description: "support adding TextHeadCell and SlotHeadCell"
    },
    selected: {
      description: "if true row appears selected"
    }
  }
};

TableRowComponent.TextCell = TextCellComponent;
TableRowComponent.SlotCell = SlotCellComponent;
TableRowComponent.IconCell = IconCellComponent;

export default TableRowComponent;
