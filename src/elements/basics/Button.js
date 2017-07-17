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
import * as HIG from 'hig.web';

import HIGElement from '../HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from '../../adapters/createComponent';


class Button extends HIGElement {
  constructor(initialProps) {
    super(HIG.Button, initialProps);
  }

  componentDidMount(){
    this.commitUpdate(this.props);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.processUpdateProps(updatePayload)
      .mapToHIGFunctions({
        title: 'setTitle',
        link: 'setLink',
        icon: 'setIcon',
        type: 'setType',
        size: 'setSize'
      })
      .mapToHIGEventListeners(['onClick', 'onHover', 'onFocus', 'onBlur'])
      .handle('disabled', value => {
        value ? this.hig.disable() : this.hig.enable();
      })

  }
}



const ButtonComponent = createComponent(Button);

Button.propTypes = {
  disabled: PropTypes.bool,
  link: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string, 
  icon: PropTypes.string
}

ButtonComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a button'
    },

    link: {
      description: 'sets the link of a button'
    },

    onClick: {
      description: 'triggers when you click the button'
    },

    onHover: {
      description: 'triggers when you hover over the button'
    }
  }
};



export default ButtonComponent;
