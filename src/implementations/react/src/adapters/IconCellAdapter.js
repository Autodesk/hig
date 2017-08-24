import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";

export class IconCellAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
  }

  componentDidMount() {
    if (this.props.icon) {
      this.commitUpdate(["icon", this.props.icon]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "icon": {
          this.hig.setIcon(propValue);
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

const IconCellComponent = createComponent(IconCellAdapter);

IconCellComponent.propTypes = {
  icon: PropTypes.string
};

IconCellComponent.__docgenInfo = {
  props: {
    icon: {
      description: "sets icon in cell"
    }
  }
};

export default IconCellComponent;
