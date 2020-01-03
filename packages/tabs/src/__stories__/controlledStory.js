import React, { Component } from "react";
import Tabs, { Tab } from "../index";
import Button from "@hig/Button";
import RichText from "@hig/rich-text";

export default class ControlledTabs extends Component {
  state = {
    activeTab: 0
  };

  render() {
    return (
      <Tabs
        activeTabIndex={this.state.activeTab}
        onTabChange={i => {
          this.setState({ activeTab: i });
        }}
      >
        <Tab label="Details" key="details">
          <RichText>Details content</RichText>
          <Button
            onClick={() => {
              this.setState({ activeTab: 1 });
            }}
            title="Switch to Activities tab"
          />
        </Tab>
        <Tab label="Activities" key="activities">
          <RichText>Activities content</RichText>
          <Button
            onClick={() => {
              this.setState({ activeTab: 2 });
            }}
            title="Switch to Inspector tab"
          />
        </Tab>
        <Tab label="Inspector" key="inspector">
          <RichText>Inspector content</RichText>
          <Button
            onClick={() => {
              this.setState({ activeTab: 0 });
            }}
            title="Switch to Details tab"
          />
        </Tab>
      </Tabs>
    );
  }
}
