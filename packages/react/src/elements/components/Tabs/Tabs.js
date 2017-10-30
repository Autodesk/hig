import React from "react";
import PropTypes from "prop-types";
import TabsAdapter from "../../../adapters/Tabs/TabsAdapter";
import Tab from "./Tab";

class Tabs extends React.Component {
  state = {
    activeTabIndex: this.defaultActiveTabIndex()
  };

  setActiveTab = activeTabIndex => {
    this.props.onTabChange(activeTabIndex);
    this.setState({ activeTabIndex });
  };

  defaultActiveTabIndex() {
    return this.props.activeTabIndex !== undefined
      ? this.props.activeTabIndex
      : 0;
  }

  renderActiveTabIndex() {
    return this.props.activeTabIndex !== undefined
      ? this.props.activeTabIndex
      : this.state.activeTabIndex;
  }

  render() {
    const activeTabIndex = this.renderActiveTabIndex();
    const tabs = React.Children.map(this.props.children, (tab, index) => {
      const { children, ...tabProps } = tab.props;
      return {
        active: index === activeTabIndex,
        content: children,
        tabProps,
        index
      };
    });
    const activeTab = tabs.find(({ index }) => index === activeTabIndex);

    return (
      <div>
        <TabsAdapter>
          {tabs.map(({ active, tabProps, index }) => (
            <Tab
              {...tabProps}
              active={active}
              activateTab={this.setActiveTab}
              key={index}
              index={index}
            />
          ))}
        </TabsAdapter>
        {activeTab ? activeTab.content : null}
      </div>
    );
  }
}

Tabs.propTypes = {
  onTabChange: PropTypes.func,
  children: PropTypes.node
};

Tabs.defaultProps = {
  onTabChange: () => {},
  children: null
};

Tabs.__docgenInfo = {
  props: {
    children: {
      description: "Accepts Tab components"
    },
    onTabChange: {
      description: "Called when user activates a tab"
    }
  }
};

export default Tabs;
