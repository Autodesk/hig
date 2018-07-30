import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

const styleOptions = makeSelectOptions({
  Standard: "standard",
  Alternate: "alternate"
});

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  onCloseClick: "onCloseClick",
  onOverlayClick: "onOverlayClick",
  open: "Open",
  style: "Variant",
  title: "Title"
};

export default function getKnobs(props) {
  const {
    body,
    onCloseClick,
    onOverlayClick,
    open,
    style,
    title,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    onCloseClick: action(knobLabels.onCloseClick),
    onOverlayClick: action(knobLabels.onOverlayClick),
    open: boolean(knobLabels.open, open, knobGroupIds.basic),
    style: select(knobLabels.style, styleOptions, style, knobGroupIds.basic),
    title: text(knobLabels.title, title, knobGroupIds.basic)
  };
}
