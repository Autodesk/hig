import React, { useEffect, useState } from "react";
import { Primary } from "@storybook/addon-docs";
import { css } from "emotion";
import Button from "@hig/button";
import Menu, { Option } from "@hig/menu";
import Surface from "@hig/surface";

const ButtonDropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState(["option-1"]);
  const handleOptionClick = (event) => {
    const newSelected = [];

    if (selectedOption[0] === event.currentTarget.id) {
      return;
    }
    newSelected.push(event.currentTarget.id);
    setSelectedOption(newSelected);
  };

  const handleKeyDown = (event, test) => {
    console.log(event.currentTarget);
    if (event.key === "Enter") {
      console.log(test);
      const newSelected = [];

      newSelected.push(test?.currentHighlightedId);
      setSelectedOption(newSelected);
    }
  };

  return (
    <div className={css({position: "relative"})}>
       {/* <Button>Hi</Button>
      <div className={css({width: "auto", position: "absolute"})}> */}
        <Menu selected={selectedOption} onChange={(event) => console.log('onChange', event)} onKeyDown={handleKeyDown}>
          <Option id="option-1" onClick={handleOptionClick}>Option 1</Option>
          <Option id="option-2" onClick={handleOptionClick}>Option 2</Option>
          <Option id="option-3" onClick={handleOptionClick}>Option 3</Option>
          <Option id="option-4" disabled onClick={handleOptionClick}>Option 4</Option>
        </Menu>
      {/* </div> */}
      <div>
        <Button>First</Button><Button>Second</Button>
      </div>
    </div>
  );
};

export default {
  title: "Dev Lab/ButtonDropdown",
  component: ButtonDropdown,
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
        </>
      ),
    },
  }
}

const Template = () => <ButtonDropdown />

export const Default = Template.bind({});
