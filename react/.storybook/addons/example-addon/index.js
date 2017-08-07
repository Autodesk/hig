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
import React, { PropTypes } from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

export class WithExampleInner extends React.Component {
  componentDidMount() {
    document.documentElement.style.height = '100%';
    document.querySelector('#root').style.height = '100%';

    const bodyStyle = {
      height: '100%',
      // Taken from https://github.com/airbnb/react-dates/blob/master/public/storybook.css
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px)',
      backgroundSize: '8px 8px',
    };

    Object.assign(document.body.style, bodyStyle);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="example" style={containerStyle}>
        {children}
      </div>
    );
  }
}

WithExampleInner.propTypes = {
  children: PropTypes.children,
};

export const WithExample = story => <WithExampleInner>{story()}</WithExampleInner>;
export default WithExample;

