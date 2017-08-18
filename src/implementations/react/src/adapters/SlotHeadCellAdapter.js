import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";

export class SlotHeadCellAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
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
        case "width": {
          this.hig.setWidth(propValue);
          break;
        }
      }
    }
  }
}

const SlotHeadCellComponent = createComponent(SlotHeadCellAdapter);

SlotHeadCellComponent.propTypes = {
  slot: PropTypes.string,
  width: PropTypes.string
};

SlotHeadCellComponent.__docgenInfo = {
  props: {
    slot: {
      description: "sets {String} in cell"
    },
    width: {
      description: "sets {String} width of the cell"
    }
  }
};
