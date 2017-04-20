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
// import HIG, { Slot } from './react-hig-fiber'; -- todo switch to 16.0.0-alpha.5 of react and react-dom
import { Button, Menu, Slot as Slot2 } from './react-hig';

import './hig-web.css';
import 'ionicons/css/ionicons.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonLabel: 'Hello HIG',
      fn: false,
      group1: true,
      group3: true
    };
  }

  handleChange = event => {
    const buttonLabel = event.target.value;
    this.setState(() => {
      return { buttonLabel };
    });
  };

  fn1 = () => this.setState({ fn: true });

  fn2 = () => this.setState({ fn: false });
  toggleGroup1 = () => this.setState({ group1: !this.state.group1 });

  toggleGroup3 = () => this.setState({ group3: !this.state.group3 });

  render() {
    const actualFn = this.state.fn ? this.fn2 : this.fn1;

    return (
      <div>

        <div>
          <h1>React Components Adapter</h1>

          <Button>Hello World</Button>
          <Menu>
            <Menu.Top />
            <Menu.Sidebar open={true}>
              <Menu.Sidebar.Group small>
                <Menu.Sidebar.Item>Item 1.1</Menu.Sidebar.Item>
                <Menu.Sidebar.Item>Item 1.2</Menu.Sidebar.Item>
              </Menu.Sidebar.Group>
              <Menu.Sidebar.Group>
                <Menu.Sidebar.Item>Item 2.1</Menu.Sidebar.Item>
                <Menu.Sidebar.Item>Item 2.2</Menu.Sidebar.Item>
              </Menu.Sidebar.Group>
            </Menu.Sidebar>

            <Slot2>
              <p>Some DOM Content! {this.state.buttonLabel}</p>
            </Slot2>
          </Menu>
        </div>

        <div>
          <h1>React Fiber Custom Renderer</h1>

          <HIG>
            <hig-button>{this.state.buttonLabel}</hig-button>
            <hig-menu>
              <hig-menu-top onToggle={actualFn} />

              {this.state.group1 &&
                <Slot>
                  <p>Some DOM Content! {this.state.buttonLabel}</p>
                </Slot>}

              <hig-sidebar open={this.state.fn}>
                {this.state.group1 &&
                  <hig-sidebar-group>
                    <hig-sidebar-item>Group Above</hig-sidebar-item>
                  </hig-sidebar-group>}

                <hig-sidebar-group small>
                  <hig-sidebar-item onClick={this.toggleGroup1}>
                    Toggle Group Above
                  </hig-sidebar-item>
                  <hig-sidebar-item onClick={this.toggleGroup3}>
                    Toggle Group Below
                  </hig-sidebar-item>
                  <hig-sidebar-item onClick={actualFn}>
                    {this.state.buttonLabel}
                  </hig-sidebar-item>
                </hig-sidebar-group>

                {this.state.group3 &&
                  <hig-sidebar-group>
                    <hig-sidebar-item>Group Below</hig-sidebar-item>
                  </hig-sidebar-group>}
              </hig-sidebar>

            </hig-menu>
          </HIG>
        </div>

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
