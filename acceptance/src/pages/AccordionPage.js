import React from "react";
import Spacer from "@hig/spacer";
import Accordion, { indicators, indicatorPositions } from "@hig/accordion";
import Typography from "@hig/typography";
import "@hig/fonts/build/ArtifaktElement.css";
import ThemeRepeater from "../components/ThemeRepeater";

function TabsPage() {
  return (
    <ThemeRepeater>
      {() => {
        return (
          <div style={{ width: "250px" }}>
            <Typography variant="h3">Default</Typography>
            <Spacer spacing="m" />
            <Accordion label="Title" >
              <Typography>Content</Typography>
            </Accordion>
            <Spacer spacing="xs" />
            <Accordion label="Title">
              <Typography>Content</Typography>
            </Accordion>
            <Spacer spacing="xs" />
            <Accordion label="Title">
              <Typography>Content</Typography>
            </Accordion>
            <Spacer spacing="xl" />
            <Typography variant="h3">Use operator as indicator</Typography>
            <Spacer spacing="m" />
            <Accordion label="Title" indicator={indicators.OPERATOR}>
              <Typography>Content</Typography>
            </Accordion>
            <Spacer spacing="xs" />
            <Accordion label="Title" indicator={indicators.OPERATOR}>
              <Typography>Content</Typography>
            </Accordion>
            <Spacer spacing="xs" />
            <Accordion label="Title" indicator={indicators.OPERATOR}>
              <Typography>Content</Typography>
            </Accordion>
            <Spacer spacing="xl" />
            <Typography variant="h3">Indicator on the right</Typography>
            <Spacer spacing="m" />
            <Accordion label="Title" indicator={indicators.OPERATOR} indicatorPosition={indicatorPositions.RIGHT}>
              <Typography>Content</Typography>
            </Accordion>
            <Spacer spacing="xs" />
            <Accordion label="Title" indicator={indicators.OPERATOR} indicatorPosition={indicatorPositions.RIGHT}>
              <Typography>Content</Typography>
            </Accordion>
            <Spacer spacing="xs" />
            <Accordion label="Title" indicator={indicators.OPERATOR} indicatorPosition={indicatorPositions.RIGHT}>
              <Typography>Content</Typography>
            </Accordion>
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default TabsPage;
