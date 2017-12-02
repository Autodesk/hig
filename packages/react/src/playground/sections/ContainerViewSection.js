import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import TableSection from "./TableSection";

import TypographySection from "./TypographySection";
import { Button, Tabs, Tab } from "../../hig-react";
import {
  ContainerView,
  ContainerViewContent,
  ContainerViewLeft,
  ContainerViewRight
} from "../../hig-react";

class ContainerViewSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isContainerLeftOpen: true,
      isContainerRightOpen: true,
      activeTabIndex: 0
    };
  }

  setActiveTabIndex = activeTabIndex => {
    this.setState({ activeTabIndex });
  };

  toggleContainerViewLeft = () => {
    this.setState({ isContainerLeftOpen: !this.state.isContainerLeftOpen });
  };

  toggleContainerViewRight = () => {
    this.setState({ isContainerRightOpen: !this.state.isContainerRightOpen });
  };

  render() {
    return (
      <PlaygroundSection title="Container View Section">
        <Button
          size="standard"
          title="Toggle Container View Left"
          onClick={this.toggleContainerViewLeft}
        />
        <Button
          size="standard"
          title="Toggle Container View Right"
          onClick={this.toggleContainerViewRight}
        />
        <ContainerView>
          <ContainerViewLeft open={this.state.isContainerLeftOpen}>
            <TypographySection />
          </ContainerViewLeft>
          <ContainerViewContent>
            <TableSection />
          </ContainerViewContent>
          <ContainerViewRight open={this.state.isContainerRightOpen}>
            <Tabs
              activeTabIndex={this.state.activeTabIndex}
              onTabChange={this.setActiveTabIndex}
            >
              <Tab label="Details">Details content</Tab>
              <Tab label="Activities">Activities content</Tab>
              <Tab label="Inspector">Inspector content</Tab>
            </Tabs>
          </ContainerViewRight>
        </ContainerView>
      </PlaygroundSection>
    );
  }
}

export default ContainerViewSection;
