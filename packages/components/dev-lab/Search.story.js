import React, { useState } from "react";
import { css } from "emotion";
import { Primary } from "@storybook/addon-docs";
import Input from "@hig/input";
import Button from "@hig/button";
import {
  CloseMUI,
  CloseSUI,
  Search16,
  Search24,
} from "@hig/icons";

const code =`import Button from "@hig/button";
import Input from "@hig/input";

const inputCustomStylesheet = (styles) => ({
  ...styles,
  input: {
    ...styles.input,
    paddingRight: '30px',
  }
});
const buttonCustomStylesheet = (styles, props, themeData, themeMeta) => {
  const iconSize = themeMeta.densityId === "medium-density" ? "24px" : "16px";
  return {
    ...styles,
    button: {
      ...styles.button,
      padding: themeData["button.paddingVertical"],
    },
    icon: {
      ...styles.icon,
    },
    iconText: {
      ...styles.iconText,
      marginLeft: iconSize,
    },
  }
};

const SearchButton = ({buttonVariant, handleButtonClick, placeholder}) => {
  const [inputValue, setInputValue] = useState('');
  const Icon = THEME_DENSITY === "Medium density"
    ? Search24 : Search16;
  const UIIcon = THEME_DENSITY === "Medium density"
    ? CloseMUI : CloseSUI;

  return (
    <div className={css({display: 'flex', position: 'relative'})}>
      <div className={css({position: 'relative'})}>
        <Input
          onChange={(event) => setInputValue(event.currentTarget.value)}
          placeholder={placeholder}
          stylesheet={inputCustomStylesheet}
          value={inputValue}
          variant="box"
        />
        <div
          className={css({display: 'flex', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', ":hover > svg": {cursor: "pointer"}})}
          onClick={() => setInputValue('')}
        >
         <UIIcon />
        </div>
      </div>
      <Button
        icon={<Icon />}
        onClick={handleButtonClick}
        stylesheet={buttonCustomStylesheet}
        type={buttonVariant}
      />
    </div>
  );
}`;
const inputCustomStylesheet = (styles) => ({
  ...styles,
  input: {
    ...styles.input,
    paddingRight: '30px',
  }
});
const buttonCustomStylesheet = (styles, props, themeData, themeMeta) => {
  const iconSize = themeMeta.densityId === "medium-density" ? "24px" : "16px";
  return {
    ...styles,
    button: {
      ...styles.button,
      padding: themeData["button.paddingVertical"],
    },
    icon: {
      ...styles.icon,
    },
    iconText: {
      ...styles.iconText,
      marginLeft: iconSize,
    },
  }
};

export default {
  title: "Dev lab/Search/Search button",
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

const Template = (args, context) => {
  const [inputValue, setInputValue] = useState('');
  const Icon = context.globals.density === "Medium density"
    ? Search24 : Search16;
  const UIIcon = context.globals.density === "Medium density"
    ? CloseMUI : CloseSUI;

  return (
    <div className={css({display: 'flex', position: 'relative'})}>
      <div className={css({position: 'relative'})}>
        <Input
          onChange={(event) => setInputValue(event.currentTarget.value)}
          placeholder={args.placeholder}
          stylesheet={inputCustomStylesheet}
          value={inputValue}
          variant="box"
        />
        <div
          className={css({display: 'flex', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', ":hover > svg": {cursor: "pointer"}})}
          onClick={() => setInputValue('')}
        >
         <UIIcon />
        </div>
      </div>
      <Button
        icon={<Icon />}
        onClick={args.onButtonClick}
        stylesheet={buttonCustomStylesheet}
        type={args.buttonVariant}
      />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  onButtonClick: () => alert('you searched something'),
  placeholder: "Placeholder text",
  buttonVariant: "outline",
};
