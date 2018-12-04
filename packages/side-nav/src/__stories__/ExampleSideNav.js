import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";
import { Insight24, ProductsAndServices24, Collaboration24 } from "@hig/icons";

import SideNav from "../index";

const ExampleSideNav = () => (
  <SideNav
    headerLabel={text("Header Label", "Storybook")}
    headerLink={text("Header Link", "https://www.autodesk.com")}
    onMinimize={action("onMinimize")}
    showMinimizeButton={boolean("Show Minimize Button", false)}
    superHeaderLabel={text("Superheader Label", "HIG")}
    superHeaderLink={text("Superheader Link", "https://www.autodesk.com")}
    groups={
      <SideNav.Group>
        <SideNav.Module title="Module 1" icon={<Insight24 />} activeChildren>
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" active />
        </SideNav.Module>
        <SideNav.Module
          title="Module 2"
          icon={<ProductsAndServices24 />}
          minimized
        >
          <SideNav.Submodule
            title="Submodule 1"
            link="https://www.autodesk.com"
          />
          <SideNav.Submodule
            title="Submodule 2"
            link="https://www.autodesk.com"
            target="_blank"
          />
        </SideNav.Module>
        <SideNav.Module
          title="Module 3"
          icon={<Collaboration24 />}
          link="https://www.autodesk.com"
          target="_blank"
        />
      </SideNav.Group>
    }
    links={[
      <SideNav.Link
        key="Autodesk Home"
        title="Autodesk Home"
        link="https://www.autodesk.com"
      />,
      <SideNav.Link
        key="Github"
        title="Github"
        link="https://www.github.com/Autodesk/hig"
        target="_blank"
      />
    ]}
    search={<SideNav.Search />}
    copyright="© 2018 Autodesk Inc."
  />
);

export default ExampleSideNav;
