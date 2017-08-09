
import React from 'react';

import TabsAdapter from '../../../adapters/GlobalNav/SubNav/TabsAdapter';
import TabAdapter from '../../../adapters/GlobalNav/SubNav/TabAdapter';

class Tab extends React.Component {
  // This is never actually rendered
  render() {
    return <div />;
  }
}

function isTab(child) {
  return child != null && child.type === Tab;
}

class Tabs extends React.Component {
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
      <TabsAdapter>
        {tabs}
      </TabsAdapter>
    );
  }

  renderTab(tab) {
    const { id } = tab.props;

    return (
      <TabAdapter
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

Tabs.Tab = Tab;

export default Tabs;
