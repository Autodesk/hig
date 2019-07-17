import React from 'react';
import { AddFolder24, AddFolder16, Calendar24, Calendar16, Location24, Location16, Tag24, Tag16 } from '@hig/icons';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

const highDensityIcons = [
  AddFolder16, Calendar16, Location16, Tag16
];

const mediumDensityIcons = [
  AddFolder24, Calendar24, Location24, Tag24
];

function IconsPage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ThemeRepeater>{({ theme }) => (
        theme.metadata.densityId === "high-density"
          ? highDensityIcons.map(Icon => <span key={Icon.name}><Icon /><Spacer /></span>)
          : mediumDensityIcons.map(Icon => <span key={Icon.name}><Icon /><Spacer /></span>)
      )}</ThemeRepeater>
    </div>
  );
}

export default IconsPage;
