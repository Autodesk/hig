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
import * as HIG from 'hig-vanilla';

import HIGElement from '../../elements/HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from '../createComponent';

class PasswordFieldAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.PasswordField, initialProps);
  }

  componentDidMount() {
    var commitProps = [];
    if (this.initialProps.disabled) {
      commitProps.push('disabled',this.initialProps.disabled);
    }
    if (this.initialProps.required) {
      commitProps.push('required',this.initialProps.required)
    }
    if (this.initialProps.revealPassword) {
      commitProps.push('revealPassword',this.initialProps.revealPassword)
    }
    if (this.initialProps.showPasswordHideButton) {
      commitProps.push('showPasswordHideButton',this.initialProps.showPasswordHideButton)
    }
    if (this.initialProps.showPasswordRevealButton) {
      commitProps.push('showPasswordRevealButton',this.initialProps.showPasswordRevealButton)
    }
    this.commitUpdate(commitProps);
  }

  forceReset(props) {
    this.commitUpdate(['value', props.value]);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'disabled': {
          propValue ? this.hig.disable() : this.hig.enable();
          break;
        }
        case 'icon': {
          this.hig.setIcon(propValue);
          break;
        }
        case 'instructions': {
          this.hig.setInstructions(propValue);
          break;
        }
        case 'label': {
          this.hig.setLabel(propValue);
          break;
        }
        case 'name': {
          this.hig.setName(propValue);
          break;
        }
        case 'value': {
          this.hig.setValue(propValue);
          break;
        }
        case 'required': {
          propValue
            ? this.hig.required(propValue)
            : this.hig.noLongerRequired();
          break;
        }
        case 'onBlur': {
          const dispose = this._disposeFunctions.get('onBlurDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onBlurDispose',
            this.hig.onBlur(propValue)
          );
          break;
        }
        case 'onChange': {
          const dispose = this._disposeFunctions.get('onChangeDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onChangeDispose',
            this.hig.onChange(propValue)
          );
          break;
        }
        case 'onFocus': {
          const dispose = this._disposeFunctions.get('onFocusDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onFocusDispose',
            this.hig.onFocus(propValue)
          );
          break;
        }
        case 'onInput': {
          const dispose = this._disposeFunctions.get('onInputDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onInputDispose',
            this.hig.onInput(propValue)
          );
          break;
        }
        case 'onPasswordHideButtonClick': {
          const dispose = this._disposeFunctions.get('onPasswordHideButtonClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onPasswordHideButtonClickDispose',
            this.hig.onFocus(propValue)
          );
          break;
        }
        case 'onPasswordRevealButtonClick': {
          const dispose = this._disposeFunctions.get('onPasswordRevealButtonClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onPasswordRevealButtonClickDispose',
            this.hig.onFocus(propValue)
          );
          break;
        }
        case 'placeholder': {
          this.hig.setPlaceholder(propValue);
          break;
        }
        case 'revealPassword': {
          propValue ? this.hig.revealPassword() : this.hig.hidePassword();
          break;
        }
        case 'showPasswordHideButton': {
          propValue ? this.hig.showPasswordHideButton() : this.hig.hidePasswordHideButton();
          break;
        }
        case 'showPasswordRevealButton': {
          propValue ? this.hig.showPasswordRevealButton() : this.hig.hidePasswordRevealButton();
          break;
        }
        default: {
          console.warn(
            `${this.constructor.name} doesn't handle the prop ${propKey}`
          );
        }
      }
    }
  }
}

const PasswordFieldComponent = createComponent(PasswordFieldAdapter);

PasswordFieldComponent.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onPasswordHideButtonClick: PropTypes.func,
  onPasswordRevealButtonClick: PropTypes.func,
  placeholder: PropTypes.string,
  revealPassword: PropTypes.bool,
  showPasswordHideButton: PropTypes.bool,
  showPasswordRevealButton: PropTypes.bool,
  required: PropTypes.string,
  value: PropTypes.string
};

export default PasswordFieldComponent;
