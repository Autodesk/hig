import React, { Component } from 'react';

import Button from '@hig/button';
import Flyout from "@hig/flyout";

import Surface from '../components/Surface';
import ThemeTitle from '../components/ThemeTitle';
import ThemeRepeater from '../components/ThemeRepeater';
import Text from '../components/Text';

class FlyoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    }
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <ThemeRepeater>
        <Surface style={{ width: "300px", height: "300px" }}>
          <ThemeTitle />
          <div style={{ display: "flex" }}>
            <Flyout
              open={this.state.open}
              // anchorPoint={anchorPoints.TOP_LEFT}
              content={() => (
                <Surface style={{ width: "200px" }} paddingSize={null}>
                  <Text>Any content can go in here.</Text>
                  <Text>Any content can go in here.</Text>
                  <Text>Any content can go in here.</Text>
                  <Text>Any content can go in here.</Text>
                  <Text>Any content can go in here.</Text>
                </Surface>
              )}
            >
              <Button title="Open flyout" onClick={this.toggleOpen} />
            </Flyout>
          </div>
        </Surface>
      </ThemeRepeater>
    );
  }
}

export default FlyoutPage;
