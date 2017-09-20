import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Table, Icon, TextCellContent, SlotCell } from "../../hig-react";

import tableImage from "../images/table-image.png";

// function StatusCell(props) {
//   const styles = {
//     display: 'block',
//     borderRadius: "50%",
//     border: "1px solid transparent",
//     width: '18px',
//     height: '18px'
//   };

//   if (props.data.status === "good") {
//     styles.backgroundColor = "#B8E986";
//     styles.borderColor = "#7ED321";
//   } else {
//     styles.backgroundColor = "#CE3346";
//     styles.borderColor = "#D0021B";
//   }

//   return <span style={styles} />;
// }

// function MixedCell(props) {
//   if (props.data.status === 'good') {
//     return <p>Hella good</p>
//   } else {
//     return <Icon nameOrSVG={props.data.icon} />
//   }
// }

const columns = [
  {
    alignment: "left",
    width: "30px",
    accessor: "icon",
    Cell: props => <Icon nameOrSVG={props.data.icon} />
  },
  {
    Header: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => <TextCellContent text={props.data.title} detail={props.data.detail} />
  },
  {
    Header: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type",
  },
  {
    Header: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location",
  },
  {
    Header: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => <TextCellContent text={props.data.budget} alignment={props.data.alignment} />
  },
  {
    Header: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name",
  }
];

const data = [
  {
    icon: "gear",
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi"
    
  },
  {
    icon: "hamburger",
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan" 
  },
  {
    icon: "photos",
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling" 
  },
  {
    icon: "quantities",
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur" 
  },
  {
    icon: "cost-control",
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise" 
  },
];


const columns1 = [
  {
    Header: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => <TextCellContent text={props.data.title} detail={props.data.detail} />
  },
  {
    Header: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type",
  },
  {
    Header: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location",
  },
  {
    Header: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => <TextCellContent text={props.data.budget} alignment={props.data.alignment} />
  },
  {
    Header: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name",
  }
];

const data1 = [
  {
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi"
    
  },
  {
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan" 
  },
  {
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling" 
  },
  {
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur" 
  },
  {
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise" 
  },
];


const columns2 = [
  {
    alignment: "left",
    width: "104px",
    accessor: "image",
    Cell: props => <img alt="slot Cell" src={props.data.image} style={{ width: 104, height: 58, marginLeft: 8, marginRight: 8, marginTop: 4 }}/>
  },
  {
    Header: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => <TextCellContent text={props.data.title} detail={props.data.detail} />
  },
  {
    Header: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type",
  },
  {
    Header: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location",
  },
  {
    Header: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => <TextCellContent text={props.data.budget} alignment={props.data.alignment} />
  },
  {
    Header: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name",
  }
];

const data2 = [
  {
    image: tableImage,
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi"
    
  },
  {
    image: tableImage,
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan" 
  },
  {
    image: tableImage,
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling" 
  },
  {
    image: tableImage,
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur" 
  },
  {
    image: tableImage,
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise" 
  },
];

function logEvent(event) {
  let messageParts = [`Checkbox triggered a ${event.type} event`];
  if (event.target.value !== undefined) {
    messageParts = messageParts.concat(`: ${event.target.value}`);
  }
  console.log(messageParts.join(""));
}



class TableSection extends Component {
  render() {
    return (
      <PlaygroundSection title="Table">
        <Table density="standard" columns={columns} data={data} checkBoxCallback={logEvent}/>
        <Table density="compressed" columns={columns1} data={data1}/>
        <Table density="large" columns={columns2} data={data2} />





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
      </PlaygroundSection>
    );
  }
}

export default TableSection;
