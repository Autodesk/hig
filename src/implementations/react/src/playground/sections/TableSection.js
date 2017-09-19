import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Table, Icon } from "../../hig-react";

import tableImage from "../images/table-image.png";

function StatusCell(props) {
  const styles = {
    display: 'block',
    borderRadius: "50%",
    border: "1px solid transparent",
    width: '18px',
    height: '18px'
  };

  if (props.data.status === "good") {
    styles.backgroundColor = "#B8E986";
    styles.borderColor = "#7ED321";
  } else {
    styles.backgroundColor = "#CE3346";
    styles.borderColor = "#D0021B";
  }

  return <span style={styles} />;
}

function MixedCell(props) {
  if (props.data.status === 'good') {
    return <p>Hella good</p>
  } else {
    return <Icon nameOrSVG={props.data.icon} />
  }
}

const columns = [
  {
    alignment: "left",
    width: "32px",
    accessor: "icon",
    Cell: props => <Icon nameOrSVG={props.data.icon} />
  },
  {
    alignment: "left",
    width: "32px",
    accessor: "icon",
    Cell: MixedCell
  },
  {
    Header: "Text",
    alignment: "left",
    width: "1fr",
    accessor: "text",
  },
  {
    Header: "Detail",
    alignment: "left",
    width: "1fr",
    accessor: "detail",
    status: "good"
  },
  {
    Header: "Ratio",
    alignment: "right",
    width: "1fr",
    accessor: row => row.nominator / row.demoninator,
  },
  {
    Header: "Status",
    alignment: "center",
    width: "48px",
    accessor: "status",
    Cell: StatusCell
  }
];

const data = [
  {
    text: "1text cell test",
    detail: "1more notes",
    nominator: 1,
    demoninator: 3,
    status: "good",
    icon: "gear"
  },
  {
    text: "2text cell test",
    detail: "2more notes",
    nominator: 2,
    demoninator: 5,
    status: "bad",
    icon: "assets"
  },
  {
    text: "3text cell test",
    detail: "3more notes",
    nominator: 7,
    demoninator: 10,
    status: "good",
    icon: "building-ops"
  }
];

class TableSection extends Component {
  render() {
    return (
      <PlaygroundSection title="Table">
        <Table density="standard" columns={columns} data={data}>
          {/* <TableHead>
          </TableHead>  */}
          {/* <TableHead>
            <TextHeadCell width="24px" />
            <TextHeadCell text="Title" alignment="left" width="1fr" />
            <TextHeadCell text="Type" alignment="left" width="1fr" />
            <TextHeadCell text="Location" alignment="left" width="1fr" />
            <TextHeadCell text="Budget" alignment="right" width="1fr" />
            <TextHeadCell text="Raw denim flexitarian green juice kinfolk." alignment="left" width="1fr" />
          </TableHead>
          <TableRow>
            <IconCell icon="gear" />
            <TextCell text="text cell test" alignment="left" detail="new detail" />
            <TextCell text="Deserunt ut deserunt mollit elit aute et." alignment="left" />
            <TextCell text="Testing body cell slot." alignment="left" />
            <TextCell text="2535" alignment="right" />
            <TextCell text="Atlas Plumbi" alignment="left" />
          </TableRow>
          <TableRow>
            <IconCell icon="hamburger" />
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="right" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <IconCell icon="photos" />
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="right" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <IconCell icon="photos" />
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="right" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <IconCell icon="photos" />
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="right" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
        </Table>
        <Table density="compressed">
          <TableHead>
            <TextHeadCell text="Title" alignment="left" width="1fr" />
            <TextHeadCell text="Type" alignment="left" width="1fr" />
            <TextHeadCell text="Location" alignment="left" width="1fr" />
            <TextHeadCell text="Budget" alignment="right" width="1fr" />
            <TextHeadCell text="Raw denim flexitarian green juice kinfolk." alignment="left" width="1fr" />
          </TableHead>
          <TableRow>
            <TextCell text="text cell test" alignment="left" detail="new detail" />
            <TextCell text="Deserunt ut deserunt mollit elit aute et." alignment="left" />
            <TextCell text="Testing body cell" alignment="left" />
            <TextCell text="2535" alignment="right" />
            <TextCell text="Atlas Plumbi" alignment="left" />
          </TableRow>
          <TableRow>
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />;
            <TextCell text="3000" alignment="right" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="right" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="right" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
          <TableRow>
            <TextCell text="Window Punch List" alignment="left" />
            <TextCell text="Commissioning" alignment="left" />
            <TextCell text="Floor 3, Room 21." alignment="left" />
            <TextCell text="3000" alignment="right" />
            <TextCell text="Alexander Mo" alignment="left" />
          </TableRow>
        </Table>
        <Table density="large">
          <TableHead>
            <TextHeadCell width="1fr" />
            <TextHeadCell text="Title" alignment="left" width="2fr" />
            <TextHeadCell text="Type" alignment="left" width="2fr" />
            <TextHeadCell text="Location" alignment="left" width="2fr" />
            <TextHeadCell text="Budget" alignment="right" width="2fr" />
            <TextHeadCell text="Raw denim flexitarian green juice kinfolk." alignment="left" width="2fr" />;
          </TableHead>
          <TableRow>
            <SlotCell>
              <img alt="slot cell" src={tableImage} style={{ width: 104, height: 58, marginLeft: 20 }} />
            </SlotCell>
            <TextCell text="Window Punch List" detail="window punchlist detail" alignment="left" />
            <TextCell text="Deserunt ut deserunt mollit elit aute et." alignment="left" />
            <TextCell text="Testing body cell slot." alignment="left" />
            <TextCell text="2535" alignment="right" />
            <TextCell text="Atlas Plumbi" alignment="left" />
          </TableRow> */}
        </Table>
      </PlaygroundSection>
    );
  }
}

export default TableSection;
