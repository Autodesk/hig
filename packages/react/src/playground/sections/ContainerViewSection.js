import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import {
  ContainerView,
  ContainerViewContent,
  ContainerViewLeft,
  ContainerViewRight
} from "../../hig-react";

class ContainerViewSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PlaygroundSection title="Container View Section">
        <ContainerView>
          <ContainerViewLeft open>
            <div>container view left</div>
          </ContainerViewLeft>
          <ContainerViewContent>
            <div>ContainerViewContent</div>
          </ContainerViewContent>
          <ContainerViewRight open>
            <div>container view right</div>
          </ContainerViewRight>
        </ContainerView>
      </PlaygroundSection>
    );
  }
}

export default ContainerViewSection;
