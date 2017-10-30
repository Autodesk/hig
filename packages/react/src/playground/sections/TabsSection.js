import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { Tabs, Tab } from "../../hig-react";

const wrapperStyles = {
  width: "300px",
  border: "1px solid rgba(0,0,0,0.2)",
  padding: "0 12px 24px 24px"
};

class AvatarSection extends PureComponent {
  state = { activeTabIndex: 0 };

  setActiveTabIndex = activeTabIndex => {
    this.setState({ activeTabIndex });
  };

  render() {
    return (
      <PlaygroundSection title="Tabs">
        <div style={wrapperStyles}>
          <Tabs
            activeTabIndex={this.state.activeTabIndex}
            onTabChange={this.setActiveTabIndex}
          >
            <Tab label="Details">Details content</Tab>
            <Tab label="Activities">Activities content</Tab>
            <Tab label="Inspector">Inspector content</Tab>
          </Tabs>
        </div>
      </PlaygroundSection>
    );
  }
}

export default AvatarSection;
