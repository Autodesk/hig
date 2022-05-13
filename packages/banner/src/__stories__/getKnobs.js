import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { types } from "../types";
import { placements } from "../placements";
import * as languages from "./i18n";

/** @typedef {import("../Banner").BannerProps} BannerProps */

const typeOptions = makeSelectOptions(types);
const placementOptions = makeSelectOptions(placements);

const knobGroupIds = {
  basic: "Basic",
  animation: "Animation",
  a11y: "Accessibility",
  actions: "Actions",
  i18n: "i18n",
};

const knobLabels = {
  type: "Variant",
  children: "Message",
  placement: "Placement",
  isVisible: "Visible",
  label: "Label",
  dismissButtonTitle: "Dismiss title",
  onDismiss: "Banner dismissed",
  language: "Language",
};

/**
 * @returns {string} The selected language code
 */
export function selectLanguage() {
  return select(
    knobLabels.language,
    languages.languageOptions,
    "en",
    knobGroupIds.i18n
  );
}

/**
 * @param {BannerProps} props
 * @returns {BannerProps}
 */
export default function getKnobs(props) {
  const {
    type,
    placement,
    children,
    isVisible = true,
    label,
    dismissButtonTitle,
    onDismiss,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    type: select(knobLabels.type, typeOptions, type, knobGroupIds.basic),
    children: text(knobLabels.children, children, knobGroupIds.basic),
    placement: select(
      knobLabels.placement,
      placementOptions,
      placement,
      knobGroupIds.animation
    ),
    isVisible: boolean(knobLabels.isVisible, isVisible, knobGroupIds.animation),
    label: text(knobLabels.label, label, knobLabels.a11y),
    dismissButtonTitle: text(
      knobLabels.dismissButtonTitle,
      dismissButtonTitle,
      knobGroupIds.a11y
    ),
    onDismiss: action(knobLabels.onDismiss, onDismiss, knobGroupIds.actions),
  };
}
