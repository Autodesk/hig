import React from "react";
import PropTypes from "prop-types";

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
  SPACING: "spacing",
  OPACITY: "opacity"
};

const examplesBySchemaType = {
  [SCHEMA_TYPES.COLOR]: ColorExample,
  [SCHEMA_TYPES.LENGTH]: LengthExample,
  [SCHEMA_TYPES.BORDER_RADIUS]: BorderRadiusExample,
  [SCHEMA_TYPES.BORDER_WIDTH]: BorderWidthExample,
  [SCHEMA_TYPES.FONT_FAMILY]: FontFamilyExample,
  [SCHEMA_TYPES.FONT_SIZE]: FontSizeExample,
  [SCHEMA_TYPES.FONT_WEIGHT]: FontWeightExample,
  [SCHEMA_TYPES.LINE_HEIGHT]: LengthExample,
  [SCHEMA_TYPES.OPACITY]: LengthExample,
  [SCHEMA_TYPES.SHADOW]: ShadowExample,
  [SCHEMA_TYPES.SPACING]: SpacingExample
};

function TypeExample(props) {
  const TheExample = examplesBySchemaType[props.schema.type];

  if (!TheExample) {
    throw new Error(`Unrecognized role type ${props.schema.type}`);
  }

  return <TheExample value={props.theme[props.role]} {...props} />;
}

TypeExample.propTypes = {
  theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  role: PropTypes.string,
  schema: PropTypes.shape({
    type: PropTypes.string
  })
};

function Example(props) {
  const { ref } = props.themeConfig[props.role];

  return (
    <div>
      <TypeExample {...props} />
      {ref ? <Reference>{ref}</Reference> : null}
    </div>
  );
}

Example.propTypes = {
  themeConfig: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  role: PropTypes.string
};

export default Example;
