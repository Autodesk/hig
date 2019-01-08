import React from 'react';
import ProgressBar from '@hig/progress-bar';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

const states = [
  { props: { percentComplete: null } },
  { props: { percentComplete: 0 } },
  { props: { percentComplete: 33 } },
  { props: { percentComplete: 66 } },
  { props: { percentComplete: 100 } },
];

function ProgressBarPage() {
  return (
    <ThemeRepeater>{({ id }) => (
      <div style={{ minWidth: "50vw" }}>
        {states.map(({ props }) => {
          return (
            <div key={props.percentComplete}>
              <ProgressBar {...props}/>
              <Spacer spacing="xl" />
            </div>
          )
        })}
      </div>
    )}</ThemeRepeater>
  );
}

export default ProgressBarPage;
