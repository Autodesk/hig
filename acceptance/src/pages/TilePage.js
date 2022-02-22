import React from 'react';
import Tile from '@hig/tile';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

function TilePage() {
  return (
    <ThemeRepeater>{() => (
      <div>
        <Tile title="Learn React" type="flat" />
        <Spacer spacing="l" />
        <Tile title="Learn React" type="outline" />
        <Spacer spacing="l" />
        <Tile title="Learn React" type="solid" />
        <Spacer spacing="l" />
        <Tile title="Learn React" disabled type="flat" />
        <Spacer spacing="l" />
        <Tile title="Learn React" disabled type="outline" />
        <Spacer spacing="l" />
        <Tile title="Learn React" disabled type="solid" />
      </div>
    )}</ThemeRepeater>
  );
}

export default TilePage;
