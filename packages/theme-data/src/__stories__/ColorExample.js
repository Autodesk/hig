import React from "react";
import Swatch from "./Swatch";
import Reference from "./Reference";

export default function ColorExample({ role, schema, themeConfig, theme }) {
  return (
    <div>
      <Swatch color={theme[role]} />
      <div>{theme[role]}</div>
      {themeConfig.ref ? <Reference ref={themeConfig.ref} /> : null}
    </div>
  );
}
