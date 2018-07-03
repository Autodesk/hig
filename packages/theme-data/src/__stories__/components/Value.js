import React from "react";
import { Text } from "@hig/typography";
import InlineCode from "./InlineCode";

export default function Value({ children }) {
  return (
    <div>
      <Text>
        <InlineCode>{children}</InlineCode>
      </Text>
    </div>
  );
}
