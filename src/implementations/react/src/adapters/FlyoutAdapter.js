import * as HIG from "hig-vanilla";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";
import HIGElement from "../elements/HIGElement";

class FlyoutAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Flyout, initialProps);
  }

  componentDidMount() {
    var commitProps = [];
    if (this.props.anchorPoint) {
      commitProps.push("anchorPoint", this.props.anchorPoint);
    }

    if (this.props.open) {
      commitProps.push("open", this.props.open);
    }

    if (this.props.onClickOutside) {
      commitProps.push("onClickOutside", this.props.onClickOutside);
    }

    if (this.props.target) {
      commitProps.push("target", this.props.target);
    }
    if (this.props.content) {
      commitProps.push("content", this.props.content);
    }

    this.commitUpdate(commitProps);
  }

  getChildContext() {
    return {
      parent: null
    };
  }

  _addTarget(element) {
    if (this.mounted) {
      this.hig.addTarget(element);
    } else {
      this.target = element;
    }
  }

  _addSlot(element) {
    if (this.mounted) {
      this.hig.addSlot(element);
    } else {
      this.slot = element;
    }
  }

  commitUpdate(updatePayload) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "anchorPoint": {
          this.hig.setAnchorPoint(propValue);
        }
        case "onClickOutside": {
          this._resetOnClickOutsideHandler(propValue);
          break;
        }
        case "open": {
          propValue ? this.hig.open() : this.hig.close();
          break;
        }
        case "children": {
          // no-op
          break;
        }
        case "target": {
          this._addTarget(propValue);
          break;
        }
        case "content": {
          this._addSlot(propValue);
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  _resetOnClickOutsideHandler(propValue) {
    const dispose = this._disposeFunctions.get("onClickOutsideDispose");
    if (dispose) {
      dispose();
    }

    this._disposeFunctions.set(
      "onClickOutsideDispose",
      this.hig.onClickOutside(propValue)
    );
    return dispose;
  }
}

const FlyoutAdapterComponent = createComponent(FlyoutAdapter);

FlyoutAdapterComponent.propTypes = {
  anchorPoint: PropTypes.string,
  onClickOutside: PropTypes.func,
  open: PropTypes.bool,
  target: PropTypes.node,
  children: PropTypes.node
};

FlyoutAdapterComponent.__docgenInfo = {
  props: {
    anchorPoint: {
      description: "where the flyout should be anchored relative to target"
    },
    onClickOutside: {
      description: "handler that triggers when you click away from the flyout"
    },
    open: { description: "True or False - sets flyout to open or closed" },
    target: { description: "target component to open the flyout" },
    content: { description: "HTML or flat text content for the flyout" },
    children: {
      description: "supports adding dom content to the body of the flyout"
    }
  }
};

FlyoutAdapterComponent.defaultProps = {
  anchorPoint: "top-right"
};

export default FlyoutAdapterComponent;
