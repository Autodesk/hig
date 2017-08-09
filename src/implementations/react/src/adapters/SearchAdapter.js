
import * as PropTypes from 'prop-types';
import createComponent from './createComponent';
import HIGElement from '../elements/HIGElement';
export class SearchAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    ['showClearIcon', 'hideClearIcon', 'clear'].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });
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
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  componentDidMount() {
    this.clear();
    this.hig.onFocusIn(this.showClearIcon);
    this.hig.onFocusOut(this.hideClearIcon);
    this.hig.onClearIconClick(this.clear);
  }

  clear() {
    this.hig.setQuery('');
  }

  showClearIcon() {
    this.hig.showClearIcon();
  }

  hideClearIcon() {
    this.hig.hideClearIcon();
  }
}

const SearchComponent = createComponent(SearchAdapter);

SearchComponent.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  showClearIcon: PropTypes.func,
  hideClearIcon: PropTypes.func,
  onClearIconClick: PropTypes.func,
  onInput: PropTypes.func,
  onFocusIn: PropTypes.func,
  onFocusOut: PropTypes.func
};

SearchComponent.__docgenInfo = {
  props: {
    placeholder: {
      description: 'sets the placeholder'
    },

    query: {
      description: 'sets the search query'
    },

    showClearIcon: {
      description: '{func} show the clear input icon'
    },

    hideClearIcon: {
      description: '{func} hide the clear input icon'
    },

    onClearIconClick: {
      description: '{func} triggered when clear icon is clicked'
    },

    onInput: {
      description: 'triggered when search field has something entered'
    },

    onFocusIn: {
      description: 'triggered when search field is in focus'
    },

    onFocusOut: {
      description: 'triggered when search field is not in focus'
    }
  }
};

export default SearchComponent;
