import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { Table, Icon, TextCellContent, SlotHeadCell } from "../../hig-react";

import tableImage from "../images/table-image.png";

const columns = [
  {
    id: "1",
    alignment: "left",
    width: "30px",
    HeaderCell: props => (<div></div>),
    Cell: props => <Icon nameOrSVG={props.data.icon} />
  },
  {
    id: "2",
    HeaderCell: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => (
      <TextCellContent text={props.data.title} detail={props.data.detail} />
    )
  },
  {
    id: "3",
    HeaderCell: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type"
  },
  {
    id: "4",
    HeaderCell: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location"
  },
  {
    id: "5",
    HeaderCell: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => (
      <TextCellContent
        text={props.data.budget}
        alignment={props.data.alignment}
      />
    )
  },
  {
    id: "6",
    HeaderCell: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name"
  }
];

const data = [
  {
    id: "1",
    icon: "settings",
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi",
    selected: true
  },
  {
    id: "2",
    icon: "hamburger",
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan",
    selected: false
  },
  {
    id: "3",
    icon: "photos",
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling",
    selected: false
  },
  {
    id: "4",
    icon: "quantities",
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur",
    selected: false
  },
  {
    id: "5",
    icon: "cost-control",
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise",
    selected: false
  }
];

const columns1 = [
  {
    id: "1",
    HeaderCell: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => (
      <TextCellContent text={props.data.title} detail={props.data.detail} />
    )
  },
  {
    id: "2",
    HeaderCell: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type"
  },
  {
    id: "3",
    HeaderCell: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location"
  },
  {
    id: "4",
    HeaderCell: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => (
      <TextCellContent
        text={props.data.budget}
        alignment={props.data.alignment}
      />
    )
  },
  {
    id: "5",
    HeaderCell: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name"
  }
];

const data1 = [
  {
    id: "1",
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi"
  },
  {
    id: "2",
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan"
  },
  {
    id: "3",
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling"
  },
  {
    id: "4",
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur"
  },
  {
    id: "5",
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise"
  }
];

const columns2 = [
  {
    id: "1",
    alignment: "left",
    HeaderCell: props => (<div></div>),
    width: "120px",
    accessor: "image",
    Cell: props => (
      <img
        alt="slot Cell"
        src={props.data.image}
        style={{
          width: 104,
          height: 58,
          marginLeft: 8,
          marginRight: 8,
          marginTop: 4
        }}
      />
    )
  },
  {
    id: "2",
    HeaderCell: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => (
      <TextCellContent text={props.data.title} detail={props.data.detail} />
    )
  },
  {
    id: "3",
    HeaderCell: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type"
  },
  {
    id: "4",
    HeaderCell: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location"
  },
  {
    id: "5",
    HeaderCell: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => (
      <TextCellContent
        text={props.data.budget}
        alignment={props.data.alignment}
      />
    )
  },
  {
    id: "6",
    HeaderCell: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name"
  }
];

const data2 = [
  {
    id: "1",
    image: tableImage,
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi"
  },
  {
    id: "2",
    image: tableImage,
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan"
  },
  {
    id: "3",
    image: tableImage,
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling"
  },
  {
    id: "4",
    image: tableImage,
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur"
  },
  {
    id: "5",
    image: tableImage,
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise"
  }
];


class SelectableTableSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columns1,
      data: data1
    };
  }

  onSelectionChange = selectedInfo => {
    if (selectedInfo.selected) {
      const updatedData = this.state.data.map(row => {
        row.selected = true;
        return row;
      });
      this.setState({ data: updatedData });
    } else {
      const updatedData = this.state.data.map(row => {
        row.selected = false;
        return row;
      });
      this.setState({ data: updatedData });
    }
	};
	
  checkboxHandler = selectedInfo => {
		const existingData = this.state.data
		const selectedIndex = existingData.findIndex((row) => {
			return row.id === selectedInfo.id
		});
		existingData[selectedIndex].selected = selectedInfo.selected
		this.setState({data: existingData})
  };



  render() {
    return (
      <PlaygroundSection title="Selectable Table">
        <Table
          density="compressed"
          columns={this.state.columns}
          data={this.state.data}
          selectable={true}
          checkboxCallback={this.checkboxHandler} 
          onSelectAllSelectionChange={this.onSelectionChange}
        />
      </PlaygroundSection>
    );
  }
}

export default SelectableTableSection;
