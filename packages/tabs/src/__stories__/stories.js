import React from "react";
import RichText from "@hig/rich-text";
import { Tab } from "../index";

export default [
  {
    description: "default",
    getProps: () => ({
      align: "center",
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
  }
];
