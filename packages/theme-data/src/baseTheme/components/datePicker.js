import {
  BORDER_WIDTH,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  SPACING,
} from "../../consts/types";

export default {
  "datePicker.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "datePicker.container.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "density.spacings.medium",
    },
  },
  "datePicker.container.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.large",
    },
  },
  "datePicker.cell.minHeight": {
    type: LENGTH,
    value: "36px",
  },
  "datePicker.cell.minWidth": {
    type: LENGTH,
    value: "36px",
  },
  "datePicker.standardDate.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "datePicker.standardDate.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "datePicker.standardDate.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular",
    },
  },
  "datePicker.selectedDate.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium",
    },
  },
  "datePicker.selectedDate.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "datePicker.selectedDate.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "datePicker.notableDate.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular",
    },
  },
  "datePicker.notableDate.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.active",
    },
  },
  "datePicker.notableDate.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "datePicker.restrictedDate.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular",
    },
  },
  "datePicker.restrictedDate.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.placeholder",
    },
    transform: {
      alpha: 0.4,
    },
  },
  "datePicker.restrictedDate.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "datePicker.day.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular",
    },
  },
  "datePicker.day.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "datePicker.day.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "datePicker.header.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium",
    },
  },
  "datePicker.header.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "datePicker.header.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.large",
    },
  },
  "datePicker.header.paddingBottom": {
    type: SPACING,
    value: {
      ref: "density.spacings.large",
    },
  },
  "datePicker.cell.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level250",
    },
  },
  "datePicker.cell.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "datePicker.standardDateCell.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "datePicker.standardDateCell.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover",
    },
  },
  "datePicker.standardDateCell.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "datePicker.standardDateCell.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "datePicker.standardDateCell.focus.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "datePicker.standardDateCell.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus",
    },
  },
  "datePicker.standardDateCell.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "datePicker.standardDateCell.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed",
    },
  },
  "datePicker.selectedDateCell.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500",
    },
  },
  "datePicker.selectedDateCell.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500",
    },
  },
  "datePicker.selectedDateCell.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.900",
    },
    transform: {
      alpha: 0.25,
    },
  },
  "datePicker.selectedDateCell.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "datePicker.rangeDateCell.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.default",
    },
  },
  "datePicker.rangeDateCell.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.hover",
    },
  },
  "datePicker.rangeDateCell.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.focus",
    },
  },
  "datePicker.rangeDateCell.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus",
    },
  },
  "datePicker.rangeDateCell.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "datePicker.rangeDateCell.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed",
    },
  },
  "datePicker.currentDateCell.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "datePicker.currentDateCell.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "datePicker.currentDateCell.default.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "datePicker.currentDateCell.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover",
    },
  },
  "datePicker.currentDateCell.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "datePicker.currentDateCell.hover.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "datePicker.currentDateCell.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "datePicker.currentDateCell.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "datePicker.currentDateCell.focus.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "datePicker.currentDateCell.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus",
    },
  },
  "datePicker.currentDateCell.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "datePicker.currentDateCell.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed",
    },
  },
  "datePicker.currentDateCell.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "datePicker.currentDateCell.pressed.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
};
