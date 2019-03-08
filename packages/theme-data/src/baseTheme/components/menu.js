import { BORDER_RADIUS, COLOR, LENGTH, SPACING } from "../../consts/types";

export default {
  "menu.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.component.backgroundColor"
    }
  },
  "menu.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "menu.topFlushBorderTopRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "menu.item.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.component.backgroundColor"
    }
  },
  "menu.item.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.1
    }
  },
  "menu.item.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "menu.item.hover.backgroundColor"
    }
  },
  "menu.item.active.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.1
    }
  },
  "menu.item.horizontalPadding": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "menu.item.verticalPadding": {
    type: SPACING,
    value: {
      ref: "basics.spacings.mediumSmall"
    }
  },
  "menu.item.minHeight": {
    type: LENGTH,
    value: {
      ref: "density.spacings.large"
    }
  },
  "menu.item.gutterWidth": {
    type: SPACING,
    value: {
      ref: "basics.spacings.mediumSmall"
    }
  }
};
