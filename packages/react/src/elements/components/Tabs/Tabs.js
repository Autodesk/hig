import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs as VanillaTabs } from "hig-vanilla";
import TabsAdapter from "../../../adapters/Tabs/TabsAdapter";
import Tab from "./Tab";

export default class Tabs extends Component {
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
        <TabsAdapter align={this.props.align}>
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
  /**
   * Specify how to justify the tabs within their container
   */
  align: PropTypes.oneOf(VanillaTabs.AvailableAlignments),
  /**
   * Called when user activates a tab
   */
  onTabChange: PropTypes.func,
  /**
   * Accepts Tab components
   */
  children: PropTypes.node
};

Tabs.defaultProps = {
  align: "center",
  onTabChange: () => {}
};
