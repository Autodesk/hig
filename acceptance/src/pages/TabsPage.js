import React from "react";
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
              <Typography>Details content</Typography>
            </Tab>
            <Tab label="Activities" key="activities">
              <Typography>Activities content</Typography>
            </Tab>
            <Tab label="Inspector" key="inspector">
              <Typography>Inspector content</Typography>
            </Tab>
          </Tabs>
        );
      }}
    </ThemeRepeater>
  );
}

export default TabsPage;
