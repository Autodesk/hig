import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Table, SlotHeadCell, SlotCell } from "../../react-hig";

import tableImage from "../images/table-image.png";

const TableHead = Table.TableHead;
const TableRow = Table.TableRow;
const TextHeadCell = Table.TableHead.TextHeadCell;
const TextCell = Table.TableRow.TextCell;
const IconCell = Table.TableRow.IconCell;

class TableSection extends Component {
  render() {
    return <PlaygroundSection title="Table">
        <Table density="standard">
          <TableHead>
            <TextHeadCell width="24px" />
            <TextHeadCell text="Title" alignment="left" width="1fr" />
            <TextHeadCell text="Type" alignment="left" width="1fr" />
            <TextHeadCell text="Location" alignment="left" width="1fr" />
            <TextHeadCell text="Budget" alignment="left" width="1fr" />
            <TextHeadCell text="Raw denim flexitarian green juice kinfolk." alignment="left" width="1fr" />
          </TableHead>
          <TableRow>
            <IconCell icon="gear" />
            <TextCell text="text cell test" alignment="left" detail="new detail" />
            <TextCell text="Deserunt ut deserunt mollit elit aute et." alignment="left" />
            <TextCell text="Testing body cell slot." alignment="left" />
            <TextCell text="2535" alignment="left" />
            <TextCell text="Atlas Plumbi" alignment="left" />
          </TableRow>
          <TableRow>
            <IconCell icon="hamburger" />
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="left" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <IconCell icon="photos" />
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="left" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <IconCell icon="photos" />
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="left" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <IconCell icon="photos" />
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="left" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
        </Table>
        <Table density="compressed">
          <TableHead>
            <TextHeadCell text="Title" alignment="left" width="1fr" />
            <TextHeadCell text="Type" alignment="left" width="1fr" />
            <TextHeadCell text="Location" alignment="left" width="1fr" />
            <TextHeadCell text="Budget" alignment="left" width="1fr" />
            <TextHeadCell text="Raw denim flexitarian green juice kinfolk." alignment="left" width="1fr" />
          </TableHead>
          <TableRow>
            <TextCell text="text cell test" alignment="left" detail="new detail" />
            <TextCell text="Deserunt ut deserunt mollit elit aute et." alignment="left" />
            <TextCell text="Testing body cell" alignment="left" />
            <TextCell text="2535" alignment="left" />
            <TextCell text="Atlas Plumbi" alignment="left" />
          </TableRow>
          <TableRow>
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />;
            <TextCell text="3000" alignment="left" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="left" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="left" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="left" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
        </Table>
        <Table density="large">
          <TableHead>
            <TextHeadCell width="1fr" />
            <TextHeadCell text="Title" alignment="left" width="2fr" />
            <TextHeadCell text="Type" alignment="left" width="2fr" />
            <TextHeadCell text="Location" alignment="left" width="2fr" />
            <TextHeadCell text="Budget" alignment="left" width="2fr" />
            <TextHeadCell text="Raw denim flexitarian green juice kinfolk." alignment="left" width="2fr" />;
          </TableHead>
          <TableRow>
            <SlotCell>
              <img alt="slot cell" src={tableImage} style={{ width: 104, height: 58, marginLeft: 20 }} />
            </SlotCell>
            <TextCell text="Window Punch List" detail="window punchlist detail" alignment="left" />
            <TextCell text="Deserunt ut deserunt mollit elit aute et." alignment="left" />
            <TextCell text="Testing body cell slot." alignment="left" />
            <TextCell text="2535" alignment="left" />
            <TextCell text="Atlas Plumbi" alignment="left" />
          </TableRow>
        </Table>
      </PlaygroundSection>;
  }
}

export default TableSection;
