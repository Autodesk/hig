/**
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */
import * as HIG from "hig-vanilla";

import HIGElement from "../../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "../createComponent";

import HIGNodeList from "../../elements/HIGNodeList";
import HIGChildValidator from "../../elements/HIGChildValidator";
import OptionComponent, { OptionAdapter } from "./OptionAdapter";

export class DropdownAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Dropdown, initialProps);

    this.options = new HIGNodeList({
      type: OptionAdapter,
      HIGConstructor: this.hig.partials.Option,
      onAdd: (instance, beforeInstance) => {
        this.hig.addOption(instance, beforeInstance);
      }
    });
  }

  componentDidMount() {
    this.options.componentDidMount();

    if (this.props.open) {
      this.commitUpdate(["open", this.props.open]);
    }

    if (this.props.disabled) {
      this.commitUpdate(["disabled", this.props.disabled]);
    }

    if (this.props.selectedOptionLabel) {
      this.commitUpdate([
        "selectedOptionLabel",
        this.props.selectedOptionLabel
      ]);
    }

    if (this.props.required) {
      this.commitUpdate(["required", this.props.required]);
    }

    if (this.props.onBlur) {
      this.commitUpdate(["onBlur", this.props.onBlur]);
    }

    if (this.props.onClickOutside) {
      this.commitUpdate(["onClickOutside", this.props.onClickOutside]);
    }

    if (this.props.onFocus) {
      this.commitUpdate(["onFocus", this.props.onFocus]);
    }

    if (this.props.onKeypress) {
      this.commitUpdate(["onKeypress", this.props.onKeypress]);
    }

    if (this.props.onTargetClick) {
      this.commitUpdate(["onTargetClick", this.props.onTargetClick]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "label": {
          this.hig.setLabel(propValue);
          break;
        }
        case "instructions": {
          this.hig.setInstructions(propValue);
          break;
        }
        case "placeholder": {
          this.hig.setPlaceholder(propValue);
          break;
        }
        case "open": {
          if (propValue) {
            this.hig.open();
          } else {
            this.hig.close();
          }
          break;
        }
        case "disabled": {
          if (propValue) {
            this.hig.disable();
          } else {
            this.hig.enable();
          }
          break;
        }
        case "selectedOptionLabel": {
          this.hig.setSelectedOptionLabel(propValue);
          break;
        }
        case "required": {
          if (propValue) {
            this.hig.required(propValue);
          } else {
            this.hig.noLongerRequired();
          }
          break;
        }
        case "onBlur": {
          const dispose = this._disposeFunctions.get("onBlur");

          if (dispose) {
            dispose();
          }
          this._disposeFunctions.set(
            "onBlurDispose",
            this.hig.onBlur(propValue)
          );
          break;
        }
        case "onClickOutside": {
          const dispose = this._disposeFunctions.get("onClickOutside");

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onClickOutsideDispose",
            this.hig.onClickOutside(propValue)
          );
          break;
        }
        case "onFocus": {
          const dispose = this._disposeFunctions.get("onFocus");

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onFocusDispose",
            this.hig.onFocus(propValue)
          );
          break;
        }
        case "onKeypress": {
          const dispose = this._disposeFunctions.get("onKeypress");

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onKeypressDispose",
            this.hig.onKeypress(propValue)
          );
          break;
        }
        case "onTargetClick": {
          const dispose = this._disposeFunctions.get("onTargetClick");

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onTargetClickDispose",
            this.hig.onTargetClick(propValue)
          );
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

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case OptionAdapter:
        return this.options.createElement(ElementConstructor, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, beforeChild = {}) {
    if (instance instanceof OptionAdapter) {
      this.options.insertBefore(instance);
    } else {
      throw new Error(
        `${this.constructor.name} cannot have a child of type ${instance
          .constructor.name}`
      );
    }
  }

  openDropdown = () => {
    this.hig.open();
  };

  closeDropdown = () => {
    this.hig.close();
  };
}

const DropdownComponent = createComponent(DropdownAdapter);

DropdownComponent.propTypes = {
  label: PropTypes.string,
  instructions: PropTypes.string,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.string,
  onBlur: PropTypes.func,
  onClickOutside: PropTypes.func,
  onFocus: PropTypes.func,
  onKeypress: PropTypes.func,
  onTargetClick: PropTypes.func,
  setSelectedOptionLabel: PropTypes.func,

  children: HIGChildValidator([OptionComponent])
};

DropdownComponent.__docgenInfo = {
  props: {
    label: {
      description: "{string} label for the the dropdown"
    },
    instructions: {
      description: "{string} instructions for the dropdown"
    },
    open: {
      description: "{bool} opens the dropdown"
    },
    disabled: {
      description: "{bool} makes the dropdown disabled"
    },
    required: {
      description: "{string} makes the field required"
    },
    onBlur: {
      description:
        "Calls the provided callback when focus moves away from the dropdown"
    },
    onClickOutside: {
      description:
        "Calls the provided callback when the user clicks on the dropdown"
    },
    onFocus: {
      description:
        "Calls the provided callback when the user focuses on the dropdown"
    },
    onKeypress: {
      description:
        "Calls the provided callback when the user presses a key while the dropdown has focus"
    },
    onTargetClick: {
      description:
        "Calls the provided callback when the user clicks on the dropdown button"
    },
    setSelectedOptionLabel: {
      description: "Sets value of selected option as value of dropdown"
    }
  }
};

DropdownComponent.Option = OptionComponent;

export default DropdownComponent;
