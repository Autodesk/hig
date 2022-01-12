import React from "react";
import { storiesOf } from "@storybook/react";
import {
  AddMember24,
  AddFolder24,
  CartFull24,
  Cloud24,
  Checklist24
} from "@hig/icons";
import Avatar from "@hig/avatar";
import ThemeContext from "@hig/theme-context";

import lightGrayHighTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import lightGrayMediumTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkGrayHighTheme from "@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json";
import darkGrayMediumTheme from "@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json";
import darkBlueHighTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import darkBlueMediumTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";

import Menu, { MenuGroup, Option } from "../index";

const themes = [
  lightGrayHighTheme,
  lightGrayMediumTheme,
  darkGrayHighTheme,
  darkGrayMediumTheme,
  darkBlueHighTheme,
  darkBlueMediumTheme
];

function ThemeRepeater({ children }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {themes.map(theme => (
        <ThemeContext.Provider key={theme.metadata.id} value={theme}>
          <div>{children}</div>
        </ThemeContext.Provider>
      ))}
    </div>
  );
}

function Surface({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const style = {
          backgroundColor: resolvedRoles["colorScheme.surface.level100"],
          marginBottom: resolvedRoles["density.spacings.large"],
          marginRight: resolvedRoles["density.spacings.large"],
          width: "300px"
        };

        return <div style={style}>{children}</div>;
      }}
    </ThemeContext.Consumer>
  );
}

function MenuVariantRepeater() {
  return (
    <MenuGroup selected={["cloud", "checkmark-2"]} multiple>
      <Menu id="shortcut-group" divider key="icon-group">
        <Option id="shortcut-header" role="presentation">
          Icon Option Header
        </Option>
        <Option
          id="add-folder"
          asset={<AddFolder24 />}
          shortcut={<span>&#8984; 5</span>}
        >
          Add Folder
        </Option>
        <Option
          id="add-member"
          asset={<AddMember24 />}
          shortcut={<span>&#8984; 6</span>}
        >
          Add Member
        </Option>
        <Option
          id="cart-full"
          asset={<CartFull24 />}
          shortcut={<span>&#8984; 7</span>}
        >
          Cart Full
        </Option>
        <Option
          id="cloud"
          asset={<Cloud24 />}
          shortcut={<span>&#8984; 8</span>}
        >
          Cloud
        </Option>
        <Option
          id="checklist"
          asset={<Checklist24 />}
          shortcut={<span>&#8984; 9</span>}
        >
          Checklist
        </Option>
      </Menu>
      <Menu checkmark id="checkmark-group" divider key="checkmark-group">
        <Option id="checkmark-header" role="presentation">
          Checkmark Option Header
        </Option>
        <Option id="checkmark-1">Checkmark 1</Option>
        <Option id="checkmark-2">Checkmark 2</Option>
        <Option id="checkmark-3" disabled>
          Checkmark 3
        </Option>
        <Option id="checkmark-4">Checkmark 4</Option>
        <Option id="checkmark-5" disabled>
          Checkmark 5
        </Option>
      </Menu>
      <Menu checkmark id="avatar-group" key="avatar-group">
        <Option id="avatar-header" role="presentation">
          Avatar Option Header
        </Option>
        <Option
          id="peter-parker"
          asset={<Avatar name="Peter Parker" size="medium" />}
        >
          Peter Parker
        </Option>
        <Option
          id="bruce-wayne"
          asset={<Avatar name="Bruce Wayne" size="medium" />}
        >
          Bruce Wayne
        </Option>
        <Option
          id="jessica-drew"
          asset={<Avatar name="Jessica Drew" size="medium" />}
        >
          Jessica Drew
        </Option>
        <Option
          id="cassandra-cain"
          asset={<Avatar name="Cassandra Cain" size="medium" />}
        >
          Cassandra Cain
        </Option>
        <Option
          id="stephanie-brown"
          asset={<Avatar name="Stephanie Brown" size="medium" />}
        >
          Stephanie Brown
        </Option>
      </Menu>
    </MenuGroup>
  );
}

const menuVariants = (
  <ThemeRepeater>
    <Surface>
      <MenuVariantRepeater />
    </Surface>
  </ThemeRepeater>
);

storiesOf("Menu", module).add("all variations", () => (
  <div>{menuVariants}</div>
));
