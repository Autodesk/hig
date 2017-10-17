import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
/* eslint-enable import/no-extraneous-dependencies */

import Table from "../adapters/Table/TableAdapter";

import tableImage from "../playground/images/table-image.png";

const TableHead = Table.TableHead;
const TableRow = Table.TableRow;
const TextHeadCell = Table.TableHead.TextHeadCell;
const TextCell = Table.TableRow.TextCell;
const IconCell = Table.TableRow.IconCell;

storiesOf("Table", module)
  .addWithInfo("large table", "", () => (
    <Table density="large">
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
    </Table>
  ))
  .addWithInfo("standard table", "", () => (
    <Table density="standard">
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
        <TextCell text="text cell test" alignment="left" detail="new detail" />
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
    </Table>
  ))
  .addWithInfo("compressed table", "", () => (
    <Table density="compressed">
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
        <TextCell text="text cell test" alignment="left" detail="new detail" />
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
    </Table>
  ));
