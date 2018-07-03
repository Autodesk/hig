import React from "react";
import Reference from "./Reference";
import ColorExample from "./ColorExample";
import LengthExample from "./LengthExample";

const SCHEMA_TYPES = {
  COLOR: "color",
  LENGTH: "length",
  BORDER_RADIUS: "borderRadius",
  BORDER_WIDTH: "borderWidth",
  FONT_FAMILY: "fontFamily",
  FONT_SIZE: "fontSize",
  FONT_WEIGHT: "fontWeight",
  LINE_HEIGHT: "lineHeight",
  SHADOW: "shadow"
};

function renderTypeExample(props) {
  switch (props.schema.type) {
    case SCHEMA_TYPES.COLOR: {
      return <ColorExample {...props} />;
    }
    case SCHEMA_TYPES.LENGTH: {
      return <LengthExample {...props} />;
    }
    case SCHEMA_TYPES.BORDER_RADIUS: {
      return <LengthExample {...props} />;
    }
    case SCHEMA_TYPES.BORDER_WIDTH: {
      return <LengthExample {...props} />;
    }
    case SCHEMA_TYPES.FONT_FAMILY: {
      return <LengthExample {...props} />;
    }
    case SCHEMA_TYPES.FONT_SIZE: {
      return <LengthExample {...props} />;
    }
    case SCHEMA_TYPES.FONT_WEIGHT: {
      return <LengthExample {...props} />;
    }
    case SCHEMA_TYPES.LINE_HEIGHT: {
      return <LengthExample {...props} />;
    }
    case SCHEMA_TYPES.SHADOW: {
      return <LengthExample {...props} />;
    }
    default: {
      throw new Error(`Unrecognized role type ${props.schema.type}`);
    }
  }
}

export default function Example(props) {
  return (
    <div>
      {renderTypeExample(props)}
      {props.themeConfig.ref ? <Reference ref={props.themeConfig.ref} /> : null}
    </div>
  );
}
