/* Copyright 2016 Autodesk,Inc.

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

import HIGElement from '../../../HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from '../../../../adapters/createComponent';

export class Search extends HIGElement {
  componentDidMount() {
    this.hig.onInput(this.topNavSearchOnInput.bind(this));
    this.hig.onClearIconClick(this.topNavClearInput.bind(this));
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    const mapping = {
      placeholder: 'setPlaceholder',
    };
    super.commitUpdateWithMapping(updatePayload, mapping);
  }

  topNavSearchOnInput(event) {
    this.hig.showClearIcon();
    this.hig.setQuery(event.target.value);
  };

  topNavClearInput(event) {
    this.hig.setQuery("");
    this.hig.hideClearIcon();
  };

}

const SearchComponent = createComponent(Search);

SearchComponent.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string,
  showClearIcon: PropTypes.func,
  hideClearIcon: PropTypes.func,
  onClearIconClick: PropTypes.func,
  onInput: PropTypes.func,
  onFocusIn: PropTypes.func,
  onFocusOut: PropTypes.func
};

SearchComponent.__docgenInfo = {
  props: {
    setPlaceholder: { description: "{String} sets the placeholder text" },
    setQuery: { description: "{String} sets the search query text" },
    showClearIcon: { description: "{function} shows the clear input icon" },
    hideClearIcon: { description: "{function} hides the clear input icon" },
    onClearIconClick: { description: "{function} Triggers when user clicks clear icon" },
    onInput: { description: "{function} Triggers when user enters text into search field"},
    onFocusIn: { description: "{function} Triggers when input has focus"},
    onFocusOut: { description: "{function} Triggers when input loses focus"}
  }
};
export default SearchComponent;
