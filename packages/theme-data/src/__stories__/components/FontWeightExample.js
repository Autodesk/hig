import React from "react";
import { Text } from "@hig/typography";

export default function FontWeightExample({ role, theme }) {
  const value = theme[role];
  return (
    <div>
      <Text>
        <div style={{ fontWeight: value }}>{value}</div>
      </Text>
    </div>
  );
}
