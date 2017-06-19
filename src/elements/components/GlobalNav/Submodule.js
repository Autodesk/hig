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
    this.state = { title: initialProps.title };
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
  }

  matches(query) {
    return this.state.title.toLowerCase().match(query.toLowerCase());
  }

  filter(query) {
    if (this.matches(query)) {
      this.hig.show();
      return true;
    } else {
      this.hig.hide();
      return false;
    }
  }
}

const SubmoduleComponent = createComponent(Submodule);

SubmoduleComponent.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  show: PropTypes.func,
  hide: PropTypes.func,
  activate: PropTypes.func,
  deactivate: PropTypes.func,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

SubmoduleComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of an Submodule'
    },

    link: {
      description: 'sets the link of an Submodule'
    },

    show: {
      description: 'show (used for filtering)'
    },

    hide: {
      description: 'hide (used for filtering)'
    },

    activate: {
      description: 'activates the Submodule'
    },

    deactivate: {
      description: 'deactivates the submodule'
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
