import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import TableComponent from "../adapters/TableAdapter";
import SlotCell from "../elements/components/SlotCell";
import SlotHeadCell from "../elements/components/SlotHeadCell";

import tableImage from "../playground/images/table-image.png";

const TableHead = TableComponent.TableHead;
const TableRow = TableComponent.TableRow;
const TextHeadCell = TableComponent.TableHead.TextHeadCell;
const TextCell = TableComponent.TableRow.TextCell;
const IconCell = TableComponent.TableRow.IconCell;

const props = {
  table: { density: "standard" },
  emptyCell: { width: "30px" },
  textHeadCell: { text: "Title", alignment: "left", width: "1fr" },
  slotHeadCell: { width: "1fr" },
  textCell: { text: "Window Punch List", alignment: "left" },
  iconCell: { icon: "settings" }
};
storiesOf("Table", module)
  .addWithInfo("large table", "", () => {
    return (
      <TableComponent density="large">
        <TableHead>
          <TextHeadCell width="1fr" />
          <TextHeadCell text="Title" alignment="left" width="2fr" />
          <TextHeadCell text="Type" alignment="left" width="2fr" />
          <TextHeadCell text="Location" alignment="left" width="2fr" />
          <TextHeadCell text="Budget" alignment="left" width="2fr" />
          <SlotHeadCell width="1fr">
            <div>Raw denim flexitarian green juice kinfolk.</div>
          </SlotHeadCell>
        </TableHead>
        <TableRow>
          <SlotCell>
            <img
              src={tableImage}
              style={{ width: 104, height: 58, marginLeft: 20 }}
            />
          </SlotCell>
          <TextCell
            text="Window Punch List"
            detail="window punchlist detail"
            alignment="left"
          />
          <TextCell
            text="Deserunt ut deserunt mollit elit aute et."
            alignment="left"
          />
          <SlotCell>
            <div>Testing body cell slot.</div>
          </SlotCell>
          <TextCell text="2535" alignment="left" />
          <TextCell text="Atlas Plumbi" alignment="left" />
        </TableRow>
      </TableComponent>
    );
  })
  .addWithInfo("standard table", "", () => {
    return (
      <TableComponent density="standard">
        <TableHead>
          <TextHeadCell width="30px" />
          <TextHeadCell text="Title" alignment="left" width="1fr" />
          <TextHeadCell text="Type" alignment="left" width="1fr" />
          <TextHeadCell text="Location" alignment="left" width="1fr" />
          <TextHeadCell text="Budget" alignment="left" width="2fr" />
          <SlotHeadCell width="1fr">
            <div>Raw denim flexitarian green juice kinfolk.</div>
          </SlotHeadCell>
        </TableHead>
        <TableRow>
          <IconCell icon="settings" />
          <TextCell
            text="text cell test"
            alignment="left"
            detail="new detail"
          />
          <TextCell
            text="Deserunt ut deserunt mollit elit aute et."
            alignment="left"
          />
          <SlotCell>
            <div>Testing body cell slot.</div>
          </SlotCell>
          <TextCell text="2535" alignment="left" />
          <TextCell text="Atlas Plumbi" alignment="left" />
        </TableRow>
        <TableRow>
          <IconCell icon="hamburger" />
          <TextCell text="Window Punch List" alignment="left" />
          <TextCell text="Commissioning" alignment="left" />
          <SlotCell>
            <div>Floor 3, Room 21.</div>
          </SlotCell>
          <TextCell text="3000" alignment="left" />
          <TextCell text="Alexander Mo" alignment="left" />
        </TableRow>
        <TableRow>
          <IconCell icon="photos" />
          <TextCell text="Window Punch List" alignment="left" />
          <TextCell text="Commissioning" alignment="left" />
          <SlotCell>
            <div>Floor 3, Room 21.</div>
          </SlotCell>
          <TextCell text="3000" alignment="left" />
          <TextCell text="Alexander Mo" alignment="left" />
        </TableRow>
        <TableRow>
          <IconCell icon="photos" />
          <TextCell text="Window Punch List" alignment="left" />
          <TextCell text="Commissioning" alignment="left" />
          <SlotCell>
            <div>Floor 3, Room 21.</div>
          </SlotCell>
          <TextCell text="3000" alignment="left" />
          <TextCell text="Alexander Mo" alignment="left" />
        </TableRow>
        <TableRow>
          <IconCell icon="photos" />
          <TextCell text="Window Punch List" alignment="left" />
          <TextCell text="Commissioning" alignment="left" />
          <SlotCell>
            <div>Floor 3, Room 21.</div>
          </SlotCell>
          <TextCell text="3000" alignment="left" />
          <TextCell text="Alexander Mo" alignment="left" />
        </TableRow>
      </TableComponent>
    );
  })
  .addWithInfo("compressed table", "", () => {
    return (
      <TableComponent density="compressed">
        <TableHead>
          <TextHeadCell width="30px" />
          <TextHeadCell text="Title" alignment="left" width="1fr" />
          <TextHeadCell text="Type" alignment="left" width="1fr" />
          <TextHeadCell text="Location" alignment="left" width="1fr" />
          <TextHeadCell text="Budget" alignment="left" width="2fr" />
          <SlotHeadCell width="1fr">
            <div>Raw denim flexitarian green juice kinfolk.</div>
          </SlotHeadCell>
        </TableHead>
        <TableRow>
          <IconCell icon="settings" />
          <TextCell
            text="text cell test"
            alignment="left"
            detail="new detail"
          />
          <TextCell
            text="Deserunt ut deserunt mollit elit aute et."
            alignment="left"
          />
          <SlotCell>
            <div>Testing body cell slot.</div>
          </SlotCell>
          <TextCell text="2535" alignment="left" />
          <TextCell text="Atlas Plumbi" alignment="left" />
        </TableRow>
        <TableRow>
          <IconCell icon="hamburger" />
          <TextCell text="Window Punch List" alignment="left" />
          <TextCell text="Commissioning" alignment="left" />
          <SlotCell>
            <div>Floor 3, Room 21.</div>
          </SlotCell>
          <TextCell text="3000" alignment="left" />
          <TextCell text="Alexander Mo" alignment="left" />
        </TableRow>
        <TableRow>
          <IconCell icon="photos" />
          <TextCell text="Window Punch List" alignment="left" />
          <TextCell text="Commissioning" alignment="left" />
          <SlotCell>
            <div>Floor 3, Room 21.</div>
          </SlotCell>
          <TextCell text="3000" alignment="left" />
          <TextCell text="Alexander Mo" alignment="left" />
        </TableRow>
        <TableRow>
          <IconCell icon="photos" />
          <TextCell text="Window Punch List" alignment="left" />
          <TextCell text="Commissioning" alignment="left" />
          <SlotCell>
            <div>Floor 3, Room 21.</div>
          </SlotCell>
          <TextCell text="3000" alignment="left" />
          <TextCell text="Alexander Mo" alignment="left" />
        </TableRow>
        <TableRow>
          <IconCell icon="photos" />
          <TextCell text="Window Punch List" alignment="left" />
          <TextCell text="Commissioning" alignment="left" />
          <SlotCell>
            <div>Floor 3, Room 21.</div>
          </SlotCell>
          <TextCell text="3000" alignment="left" />
          <TextCell text="Alexander Mo" alignment="left" />
        </TableRow>
      </TableComponent>
    );
  });
