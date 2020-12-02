import React from "react";
import {
  AddMember16,
  AddMember24,
  AddFolder16,
  AddFolder24,
  CartFull16,
  CartFull24
} from "@hig/icons";
import Avatar from "@hig/avatar";
import Menu, { MenuGroup, Option } from "@hig/menu";
import Surface from "@hig/surface";
import { generateId } from "@hig/utils";
import ThemeRepeater from "../components/ThemeRepeater";

import Text from "../components/Text";

function getOption(options)  {
  const id = generateId('option');

  return <Option id={id} key={id}>{options.text}</Option>;
}

const options = [
  { text: "Option 1" },
  { text: "Option 2" },
  { text: "Option 3" }
];

const states = [
  { label: "default", props: {} },
  { label: "multiple", props: { multiple: true } },
  { label: "with checkmark", props: { checkmark: true } },
  { label: "multiple with checkmark", props: { checkmark: true, multiple: true } }
];

function MenuPage() {
  return (
    <ThemeRepeater>
      {( { theme }) => {
        const AddMember = theme.metadata.densityId === "high-density" ? AddMember16 : AddMember24;
        const AddFolder = theme.metadata.densityId === "high-density" ? AddFolder16 : AddFolder24;
        const CartFull = theme.metadata.densityId === "high-density" ? CartFull16 : CartFull24;
        const size = theme.metadata.densityId === "high-density" ? "small" : "medium-32";
        return(
          <div style={{ width: `500px`, display: `flex`, justifyContent: `space-evenly`, flexWrap: `wrap`}}>
            {states.map(({ label, props }) => {
              return (
                <div style={{ flex: `0 1 45%`, marginTop: `20px`}} key={generateId('wrapper')}>
                  <Text>{label}</Text>
                  <Surface borderRadius="m" shadow="low">
                    <Menu checkmark={props.checkmark} multiple={props.multiple}>
                      {options.map(getOption)}
                    </Menu>
                  </Surface>
                  <br />
                  <Text>{`Kitchen Sink ${label}`}</Text>
                  <Surface borderRadius="m" shadow="low">
                    <MenuGroup multiple={props.multiple}>
                      <Menu checkmark={props.checkmark} id={generateId('menu')} divider>
                        <Option id={generateId('header')} role="presentation">With Shortcut</Option>
                        <Option id={generateId('menugroup')} shortcut={<span>&#8984; 3</span>}>Shortcut 1</Option>
                        <Option id={generateId('menugroup')} shortcut={<span>&#8984; 6</span>} disabled>Shortcut 2</Option>
                        <Option id={generateId('menugroup')} shortcut={<span>&#8984; 9</span>}>Shortcut 3</Option>
                      </Menu>
                      <Menu checkmark={props.checkmark} id={generateId('menu')} divider>
                        <Option id={generateId('header')} role="presentation">With Icons</Option>
                        <Option id={generateId('menugroup')} asset={<AddMember />} disabled>Add Member</Option>
                        <Option id={generateId('menugroup')} asset={<AddFolder />}>Add Folder</Option>
                        <Option id={generateId('menugroup')} asset={<CartFull />}>Cart Full</Option>
                      </Menu>
                      <Menu checkmark={props.checkmark} id={generateId('menu')}>
                        <Option id={generateId('header')} role="presentation">With Avatars</Option>
                        <Option id={generateId('menugroup')} asset={<Avatar name="Bruce Wayne" size={size} />}>Bruce Wayne</Option>
                        <Option id={generateId('menugroup')} asset={<Avatar name="Peter Parker" size={size} />}>Peter Parker</Option>
                        <Option id={generateId('menugroup')} asset={<Avatar name="Clark Kent" size={size} />} disabled>Clark Kent</Option>
                      </Menu>
                    </MenuGroup>
                  </Surface>
                </div>
              )
            })}
          </div>
        )
      }}
    </ThemeRepeater>
  );
}

export default MenuPage;
