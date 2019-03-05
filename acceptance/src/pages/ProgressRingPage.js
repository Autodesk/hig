import React from 'react';
import ProgressRing from '@hig/progress-ring';

import ThemeRepeater from '../components/ThemeRepeater';

const states = [
  { props: { percentComplete: 0 } },
  { props: { percentComplete: 66 } },
  { props: { } },
];

function ProgressBarPage() {
  return (
    <ThemeRepeater>{({ id }) => (
      <div>
        {states.map(({ props }) => {
          return (
            <div key={props.percentComplete} style={{ display: "flex" }}>
              <ProgressRing size="xs" {...props}/>
              <ProgressRing size="s" {...props}/>
              <ProgressRing size="m" {...props}/>
              <ProgressRing size="l" {...props}/>
              <ProgressRing size="xl" {...props}/>
            </div>
          )
        })}
      </div>
    )}</ThemeRepeater>
  );
}

export default ProgressBarPage;
