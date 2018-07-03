import React from "react";
import { Text } from "@hig/typography";

export default function Value({ children }) {
  return (
    <div>
      <Text>
        <code>{children}</code>
      </Text>
    </div>
  );
}
