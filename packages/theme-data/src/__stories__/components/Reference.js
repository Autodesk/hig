import React from "react";
import { Text } from "@hig/typography";

export default function Reference({ children }) {
  return (
    <div>
      <Text>
        Reference to: <code>{children}</code>
      </Text>
    </div>
  );
}
