import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Table, SlotHeadCell, SlotCell } from "../../react-hig";

const TableHead = Table.TableHead;
const TableRow = Table.TableRow;
const TextHeadCell = Table.TableHead.TextHeadCell;
const TextCell = Table.TableRow.TextCell;
const IconCell = Table.TableRow.IconCell;


class TableSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <PlaygroundSection title="Table">
        <Table density="standard">
          <TableHead>
            <TextHeadCell text="test" />
            <TextHeadCell text="test1" />
						<SlotHeadCell>
							<h1>This is my slot head cell content</h1>
						</SlotHeadCell>
          </TableHead>
          <TableRow>
            <TextCell text="text cell test" />
            <IconCell icon="gear" />
						<SlotCell>
							<h2> this is my slot cell content</h2>
						</SlotCell>	
          </TableRow>
        </Table>
      </PlaygroundSection>
    );
  }
}

export default TableSection;
