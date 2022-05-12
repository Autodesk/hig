import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs/react";

import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import stories from "./stories";
import infoOptions from "./infoOptions";
import Checkbox from "../Checkbox";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes",
};

const knobLabels = {
  disabled: "Disabled",
  indeterminate: "Indeterminate",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus",
  onMouseDown: "onMouseDown",
};

function getKnobs(props) {
  const {
    indeterminate = false,
    disabled = false,
    theme,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    indeterminate: boolean(
      knobLabels.indeterminate,
      indeterminate,
      knobGroupIds.basic
    ),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    onMouseDown: action(knobLabels.onMouseDown),
  };
}

const storybook = storiesOf("Forms|Checkbox", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider],
    })(() => {
      const props = getProps();
      const { children, ...otherProps } = getKnobs(props);
      return (
        <KnobbedThemeProvider>
          <Checkbox {...otherProps}>{children}</Checkbox>
        </KnobbedThemeProvider>
      );
    })
  );
});
