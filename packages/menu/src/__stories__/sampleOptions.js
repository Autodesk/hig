import React from "react";
import {
  AddMember16,
  AddFolder16,
  CartFull16,
  Cloud16,
  Checklist16,
  AddMember24,
  AddFolder24,
  CartFull24,
  Cloud24,
  Checklist24,
} from "@hig/icons";
import Avatar from "@hig/avatar";

import { Option } from "../index";

const defaultOptions = [
  <Option id="option-1" key="option-1">
    Option 1
  </Option>,
  <Option id="option-2" key="option-2">
    Option 2
  </Option>,
  <Option id="option-3" key="option-3" disabled>
    Option 3
  </Option>,
  <Option id="option-4" key="option-4">
    Option 4
  </Option>,
  <Option id="option-5" key="option-5">
    Option 5
  </Option>,
];
const getAvatarOptions = (density) => {
  const size = density === "Medium" ? "medium" : "small";
  return [
    <Option
      id="peter-parker"
      asset={<Avatar name="Peter Parker" size={size} />}
      key="option-1"
    >
      Peter Parker
    </Option>,
    <Option
      id="bruce-wayne"
      asset={<Avatar name="Bruce Wayne" size={size} />}
      key="option-2"
    >
      Bruce Wayne
    </Option>,
    <Option
      id="jessica-drew"
      asset={<Avatar name="Jessica Drew" size={size} />}
      key="option-3"
    >
      Jessica Drew
    </Option>,
    <Option
      id="cassandra-cain"
      asset={<Avatar name="Cassandra Cain" size={size} />}
      key="option-4"
    >
      Cassandra Cain
    </Option>,
    <Option
      id="stephanie-brown"
      asset={<Avatar name="Stephanie Brown" size={size} />}
      key="option-5"
    >
      Stephanie Brown
    </Option>,
  ];
};

const getIconOptions = (density) => {
  const getIcon = (HighIcon, MediumIcon) => {
    if (density === "Medium") {
      return <MediumIcon />;
    }
    return <HighIcon />;
  };

  return [
    <Option
      id="add-folder"
      asset={getIcon(AddFolder16, AddFolder24)}
      key="option-1"
    >
      Add Folder
    </Option>,
    <Option
      id="add-member"
      asset={getIcon(AddMember16, AddMember24)}
      key="option-2"
    >
      Add Member
    </Option>,
    <Option
      id="cart-full"
      asset={getIcon(CartFull16, CartFull24)}
      key="option-3"
    >
      Cart Full
    </Option>,
    <Option id="cloud" asset={getIcon(Cloud16, Cloud24)} key="option-4">
      Cloud
    </Option>,
    <Option
      id="checklist"
      asset={getIcon(Checklist16, Checklist24)}
      key="option-5"
    >
      Checklist
    </Option>,
  ];
};

const shortcutOptions = [
  <Option id="add-folder1" shortcut={<span>&#8984; 5</span>} key="option-12">
    Add Folder
  </Option>,
  <Option id="add-member1" shortcut={<span>&#8984; 6</span>} key="option-22">
    Add Member
  </Option>,
  <Option id="cart-full1" shortcut={<span>&#8984; 7</span>} key="option-32">
    Cart Full
  </Option>,
  <Option id="cloud1" shortcut={<span>&#8984; 8</span>} key="option-42">
    Cloud
  </Option>,
  <Option id="checklist1" shortcut={<span>&#8984; 9</span>} key="option-52">
    Checklist
  </Option>,
];

const SAMPLE_OPTIONS = {
  defaultOptions,
  getAvatarOptions,
  getIconOptions,
  shortcutOptions,
};

export default SAMPLE_OPTIONS;
