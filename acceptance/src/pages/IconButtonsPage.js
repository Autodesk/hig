import React from 'react';
import IconButton from '@hig/icon-button';
import { Assets24, Assets16, AddFolder24, AddFolder16, Calendar24, Calendar16, Location24, Location16, Tag24, Tag16 } from '@hig/icons';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

const highDensityIcons = [
  Assets16, AddFolder16, Calendar16, Location16, Tag16
];

const mediumDensityIcons = [
  Assets24, AddFolder24, Calendar24, Location24, Tag24
];

function IconButtonsPage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ThemeRepeater>
        {({ theme, level }) => {
          return (
            theme.metadata.densityId === "high-density"
                ? highDensityIcons.map(Icon =>
                    <span key={Icon.name}>
                      <IconButton 
                        icon={<Icon />}
                        title={Icon.name}
                        surface={level}
                      />
                      <IconButton
                        icon={<Icon />}
                        title={Icon.name}
                        surface={level}
                        on
                      />
                      <Spacer />
                    </span>
                  )
                : mediumDensityIcons.map(Icon =>
                    <span key={Icon.name}>
                      <IconButton
                        icon={<Icon />}
                        title={Icon.name}
                        surface={level}
                      />
                      <IconButton
                        icon={<Icon />}
                        title={Icon.name}
                        surface={level}
                        on
                      />
                      <Spacer />
                    </span>
                  ) 
          );
        }}
      </ThemeRepeater>
    </div>
  );
}

export default IconButtonsPage;
