import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { Tabs, Tab, Dropdown } from "../../hig-react";

const wrapperStyles = {
  width: "300px",
  border: "1px solid rgba(0,0,0,0.2)",
  padding: "0 12px 24px 24px"
};

class TabsSection extends PureComponent {
  state = {
    activeTabIndex: 0,
    align: "center"
  };

  setActiveTabIndex = activeTabIndex => {
    this.setState({ activeTabIndex });
  };

  changeAlignment = align => {
    this.setState({ align });
  };

  render() {
    return (
      <PlaygroundSection title="Tabs">
        <div style={wrapperStyles}>
          <Tabs
            activeTabIndex={this.state.activeTabIndex}
            onTabChange={this.setActiveTabIndex}
            align={this.state.align}
          >
            <Tab label="Details">Details content</Tab>
            <Tab label="Activities">Activities content</Tab>
            <Tab label="Inspector">Inspector content</Tab>
          </Tabs>
        </div>
        <Dropdown
          label="Tab alignment"
          options={[
            { label: "Left", id: "left", value: "left" },
            { label: "Center", id: "center", value: "center" },
            { label: "Right", id: "right", value: "right" }
          ]}
          value={this.state.align}
          onChange={this.changeAlignment}
        />
      </PlaygroundSection>
    );
  }
}

export default TabsSection;
