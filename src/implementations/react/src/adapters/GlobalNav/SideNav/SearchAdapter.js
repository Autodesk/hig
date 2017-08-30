
import * as PropTypes from 'prop-types';
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';

export class SearchAdapter extends HIGElement {
  componentDidMount() {
    if (this.props.clearIconVisible !== undefined) {
      this.commitUpdate(['clearIconVisible', this.props.clearIconVisible]);
    }

    if (this.props.onClearIconClick !== undefined) {
      this.commitUpdate(['onClearIconClick', this.props.onClearIconClick]);
    }

    if (this.props.onInput !== undefined) {
      this.commitUpdate(['onInput', this.props.onInput]);
    }

    if (this.props.onFocus !== undefined) {
      this.commitUpdate(['onFocus', this.props.onFocus]);
    }

    if (this.props.onBlur !== undefined) {
      this.commitUpdate(['onBlur', this.props.onBlur]);
    }
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
        case 'value': {
          this.hig.setValue(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  forceReset(props) {
    this.commitUpdate(['value', props.value]);
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
