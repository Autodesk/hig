import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";
import { types } from "../types";

const typeOptions = makeSelectOptions(types);

const knobGroupIds = {
  basic: "Basic",
};

const knobLabels = {
  onCloseClick: "onCloseClick",
  onOverlayClick: "onOverlayClick",
  open: "Open",
  title: "Title",
  type: "Type",
};

export default function getKnobs(props) {
  const {
    body,
    onCloseClick,
    onOverlayClick,
    open,
    title,
    type,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    onCloseClick: action(knobLabels.onCloseClick),
    onOverlayClick: action(knobLabels.onOverlayClick),
    open: boolean(knobLabels.open, open, knobGroupIds.basic),
    type: select(knobLabels.type, typeOptions, type, knobGroupIds.basic),
    title: text(knobLabels.title, title, knobGroupIds.basic),
  };
}
