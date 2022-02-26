import React from 'react';
import Tile from '@hig/tile';
import Spacer from '@hig/spacer';

import ImageHolder from '../fixtures/tile/ImageHolder';
import ThemeRepeater from '../components/ThemeRepeater';

function TilePage() {
  const orientation = "vertical";
  return (
    <ThemeRepeater>{() => (
      <div>
        <Tile 
          title="Hig Tile"
          type="flat"
          headerContainer={ImageHolder}
          backgroundColor="blue"
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}  
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          type="outline"
          headerContainer={ImageHolder}
          backgroundColor="blue"
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}  
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          type="solid"
          headerContainer={ImageHolder}
          backgroundColor="blue"
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle" 
          orientation={orientation} 
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          disabled type="flat"
          headerContainer={ImageHolder} 
          backgroundColor="blue"
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation} 
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          disabled
          type="outline"
          headerContainer={ImageHolder} 
          backgroundColor="blue"
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation} 
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          disabled
          type="solid"
          headerContainer={ImageHolder}
          backgroundColor="blue"
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}
        />
      </div>
    )}</ThemeRepeater>
  );
}

export default TilePage;
