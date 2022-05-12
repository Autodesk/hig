import React from "react";
import RichText from "@hig/rich-text";
import Button, { types } from "@hig/button";
import { Settings24, Dashboard24 } from "@hig/icons";

import { Tab, alignments, variants, orientations } from "../index";

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
      alignment: alignments.LEFT,
      variant: variants.UNDERLINE,
      orientation: orientations.HORIZONTAL,
      showDivider: false,
      children: [
        <Tab label="Details" key="details">
          <RichText>Details content</RichText>
        </Tab>,
        <Tab label="Activities" key="activities">
          <RichText>Activities content</RichText>
        </Tab>,
        <Tab label="Inspector" key="inspector">
          <RichText>Inspector content</RichText>
        </Tab>,
      ],
    }),
  },
  {
    description: "complex tab",
    getProps: () => ({
      alignment: alignments.LEFT,
      variant: variants.BOX,
      orientation: orientations.HORIZONTAL,
      showDivider: true,
      defaultActiveTabIndex: 1,
      children: [
        <Tab label="Complex" key="complex" icon={<Settings24 />} closable>
          <RichText>
            Complex tab can have an icon and a close button, complex tab only
            works when variant is set to &quot;box&quot; or &quot;canvas&quot;
          </RichText>
        </Tab>,
        <Tab key="icon" icon={<Dashboard24 />}>
          <RichText>
            Icon only tab. Icon will not be displayed when variant is set to
            &quot;underline&quot;
          </RichText>
        </Tab>,
        <Tab label="Disabled" key="disabled" disabled>
          <RichText>Disabled</RichText>
        </Tab>,
        <Tab label="Closable" key="closable" closable>
          <RichText>
            Closable tab will only works when variant is set to &quot;box&quot;
            or &quot;canvas&quot;. Clicks the close button will trigger the
            &quot;onTabClose&quot; event.
          </RichText>
        </Tab>,
      ],
    }),
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
        </Tab>,
      ],
    }),
  },
];
