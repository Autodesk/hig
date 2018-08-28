import React from "react";
import Button from "@hig/button";

function renderChildren() {
  return (
    <div className="hig__profile-flyout__content__links">
      <div className={"hig__profile-flyout__content__link"}>
        <Button
          title={"Sign Out"}
          type={"secondary"}
          link={"https://www.autodesk.com/"}
          size={"small"}
        />
      </div>
      <div className={"hig__profile-flyout__content__link"}>
        <Button
          title={"Profile Settings"}
          type={"secondary"}
          link={"https://www.autodesk.com/"}
          size={"small"}
        />
      </div>
    </div>
  );
}

export default [
  {
    description: "default",
    getProps: () => ({
      children: renderChildren(),
      email: "gonzalezd@autodesk.com",
      image: "https://placekitten.com/g/50/50",
      name: "David Gonzalez",
      profileSettingsLabel: "Profile Settings",
      profileSettingsLink: "https://www.autodesk.com/",
      signOutLabel: "Sign Out",
      signOutLink: "https://www.autodesk.com/"
    })
  }
];
