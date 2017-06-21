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

export class Submodule extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    this.state = {
      title: initialProps.title,
      expanded: initialProps.expanded,
      query: initialProps.query,
    };
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    const mapping = {
      title: 'setTitle',
      link: 'setLink'
    };

    this.commitUpdateWithMapping(updatePayload, mapping);

    if (Object.keys(updatePayload).includes('title')) {
      this.state.title = updatePayload.title;
    }

    if (Object.keys(updatePayload).includes('query')) {
      this.state.query = updatePayload.query;
      this._render();
    }

    if (Object.keys(updatePayload).includes('expanded')) {
      this.state.expanded = updatePayload.expanded;
      this._render();
    }
  }

  matches(query) {
    if (!query) { return false };
    return this.state.title.toLowerCase().match(query.toLowerCase());
  }

  isVisible() {
    return this.state.isVisible;
  }

  _render() {
    if (
      this.matches(this.state.query) ||
      (!this.state.query && this.state.expanded)
    ) {
      this.hig.show();
      this.state.isVisible = true;
    } else {
      this.hig.hide();
      this.state.isVisible = false;
    }
  }
}

const SubmoduleComponent = createComponent(Submodule);

SubmoduleComponent.propTypes = {
  title: PropTypes.string,
  query: PropTypes.string,
  link: PropTypes.string,
  show: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

SubmoduleComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a submodule'
    },

    link: {
      description: 'sets the link of a submodule'
    },

    show: {
      description: 'show (used for filtering)'
    },

    active: {
      description: 'activates the submodule'
    },

    query: {
      description: 'search text to filter against'
    },

    onClick: {
      description: 'triggered when a link is clicked on'
    },

    onHover: {
      description: 'triggered when a link is hovered over'
    }
  }
};

export default SubmoduleComponent;
