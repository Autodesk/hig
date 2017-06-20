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
import createComponent from '../../../adapters/createComponent';
import HIGElement from '../../HIGElement';

export class Search extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    ['showClearIcon', 'hideClearIcon'].forEach(fn => { this[fn] = this[fn].bind(this) });
  }
  commitUpdate(updatePayload, oldProps, newProps) {
    const mapping = {
      placeholder: 'setPlaceholder',
      query: 'setQuery'
    };

    this.commitUpdateWithMapping(updatePayload, mapping);
  }

  componentDidMount() {
    this.hig.onFocusIn(this.showClearIcon);
    this.hig.onFocusOut(this.hideClearIcon);
  }

  showClearIcon() {
    this.hig.showClearIcon();
  }

  hideClearIcon() {
    this.hig.hideClearIcon();
  }
}

const SearchComponent = createComponent(Search);

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
