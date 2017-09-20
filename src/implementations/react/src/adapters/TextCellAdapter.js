import * as HIG from "hig-vanilla";
import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";
import HIGChildValidator from "../elements/HIGChildValidator";

export class TextCellAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
  }

  componentDidMount() {
    if (this.props.text) {
      this.commitUpdate(["text", this.props.text]);
    }

    if (this.props.alignment) {
      this.commitUpdate(["alignment", this.props.alignment]);
    }

    if (this.props.detail) {
      this.commitUpdate(["detail", this.props.detail]);
    }
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
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const TextCellComponent = createComponent(TextCellAdapter);

TextCellComponent.propTypes = {
  text: PropTypes.string,
  detail: PropTypes.string,
  alignment: PropTypes.string
};

TextCellComponent.__docgenInfo = {
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

export default TextCellComponent;
