import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ProfileButtonPresenter from "./ProfileButtonPresenter";

describe("profile-flyout/presenters/ProfileButtonPresenter", () => {
  takeSnapshotsOf(ProfileButtonPresenter, [
    {
      description: "renders with avatarName",
      props: {
        avatarName: "Wolfgang Pauli"
      }
    },
    {
      description: "renders with all props",
      props: {
        avatarName: "Richard Feynman",
        avatarImage: "richard_phillips_feynman.png",
        onClick: function handleClick() {}
      }
    }
  ]);
});
