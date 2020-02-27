import {
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT
} from "../../consts/types";

export default {
  "table.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "table.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "table.fonSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "table.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.mediumExtraLarge"
    }
  },
  "table.title.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "table.item.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "table.row.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.hover"
    }
  },
  "table.row.selected.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.selected"
    }
  },
  "table.row.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.pressed"
    }
  },
  "table.header.borderTopColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  },
  "table.header.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.heavyweight"
    }
  },
  "table.row.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  }
};
