import * as HIG from "hig-vanilla";

import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";

export class TextLinkAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.TextLink, initialProps);
  }

  componentDidMount() {
    if (this.props.onClick) {
      this.commitUpdate(["onClick", this.props.onClick]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "href": {
          this.hig.setHref(propValue);
          break;
        }
        case "text": {
          this.hig.setText(propValue);
          break;
        }
        case "type": {
          this.hig.setType(propValue);
          break;
        }
        case "onClick": {
          const dispose = this._disposeFunctions.get("onClickDispose");

          if (dispose) {
            dispose();
          }

          if (!propValue) {
            return;
          }

          this._disposeFunctions.set(
            "onClickDispose",
            this.hig.onClick(propValue)
          );
          break;
        }
        default: {
          // No-op
        }
      }
    }
  }
}

const TextLinkComponent = createComponent(TextLinkAdapter);

TextLinkComponent.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string
};

TextLinkComponent.__docgenInfo = {
  props: {
    text: {
      description: "sets the text and alt-text of the link"
    },

    href: {
      description: "sets the link url or path"
    },

    type: {
      description: "specifies type of link"
    },

    onClick: {
      description: "triggers when you click the link"
    }
  }
};

export default TextLinkComponent;
