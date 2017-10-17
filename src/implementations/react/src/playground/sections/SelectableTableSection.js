import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { Table, Icon, TextCellContent } from "../../hig-react";

const columns = [
  {
    id: "1",
    alignment: "left",
    width: "30px",
    HeaderCell: () => <div />,
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

class SelectableTableSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns,
      data
    };
  }

  onSelectionChange = selectedInfo => {
    if (selectedInfo.selected) {
      const updatedData = this.state.data.map(row => ({
        ...row,
        selected: true
      }));
      this.setState({ data: updatedData });
    } else {
      const updatedData = this.state.data.map(row => ({
        ...row,
        selected: true
      }));
      this.setState({ data: updatedData });
    }
  };

  checkboxHandler = selectedInfo => {
    const existingData = this.state.data;
    const selectedIndex = existingData.findIndex(
      row => row.id === selectedInfo.id
    );
    existingData[selectedIndex].selected = selectedInfo.selected;
    this.setState({ data: existingData });
  };

  render() {
    return (
      <PlaygroundSection title="Selectable Table">
        <Table
          density="standard"
          columns={this.state.columns}
          data={this.state.data}
          selectable
          checkboxCallback={this.checkboxHandler}
          onSelectAllSelectionChange={this.onSelectionChange}
        />
      </PlaygroundSection>
    );
  }
}

export default SelectableTableSection;
