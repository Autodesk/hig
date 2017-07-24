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
import { mount } from 'enzyme';
import * as HIG from 'hig.web';
import React from 'react';

import GlobalNav from '../../../adapters/GlobalNavAdapter';
import Tabs from './Tabs';

const Context = props => {
  return (
    <GlobalNav>
      <GlobalNav.SubNav>
        <Tabs>
          <Tabs.Tab active={props.active} label={props.label} key={props.id} />
        </Tabs>
      </GlobalNav.SubNav>
    </GlobalNav>
  );
};

describe('<Tab>', () => {
  it('renders a tab', () => {
    const initialProps = { label: 'Such Tab', key: 1, id: 1 };
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context {...initialProps} />, {
      attachTo: reactContainer
    });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  it('updates props', () => {
    const initialProps = { label: 'Such Tab', key: 2, id: 2 };
    const updatedProps = { label: 'Many Tab', key: 3, id: 3 };
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context {...initialProps} />, {
      attachTo: reactContainer
    });

    wrapper.setProps(updatedProps);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });
});
