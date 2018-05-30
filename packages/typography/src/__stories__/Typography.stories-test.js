import React from "react";
import { storiesOf } from "@storybook/react";

import Typography from "../index";
import { _VALID_COLORS, _VALID_SIZES, _VALID_TYPES } from "../_constants";

_VALID_TYPES.map(type =>
  storiesOf("Typography", module).add(`${type}`, () => (
    <div>
      {_VALID_COLORS.map(color =>
        _VALID_SIZES.map(size => {
          const identifier = `${type} ${size} ${color}`;
          const testText = `The quick brown fox jumps over the lazy dog. (${identifier})`;
          const mappedProps = {
            color,
            size,
            type,
            text: testText
          };

          return (
            <div>
              <Typography {...mappedProps} />
              <Typography bold {...mappedProps} />
              <Typography disabled {...mappedProps} />
            </div>
          );
        })
      )}
    </div>
  ))
);
