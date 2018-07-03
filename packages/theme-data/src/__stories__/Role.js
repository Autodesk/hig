import React from "react";
import ColorExample from "./ColorExample";
import LengthExample from "./LengthExample";

const SCHEMA_TYPES = {
  COLOR: "color",
  LENGTH: "length"
};

function renderExample(role, schema) {
  switch (schema.type) {
    case SCHEMA_TYPES.COLOR: {
      return <ColorExample role={role} schema={schema} />;
    }
    case SCHEMA_TYPES.LENGTH: {
      return <LengthExample role={role} schema={schema} />;
    }
    default: {
      throw new Error(`Unrecognized role type ${schema.type}`);
    }
  }
}

function Role({ role, schema }) {
  return (
    <div>
      <p>{role}</p>
      {renderExample(role, schema)}
    </div>
  );
}

export default Role;
