import React from "react";
import TextLink from "@hig/text-link";

export default function HThreeTextLink(props) {
  const customStyles = (styles) => {
    return {
      ...styles,
      fontSize: "20px",
    };
  };
  return <TextLink {...props} stylesheet={customStyles} />;
}
