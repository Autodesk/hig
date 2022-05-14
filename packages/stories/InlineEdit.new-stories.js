import React, { useState } from "react";
import { Primary } from "@storybook/addon-docs";
import Typography from "@hig/typography";
import Input, { variants } from "@hig/input";

const code =`import Typography from "@hig/typography";
import Input, { variants } from "@hig/input";

const InlineEditor = (props) => {
  const {
    children,
    inputVariant
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [getText, setText] = useState(children);
  const typographyStylesheet = (styles, props, themeData, themeMeta) => {
    return {
      ...styles,
      typography: {
        ...styles.typography,
        alignItems: "center",
        display: "flex",
        height: themeData["input.minHeight"],
        paddingRight:
          inputVariant === variants.BOX
            ? themeData["input.box.paddingHorizontal"]
            : themeData["input.line.paddingHorizontal"],
        paddingLeft:
          inputVariant === variants.BOX
            ? themeData["input.box.paddingHorizontal"]
            : themeData["input.line.paddingHorizontal"],
      }
    };
  };

  if (isEditing) {
    return (
      <Input
        variant={inputVariant}
        onBlur={() => setIsEditing(false)}
        onChange={(event) => {
          setText(event.currentTarget.value);
        }}
        value={getText}
      />
    );
  }

  return (
    <Typography
      elementType="div"
      onMouseUp={() => {
        setIsEditing(true);
      }}
      stylesheet={typographyStylesheet}
    >
      {getText}
    </Typography>
  );
}`;

const InlineEditor = (props) => {
  const {
    children,
    inputVariant
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [getText, setText] = useState(children);
  const typographyStylesheet = (styles, props, themeData, themeMeta) => {
    return {
      ...styles,
      typography: {
        ...styles.typography,
        alignItems: "center",
        boxSizing: "border-box",
        display: "flex",
        fontWeight: themeData["input.value.fontWeight"],
        height: `calc(${themeData["input.minHeight"]} - 2px)`,
        paddingRight:
          inputVariant === variants.BOX
            ? themeData["input.box.paddingHorizontal"]
            : themeData["input.line.paddingHorizontal"],
        paddingLeft:
          inputVariant === variants.BOX
            ? themeData["input.box.paddingHorizontal"]
            : themeData["input.line.paddingHorizontal"],
      }
    };
  };

  if (isEditing) {
    return (
      <Input
        variant={inputVariant}
        onBlur={() => setIsEditing(false)}
        onChange={(event) => {
          setText(event.currentTarget.value)
        }}
        value={getText}
      />
    );
  }

  return (
    <Typography
      elementType="div"
      onMouseUp={() => {
        setIsEditing(true);
      }}
      stylesheet={typographyStylesheet}
    >
      {getText}
    </Typography>
  );
}

export default {
  title: "Dev Lab/Inline Editor",
  component: InlineEditor,
  argTypes: {
    inputVariant: {
      options: [variants.LINE, variants.BOX, variants.PLAIN],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
        </>
      ),
      source: {
        code: code,
        language: "js",
      },
    },
  },
};

const Template = (args) => <InlineEditor {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Lorem Ipsum",
  inputVariant: variants.LINE,
};
