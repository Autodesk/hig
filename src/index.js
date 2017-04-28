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
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Menu, Slot } from './react-hig';

import 'hig.web/dist/hig.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonLabel: 'Toggle HIG Menu',
      fn: false,
      group1: true,
      group3: true,
      open: true
    };
  }

  handleChange = event => {
    const buttonLabel = event.target.value;
    this.setState(() => {
      return { buttonLabel };
    });
  };

  handleClick = event => {
    this.setState({ open: !this.state.open });
  };

  fn1 = () => this.setState({ fn: true });

  fn2 = () => this.setState({ fn: false });
  toggleGroup1 = () => this.setState({ group1: !this.state.group1 });

  toggleGroup3 = () => this.setState({ group3: !this.state.group3 });

  render() {
    return (
      <div>
        <h1>React Components Adapter</h1>

        <Button title={this.state.buttonLabel} onClick={this.handleClick} />
        <Menu>
          <Menu.Sidebar open={this.state.open}>
            <Menu.Sidebar.Group>
              {this.state.group1 &&
                <Menu.Sidebar.Item title="Group 1 Item 1" />}
              <Menu.Sidebar.Item title="Group 1 Item 2" />

              {this.state.group1 &&
                <Menu.Sidebar.Item title="Group 1 Item 3" />}
            </Menu.Sidebar.Group>

            <Menu.Sidebar.Group>
              <Menu.Sidebar.Item title={this.state.buttonLabel} />
              <Menu.Sidebar.Item
                title="Toggle Group 1"
                onClick={this.toggleGroup1}
              />
            </Menu.Sidebar.Group>
          </Menu.Sidebar>

          <Menu.Content>
            <Menu.Content.Top
              logo="http://cdn1.digitalartsonline.co.uk/cmsdata/features/3437213/autodesk-logo-cmyk-color-logo-white-text-large-big-512.jpg"
              logoLink="http://google.com"
              onHamburgerClick={this.handleClick}
            />

            <Slot>
              <p>MY OWN CONTENT!</p>
              <Button title="Another HIG Button" />
            </Slot>
          </Menu.Content>
        </Menu>

        <input
          type="text"
          value={this.state.buttonLabel}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
