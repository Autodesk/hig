import React from "react";
import { storiesOf } from "@storybook/react";
import TextLink from "@hig/text-link";
import Typography from "@hig/typography";
import SampleComponentBreadcrumbs from "../index";

storiesOf("SampleComponentBreadcrumbs", module).add(
  "sampleComponentBreadcrumbs",
  () => (
    <SampleComponentBreadcrumbs>
      <TextLink link="#">Autodesk</TextLink>
      <TextLink link="#">HIG</TextLink>
      <TextLink link="#">Basics</TextLink>
      <Typography>Colors2</Typography>
    </SampleComponentBreadcrumbs>
  )
);
