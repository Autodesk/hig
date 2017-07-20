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

import Tabs from '../../../adapters/Tabs';
import Tab from '../../../adapters/Tab';

class StatefulTab extends React.Component {
  // This is never actually rendered
  render() {
    return <div />;
  }
}

function isTab(child) {
  return child != null && child.type === StatefulTab;
}

class StatefulTabs extends React.Component {
  constructor(props) {
    super(props);
    const selectedTabId = this.getInitialSelectedTabId();
    this.state = { selectedTabId };
  }

  getInitialSelectedTabId() {
    const { defaultSelectedTabId, selectedTabId } = this.props;

    if (selectedTabId !== undefined) {
      return selectedTabId;
    } else if (defaultSelectedTabId !== undefined) {
      return defaultSelectedTabId;
    } else {
      // select first tab in absence of user input
      const tabs = this.getTabChildren();
      return tabs.length === 0 ? undefined : tabs[0].props.id;
    }
  }
  getTabChildren() {
    return React.Children.toArray(this.props.children).filter(isTab);
  }

  render() {
    const tabs = React.Children.map(
      this.props.children,
      child => isTab(child) ? this.renderTab(child) : null
    );
    return (
      <Tabs>
        {tabs}
      </Tabs>
    );
  }

  renderTab(tab) {
    const { id } = tab.props;

    return (
      <Tab
        {...tab.props}
        active={id === this.state.selectedTabId}
        onClick={this.handleTabClick.bind(this, id)}
      />
    );
  }

  handleTabClick(newTabId) {
    if (this.props.onChange) {
      this.props.onChange(newTabId, this.state.selectedTabId);
    }

    if (this.props.selectedTabId === undefined) {
      this.setState({ selectedTabId: newTabId });
    }
  }
}

StatefulTabs.Tab = StatefulTab;

export default StatefulTabs;
