import React from "react";
import Reference from "./Reference";
import { Text } from "@hig/typography";

export default function LengthExample({ role, schema, themeConfig, theme }) {
  return (
    <div>
      <Text>{theme[role]}</Text>
      {themeConfig.ref ? <Reference ref={themeConfig.ref} /> : null}
    </div>
  );
}
