import React from "react";
import Swatch from "./Swatch";
import Reference from "./Reference";
import { Text } from "@hig/typography";

export default function ColorExample({ role, schema, themeConfig, theme }) {
  return (
    <div>
      <Swatch color={theme[role]} />
      <Text>{theme[role]}</Text>
      {themeConfig[role].ref ? (
        <Reference>{themeConfig[role].ref}</Reference>
      ) : null}
    </div>
  );
}
