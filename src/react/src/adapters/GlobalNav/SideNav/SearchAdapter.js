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
import * as PropTypes from 'prop-types';
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';

export class SearchAdapter extends HIGElement {
  componentDidMount() {
    this.commitUpdate(['clearIconVisible', this.props.clearIconVisible]);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'placeholder': {
          this.hig.setPlaceholder(propValue);
          break;
        }
        case 'query': {
          this.hig.setQuery(propValue);
          break;
        }
        case 'clearIconVisible': {
          propValue ? this.hig.showClearIcon() : this.hig.hideClearIcon();
          break;
        }
        case 'onClearIconClick': {
          const dispose = this._disposeFunctions.get('onClearIconClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onClearIconClickDispose',
            this.hig.onClearIconClick(propValue)
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
        case 'onFocus': {
          const dispose = this._disposeFunctions.get('onFocusDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onFocusDispose',
            this.hig.onFocusIn(propValue)
          );
          break;
        }
        case 'onBlur': {
          const dispose = this._disposeFunctions.get('onBlurDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onBlurDispose',
            this.hig.onFocusOut(propValue)
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

const SearchComponent = createComponent(SearchAdapter);

SearchComponent.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  clearIconVisible: PropTypes.bool,
  onClearIconClick: PropTypes.func,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

SearchComponent.__docgenInfo = {
  props: {
    placeholder: {
      description: 'sets the placeholder'
    },

    query: {
      description: 'sets the search query'
    },

    clearIconVisible: {
      description: '{bool} show the clear input icon'
    },

    onClearIconClick: {
      description: '{func} triggered when clear icon is clicked'
    },

    onInput: {
      description: 'triggered when search field has something entered'
    },

    onFocus: {
      description: 'triggered when search field is in focus'
    },

    onBlur: {
      description: 'triggered when search field is not in focus'
    }
  }
};

export default SearchComponent;
