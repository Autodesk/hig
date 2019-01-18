import React, { Component } from 'react';

import Button from '@hig/button';
import Tooltip, { Text } from "@hig/tooltip";

import ThemeRepeater from '../components/ThemeRepeater';

class TooltipPage extends Component {
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
      <ThemeRepeater>{() => (
        <div style={{ width: "300px", height: "300px", display: "flex", padding: "64px" }}>
          <Tooltip
            open={this.state.open}
            anchorPoint={"top-center"}
            content={() => (
                <Text>Any content can go in here.</Text>
            )}
          >
            <Button title="Open flyout" onClick={this.toggleOpen} />
          </Tooltip>
        </div>
      )}</ThemeRepeater>
    );
  }
}

export default TooltipPage;
