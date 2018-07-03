import React from "react";
import Reference from "./Reference";
import ColorExample from "./ColorExample";
import LengthExample from "./LengthExample";
import FontWeightExample from "./FontWeightExample";
import FontSizeExample from "./FontSizeExample";
import FontFamilyExample from "./FontFamilyExample";
import BorderWidthExample from "./BorderWidthExample";
import BorderRadiusExample from "./BorderRadiusExample";
import ShadowExample from "./ShadowExample";
import SpacingExample from "./SpacingExample";

const SCHEMA_TYPES = {
  COLOR: "color",
  LENGTH: "length",
  BORDER_RADIUS: "borderRadius",
  BORDER_WIDTH: "borderWidth",
  FONT_FAMILY: "fontFamily",
  FONT_SIZE: "fontSize",
  FONT_WEIGHT: "fontWeight",
  LINE_HEIGHT: "lineHeight",
  SHADOW: "shadow",
  SPACING: "spacing"
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
      return <BorderRadiusExample {...props} />;
    }
    case SCHEMA_TYPES.BORDER_WIDTH: {
      return <BorderWidthExample {...props} />;
    }
    case SCHEMA_TYPES.FONT_FAMILY: {
      return <FontFamilyExample {...props} />;
    }
    case SCHEMA_TYPES.FONT_SIZE: {
      return <FontSizeExample {...props} />;
    }
    case SCHEMA_TYPES.FONT_WEIGHT: {
      return <FontWeightExample {...props} />;
    }
    case SCHEMA_TYPES.LINE_HEIGHT: {
      return <LengthExample {...props} />;
    }
    case SCHEMA_TYPES.SHADOW: {
      return <ShadowExample {...props} />;
    }
    case SCHEMA_TYPES.SPACING: {
      return <SpacingExample {...props} />;
    }
    default: {
      throw new Error(`Unrecognized role type ${props.schema.type}`);
    }
  }
}

export default function Example(props) {
  const ref = props.themeConfig[props.role].ref;
  return (
    <div>
      {renderTypeExample(props)}
      {ref ? <Reference>{ref}</Reference> : null}
    </div>
  );
}
