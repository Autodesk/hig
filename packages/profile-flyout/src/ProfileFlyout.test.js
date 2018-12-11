import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ProfileFlyout from "./ProfileFlyout";

describe("profile-flyout/ProfileFlyout", () => {
  takeSnapshotsOf(ProfileFlyout, [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        email: "thelma@autodesk.com",
        image: "http://placekitten.com/g/32/32",
        name: "Thelma Dickinson",
        open: true
      }
    }
  ]);
});
