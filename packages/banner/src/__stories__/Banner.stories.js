import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { makeSelectOptions, translate as t } from "@hig/storybook/utils";
import * as languages from './i18n';

import { Button } from "hig-react";
import Banner from "../Banner";

const typeOptions = makeSelectOptions(Banner.types);
const placementOptions = makeSelectOptions(Banner.placements);

const knobGroupIds = {
  basic: "Basic",
  animation: "Animation",
  a11y: "Accessibility",
  actions: "Actions",
  i18n: "i18n"
};

const knobLabels = {
  type: "Style",
  children: "Message",
  placement: "Placement",
  isVisible: "Visible",
  label: "Label",
  dismissButtonTitle: "Dismiss title",
  onDismiss: "Banner dismissed",
  language: "Language"
};

function getBannerKnobs(props) {
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
    onDismiss: action(knobLabels.onDismiss, onDismiss, knobGroupIds.actions)
  };
}

const bannerStories = storiesOf("Banner", module);

bannerStories.add("default", withInfo({
  propTables: [Banner]
})(() => {
  const { children, ...otherProps } = getBannerKnobs({});
  return (<Banner {...otherProps}>{children}</Banner>)
}));

bannerStories.add("verbose, with interactions", withInfo({
  propTables: [Banner]
})(() => {
  const chosenLanguage = select(
    knobLabels.language,
    languages.languageOptions,
    "en",
    knobGroupIds.i18n
  );
  const props = {
    type: Banner.types.WARNING,
      children:
        t(languages, chosenLanguage, "BANNER_MESSAGE"),
      /** @todo Cleanup/refactor */
      actions: ({ isWrappingActions }) => (
        <Banner.Interactions isWrappingActions={isWrappingActions}>
          <Banner.Action>
            <Button
              type="secondary"
              size="small"
              width={isWrappingActions ? "grow" : "shrink"}
              title={text("Resolve text", t(languages, chosenLanguage, "BANNER_RESOLVE_BUTTON_TEXT"))}
            />
          </Banner.Action>
          <Banner.Action>
            <Button
              type="secondary"
              size="small"
              width={isWrappingActions ? "grow" : "shrink"}
              title={text("Reject text", t(languages, chosenLanguage, "BANNER_REJECT_BUTTON_TEXT"))}
            />
          </Banner.Action>
        </Banner.Interactions>
      )
  }
  const { children, ...otherProps } = getBannerKnobs(props);
  return (<Banner {...otherProps}>{children}</Banner>)
}));
