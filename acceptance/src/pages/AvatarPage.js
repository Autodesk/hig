import React from 'react';
import Avatar, { AVAILABLE_SIZES } from '@hig/avatar';
import Spacer from '@hig/spacer';

import ThemeRepeater from '../components/ThemeRepeater';

const people = [
  { name: "Aoo Bar" },
  { name: "G E" },
  { name: "K G" },
  { name: "N G" },
  { name: "R G" },
  { name: "V G" },
  { name: "Z D" },
  { image: "http://placekitten.com/64/64", name: "Place Kitten" }
]

function AvatarsPage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ThemeRepeater>{() => (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {people.map(p => (
            <div style={{ display: "flex", flexDirection: "row-reverse", marginBottom: "32px", alignItems: "baseline" }}>
              {AVAILABLE_SIZES.map(size => (
                  <div style={{ display: "flex" }}>
                    <Avatar size={size} {...p} />
                    <Spacer spacing="l" />
                  </div>
              ))}
              <Spacer spacing="l" />
            </div>
          ))}
        </div>
      )}</ThemeRepeater>
    </div>
  );
}

export default AvatarsPage;
