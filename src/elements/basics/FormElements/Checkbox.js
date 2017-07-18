/*
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

import HIGElement from '../../HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from '../../../adapters/createComponent';

class Checkbox extends HIGElement {
    constructor(initialProps) {
        super(HIG.Checkbox, initialProps);
    }

    componentDidMount() {
        this.commitUpdate(this.props);
    }

    commitUpdate(updatePayload, oldProps, newProps) {
        this.processUpdateProps(updatePayload)
            .mapToHIGFunctions({
                label: 'setLabel',
                name: 'setName',
                value: 'setValue',
            })
            .mapToHIGEventListeners(['onHover', 'onFocus', 'onChange'])
            .handle('disabled', value => {
                value ? this.hig.disable() : this.hig.enable();
            });
    }

}

const CheckboxComponent = createComponent(Checkbox);

Checkbox.propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    onHover: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string
};


export default CheckboxComponent;