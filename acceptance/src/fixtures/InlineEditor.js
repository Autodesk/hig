import React, {useState} from "react";
import Typography from "@hig/typography";
import Input from "@hig/input";

const InlineEditor = (props) => {
  const {
    children
  } = props;
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return <Input variant="plain" />;
  }

  return (
    <Typography
      elementType="div"
      onMouseUp={() => {
        setIsEditing(true);
      }}
    >
      {children}
    </Typography>
  );
}

export default InlineEditor;
