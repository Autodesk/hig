import React from "react";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return (
    <form>
        <DefaultExport {...otherProps}>{children}</DefaultExport>
        <DefaultExport 
            {...otherProps} 
            defaultChecked={null} 
            label="Secondary" 
            value="Secondary">
            {children}
        </DefaultExport>
    </form>
  );
}
