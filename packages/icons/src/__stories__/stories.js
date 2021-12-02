import { sizes } from "../sizes";

export default [
  {
    description: "size 24",
    getProps: () => ({
      size: sizes.PX_24
    })
  },
  {
    description: "size 20",
    getProps: () => ({
      size: sizes.PX_20
    })
  },
  {
    description: "size 16",
    getProps: () => ({
      size: sizes.PX_16
    })
  },
  {
    description: "size 12",
    getProps: () => ({
      size: sizes.PX_12
    })
  },
  {
    description: "UI",
    getProps: () => ({
      size: sizes.PX_UI
    })
  }
];
