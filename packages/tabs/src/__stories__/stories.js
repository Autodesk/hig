import React from "react";
import RichText from "@hig/rich-text";
import Button, { types } from "@hig/button";

import { Tab } from "../index";

/* eslint-disable-next-line react/prop-types */
function renderCustomTab({ key, label, active, handleClick }) {
  return (
    <Button
      key={key}
      title={label}
      type={active ? types.PRIMARY : types.SECONDARY}
      onClick={handleClick}
    />
  );
}

export default [
  {
    description: "default",
    getProps: () => ({
      children: [
        <Tab label="Details" key="details">
          <RichText>Details content</RichText>
        </Tab>,
        <Tab label="Activities" key="activities">
          <RichText>Activities content</RichText>
        </Tab>,
        <Tab label="Inspector" key="inspector">
          <RichText>Inspector content</RichText>
        </Tab>
      ]
    })
  },
  {
    description: "custom tab",
    getProps: () => ({
      align: "center",
      children: [
        <Tab label="Details" key="details" render={renderCustomTab}>
          <RichText>Details content</RichText>
        </Tab>,
        <Tab
          label="Activities"
          key="activities"
          render={renderCustomTab}
          active
        >
          <RichText>Activities content</RichText>
        </Tab>,
        <Tab label="Inspector" key="inspector" render={renderCustomTab}>
          <RichText>Inspector content</RichText>
        </Tab>
      ]
    })
  }
];
