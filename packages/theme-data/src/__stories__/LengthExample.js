import React from "react";
import Reference from "./Reference";

export default function LengthExample({ role, schema, themeConfig, theme }) {
  return (
    <div>
      <div>{theme[role]}</div>
      {themeConfig.ref ? <Reference ref={themeConfig.ref} /> : null}
    </div>
  );
}
