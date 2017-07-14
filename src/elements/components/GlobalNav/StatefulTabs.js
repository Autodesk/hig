import React from 'react';

import Tabs2 from './Tabs2';
import Tab2 from './Tab2';

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
      child => (isTab(child) ? this.renderTab(child) : null)
    );
    return (
      <Tabs2>
        {tabs}
      </Tabs2>
    );
  }

  renderTab(tab) {
    const { id } = tab.props;

    return (
      <Tab2
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
