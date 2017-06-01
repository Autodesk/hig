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

export class Item extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProps) {
    const mapping = {
      icon: 'setIcon',
      title: 'setTitle',
      link: 'setLink'
    };

    this.commitUpdateWithMapping(updatePayload, mapping)
  }
}

const ItemComponent = createComponent(Item);

ItemComponent.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

ItemComponent.__docgenInfo = {
  props: {
    icon: {
      description: 'sets the icon of an item'
    },

    title: {
      description: 'sets the title of an item'
    },

    link: {
      description: 'sets the link of an item'
    },

    onClick: {
      description: 'triggered when a link is clicked on'
    },

    onHover: {
      description: 'triggered when a link is hovered over'
    }
  }
};

export default ItemComponent;
