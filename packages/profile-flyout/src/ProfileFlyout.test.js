import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ProfileFlyout from "./ProfileFlyout";

describe("profile-flyout/ProfileFlyout", () => {
  takeSnapshotsOf(ProfileFlyout, [
    {
      desc: "renders with no props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        email: "thelma@autodesk.com",
        image: "http://placekitten.com/g/32/32",
        name: "Thelma Dickinson",
        open: true,
      },
    },
  ]);
});
