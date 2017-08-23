/**
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */

import { mount } from "enzyme";
import * as HIG from "hig-vanilla";
import React from "react";

import TableComponent from "./TableAdapter";

import SlotCell from "../elements/components/SlotCell";
import SlotHeadCell from "../elements/components/SlotHeadCell";

import tableImage from "../playground/images/table-image.png";

const TableHead = TableComponent.TableHead;
const TableRow = TableComponent.TableRow;
const TextHeadCell = TableComponent.TableHead.TextHeadCell;
const TextCell = TableComponent.TableRow.TextCell;
const IconCell = TableComponent.TableRow.IconCell;

describe("<TableAdapter>", () => {
  function createHigContext(props) {
    const higContainer = document.createElement("div");

    const higTable = new HIG.Table();
    higTable.mount(higContainer);
    higTable.setDensity(props.table.density);

    const higTableHead = new higTable.partials.TableHead();
    higTable.addTableHead(higTableHead);

    const emptyCell = new higTableHead.partials.TextHeadCell({
      width: props.emptyCell.width
    });
    higTableHead.addCell(emptyCell);

    const textHeadCell = new higTableHead.partials.TextHeadCell({
      text: props.textHeadCell.text,
      alignment: props.textHeadCell.alignment,
      width: props.textHeadCell.width
    });

    higTableHead.addCell(textHeadCell);

    const slotEl = document.createElement("div");
    slotEl.innerHTML = "Raw denim flexitarian green juice kinfolk.";
    const slotHeadCell = new higTableHead.partials.SlotHeadCell({
      width: props.slotHeadCell.width
    });

    higTableHead.addCell(slotHeadCell);
    slotHeadCell.addSlot(slotEl);

    const higTableRow = new higTable.partials.TableRow();
    higTable.addTableRow(higTableRow);

    const iconCell = new higTableRow.partials.IconCell({
      icon: props.iconCell.icon
    });
    higTableRow.addCell(iconCell);

    const slotEl1 = document.createElement("div");
    slotEl1.innerHTML = "test slot cell";
    const slotCell = new higTableRow.partials.SlotCell();

    higTableRow.addCell(slotCell);

    slotCell.addSlot(slotEl1);

    const textCell = new higTableRow.partials.TextCell({
      width: props.textCell.width,
      alignment: props.textCell.alignment,
      text: props.textCell.text
    });

    higTableRow.addCell(textCell);

    return {
      higContainer,
      higTable,
      slotHeadCell,
      emptyCell: emptyCell,
      textHeadCell: textHeadCell,
      iconcell: iconCell,
      textCell: textCell
    };
  }

  const Context = props => {
    return (
      <TableComponent density={props.table.density}>
        <TableHead>
          <TextHeadCell width={props.emptyCell.width} />
          <TextHeadCell text={props.textHeadCell.text} width={props.textHeadCell.width} alignment={props.textHeadCell.alignment} />
          <SlotHeadCell>
            Raw denim flexitarian green juice kinfolk.
          </SlotHeadCell>
        </TableHead>
        <TableRow>
          <IconCell icon={props.iconCell.icon} />
          <SlotCell>test slot cell</SlotCell>
          <TextCell
            text={props.textCell.text}
            alignment={props.textCell.alignment}
          />
        </TableRow>
      </TableComponent>
    );
  };

  it("renders a table with intial props", () => {
    const defaults = {
      table: { density: "standard" },
      emptyCell: { width: "30px" },
      textHeadCell: { text: "Title", alignment: "left", width: "1fr" },
      slotHeadCell: { width: "1fr" },
      textCell: { text: "Window Punch List", alignment: "left" },
      iconCell: { icon: "gear" }
    };

    const { higContainer, higTable } = createHigContext(defaults);

    const container = document.createElement("div");
    const wrapper = mount(<Context {...defaults} />, {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it("renders a Table with updated props", () => {
    const defaults = {
      table: { density: "standard" },
      emptyCell: { width: "30px" },
      textHeadCell: { text: "Title", alignment: "left", width: "1fr" },
      slotHeadCell: { width: "1fr" },
      textCell: { text: "Window Punch List", alignment: "left" },
      iconCell: { icon: "gear" }
    };

    const {
      higContainer,
      higTable,
      slotHeadCell,
      emptyCell,
      textHeadCell,
      iconcell,
      textCell
    } = createHigContext(defaults);

    const container = document.createElement("div");
    const wrapper = mount(<Context {...defaults} />, {
      attachTo: container
    });

    const nextProps = {
      table: { density: "compressed" },
      emptyCell: { width: "40px" },
      textHeadCell: { text: "New Titles ", alignment: "center", width: "1fr" },
      slotHeadCell: { width: "1fr" },
      textCell: { text: "Window Punch List", alignment: "center" },
      iconCell: { icon: "hamburger" }
    };

    higTable.setDensity(nextProps.table.density);
    emptyCell.setWidth(nextProps.emptyCell.width);
    textHeadCell.setText(nextProps.textHeadCell.text);
    textHeadCell.setAlignment(nextProps.textHeadCell.alignment);
    textHeadCell.setWidth(nextProps.textHeadCell.width);
    slotHeadCell.setWidth(nextProps.slotHeadCell.width);
    textCell.setText(nextProps.textCell.text);
    textCell.setAlignment(nextProps.textCell.alignment);
    iconcell.setIcon("hamburger");

    const prevProps = wrapper.props;
    wrapper.setProps(nextProps);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });
});
