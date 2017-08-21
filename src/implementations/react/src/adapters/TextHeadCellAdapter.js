import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";

export class TextHeadCellAdapter extends HIGElement {
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
        case "width": {
          this.hig.setWidth(propValue);
          break;
        }
        case "alignment": {
          this.hig.setAlignment(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const TextHeadCellComponent = createComponent(TextHeadCellAdapter);

TextHeadCellComponent.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  alignment: PropTypes.string
};

TextHeadCellComponent.__docgenInfo = {
  props: {
    text: {
      description: "sets {String} text in cell"
    },
    width: {
      description: "sets {String} width of the cell"
    },
    alignment: {
      description: "sets {String} text-position of cell"
    }
  }
};

export default TextHeadCellComponent;
