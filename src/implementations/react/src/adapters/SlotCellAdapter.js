import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";

export class SlotCellAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
  }

  static childContextTypes = {
    parent: PropTypes.shape({
      appendChild: PropTypes.func
    })
  };

  componentDidMount() {
    if (this.props.slot) {
      this.commitUpdate(["slot", this.props.slot]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "slot": {
          this.hig.addSlot(propValue);
          break;
        }
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
}

const SlotCellComponent = createComponent(SlotCellAdapter, {parent: null});

SlotCellComponent.propTypes = {
  children: PropTypes.node
};

SlotCellComponent.__docgenInfo = {
  props: {
    children: {
      description: "content for slot cell"
    }
  }
};

export default SlotCellComponent;
