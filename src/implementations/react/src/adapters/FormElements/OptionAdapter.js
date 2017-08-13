import * as HIG from "hig-vanilla";

import HIGElement from "../../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "../createComponent";

export class OptionAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.props = { ...initialProps };
  }

  componentDidMount() {
    if (this.initialProps.selected) {
      this.hig.select();
    } else {
      this.hig.deselect();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "label": {
          this.hig.setLabel(propValue);
          break;
        }
        case "value": {
          this.hig.setValue(propValue);
          break;
        }
        case "selected": {
          if (propValue) {
            this.hig.select();
          } else {
            this.hig.deselect();
          }
          break;
        }
        case "onHover": {
          const dispose = this._disposeFunctions.get("onHover");

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onHoverDispose",
            this.hig.onHover(propValue)
          );
          break;
        }
        case "onClick": {
          const dispose = this._disposeFunctions.get("onClick");

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onClickDispose",
            this.hig.onClick(propValue)
          );
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const OptionComponent = createComponent(OptionAdapter);

OptionComponent.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

OptionComponent.__docgenInfo = {
  props: {
    label: {
      description: "sets {String} the label for Option"
    },
    value: {
      description: "sets {String} the value for the Option"
    },
    selected: {
      description: "{bool} to tell if option has been selected"
    },
    deactivate: {
      description: "{func} deactivates the Account"
    },
    onClick: {
      description:
        "{func} calls the provided callback when user clicks on the Option"
    },
    onHover: {
      description:
        "{func} calls the provided callback when user hovers over the Option"
    }
  }
};

export default OptionComponent;
