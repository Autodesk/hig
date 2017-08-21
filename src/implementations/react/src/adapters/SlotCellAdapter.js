import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";

export class SlotCellAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "text": {
          this.hig.setText(propValue);
          break;
        }
        case "alignment": {
          this.hig.setAlignment(propValue);
          break;
        }
        case "detail": {
          this.hig.setDetail(propValue);
          break;
        }
      }
    }
  }
}

const SlotCellComponent = createComponent(SlotCellAdapter);

SlotCellComponent.propTypes = {
  text: PropTypes.string,
  detail: PropTypes.string,
  alignment: PropTypes.string
};

SlotCellComponent.__docgenInfo = {
  props: {
    text: {
      description: "sets {String} text in cell"
    },
    alignment: {
      description: "sets {String} text-position of cell"
    },
    detail: {
      description: "sets {String} supporting text for cell in body of table"
    }
  }
};

export default SlotCellComponent;
