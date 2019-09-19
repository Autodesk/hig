import React from "react";
import Spacer from "@hig/spacer";
import Tabs, { Tab } from "@hig/tabs";
import { Placeholder24, Placeholder16 } from "@hig/icons";
import Typography from "@hig/typography";
import "@hig/fonts/build/ArtifaktElement.css";
import ThemeRepeater from "../components/ThemeRepeater";

function TabsPage() {
  return (
    <ThemeRepeater>
      {({ theme }) => {
        const Icon = theme.metadata.densityId === "high-density" ? Placeholder16 : Placeholder24;
        return (
          <div style={{ width: "450px" }}>
            <Typography variant="h3">Underline</Typography>
            <Spacer spacing="m" />
            <Tabs>
              <Tab label="Details" key="details">
                <Spacer spacing="s" />
                <Typography>Details content</Typography>
              </Tab>
              <Tab label="Activities" key="activities">
                <Spacer spacing="s" />
                <Typography>Activities content</Typography>
              </Tab>
              <Tab label="Inspector" key="inspector">
                <Spacer spacing="s" />
                <Typography>Inspector content</Typography>
              </Tab>
            </Tabs>
            <Spacer spacing="xl" />
            <Typography variant="h3">Box - without divider</Typography>
            <Spacer spacing="m" />
            <Tabs variant="box" showTabDivider={false}>
              <Tab label="Complex" key="complex" icon={<Icon />} closable>
                <Spacer spacing="s" />
                  <Typography>Complex tab with icon and close button</Typography>
                </Tab>,
              <Tab key="icon" icon={<Icon />}>
                <Spacer spacing="s" />
                <Typography>Icon only tab</Typography>
              </Tab>,
              <Tab label="Disabled" key="disabled" disabled>
                <Spacer spacing="s" />
                <Typography>Disabled tab</Typography>
              </Tab>,
              <Tab label="Closable" key="closable" closable>
              <Spacer spacing="s" />
                <Typography>Tab with close button</Typography>
              </Tab>
            </Tabs>
            <Spacer spacing="xl" />
            <Typography variant="h3">Box - with divider</Typography>
            <Spacer spacing="m" />
            <Tabs variant="box">
              <Tab label="Complex" key="complex" icon={<Icon />} closable>
                <Spacer spacing="s" />
                  <Typography>Complex tab with icon and close button</Typography>
                </Tab>,
              <Tab key="icon" icon={<Icon />}>
                <Spacer spacing="s" />
                <Typography>Icon only tab</Typography>
              </Tab>,
              <Tab label="Disabled" key="disabled" disabled>
                <Spacer spacing="s" />
                <Typography>Disabled tab</Typography>
              </Tab>,
              <Tab label="Closable" key="closable" closable>
              <Spacer spacing="s" />
                <Typography>Tab with close button</Typography>
              </Tab>
            </Tabs>
            <Spacer spacing="xl" />
            <Typography variant="h3">Canvas</Typography>
            <Spacer spacing="m" />
            <Tabs variant="canvas">
              <Tab label="Complex" key="complex" icon={<Icon />} closable>
                <Spacer spacing="s" />
                  <Typography>Complex tab with icon and close button</Typography>
                </Tab>,
              <Tab key="icon" icon={<Icon />}>
                <Spacer spacing="s" />
                <Typography>Icon only tab</Typography>
              </Tab>,
              <Tab label="Disabled" key="disabled" disabled>
                <Spacer spacing="s" />
                <Typography>Disabled tab</Typography>
              </Tab>,
              <Tab label="Closable" key="closable" closable>
              <Spacer spacing="s" />
                <Typography>Tab with close button</Typography>
              </Tab>
            </Tabs>
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default TabsPage;
