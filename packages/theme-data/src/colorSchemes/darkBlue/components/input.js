export default {
  "input.borderBottomColor": {
    value: {
      ref: "basics.colors.white"
    }
  },
  "input.hover.borderBottomColor": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.75
    }
  },
  "input.focus.halo.color": {
    transform: {
      alpha: 0.35
    }
  },
  "input.active.halo.color": {
    transform: {
      alpha: 0.35
    }
  },
  "input.box.backgroundColor": {
    value: {
      ref: "colorScheme.surfaceLevel300Color"
    }
  },
  "input.borderColor": {
    value: {
      ref: "input.box.backgroundColor"
    },
    transform: {
      alpha: 1
    }
  },
  "input.box.borderBottomColor": {
    value: {
      ref: "input.box.backgroundColor"
    },
    transform: {
      alpha: 1
    }
  },
  "input.placeholder.fontColor": {
    value: {
      ref: "basics.colors.surfaceLightGrayLevel200"
    },
    transform: {
      alpha: 0.4
    }
  },
  "input.highlightColor": {
    value: {
      ref: "basics.colors.autodeskBlue400"
    },
    transform: {
      alpha: 0.35
    }
  },
  "input.halo.color": {
    value: {
      ref: "basics.colors.darkBlue200"
    },
    transform: {
      alpha: 0.2
    }
  }
};
