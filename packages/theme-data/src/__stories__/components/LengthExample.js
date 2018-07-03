import React from "react";
import Value from "./Value";

export default function LengthExample({ role, theme }) {
  return <Value>{theme[role]}</Value>;
}
