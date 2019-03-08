import React from "react";
import Spacer from "@hig/spacer";
import Tabs, { Tab } from "@hig/tabs";
import Typography from "@hig/typography";
import "@hig/fonts/build/ArtifaktElement.css";
import ThemeRepeater from "../components/ThemeRepeater";

function TabsPage() {
  return (
    <ThemeRepeater>
      {() => {
        return (
          <Tabs align="center">
            <Tab label="Details" key="details">
              <Spacer spacing="m" />
              <Typography>Details content</Typography>
            </Tab>
            <Tab label="Activities" key="activities">
              <Spacer spacing="m" />
              <Typography>Activities content</Typography>
            </Tab>
            <Tab label="Inspector" key="inspector">
              <Spacer spacing="m" />
              <Typography>Inspector content</Typography>
            </Tab>
          </Tabs>
        );
      }}
    </ThemeRepeater>
  );
}

export default TabsPage;
