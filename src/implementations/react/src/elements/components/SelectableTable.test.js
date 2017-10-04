import React from "react";
import { mount } from "enzyme";

import SelectableTable from "./SelectableTable";
import Icon from "../../adapters/IconAdapter";
import TextCellContent from "../../adapters/TextCellContentAdapter";
import RowCheckbox from "./FormElements/RowCheckbox";
import Checkbox from "./FormElements/Checkbox";
import HeaderCheckbox from "./FormElements/HeaderCheckbox";

function Context(props) {
  return (
    <SelectableTable {...props} columns={props.columns} data={props.data}>
      {props.children}
    </SelectableTable>
  );
}

describe("SelectableTable", () => {
  describe("with table props", () => {
    const columns = [
      {
        id: "1",
        alignment: "left",
        width: "30px",
        Cell: props => <Icon nameOrSVG={props.data.icon} />
      },
      {
        id: "2",
        Header: "Title",
        alignment: "left",
        width: "1fr",
        accessor: "title",
        Cell: props => (
          <TextCellContent text={props.data.title} detail={props.data.detail} />
        )
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
        selected: false
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
        selected: true
      }
    ];

    const headerCheckboxCallbackMock = jest.fn();
    const checkboxCallbackMock = jest.fn();

    const props = {
      columns: columns,
      data: data,
      checkboxCallback: checkboxCallbackMock,
      onSelectAllSelectionChange: headerCheckboxCallbackMock
    };

    let wrapper;
    const mockFunction = jest.fn();

    mockFunction.mockReturnValue(null);
    wrapper = mount(
      <SelectableTable {...props}>{mockFunction}</SelectableTable>
    );
    const wrapperInstance = wrapper.instance();

    describe("renders with checkboxes", () => {
      const headerCheckbox = {
        id: "checkboxHeader",
        width: "30px",
        alignment: "center",
        HeaderCell: props => (
          <HeaderCheckbox
            onSelectAllSelectionChange={this.props.onSelectAllSelectionChange}
            selected={jest.fn()}
          />
        ),
        Cell: props => (
          <RowCheckbox
            {...props}
            selected={this.props.data.selected}
            onChange={this.props.checkboxCallbackMock}
          />
        )
      };

      props.columns = [headerCheckbox].concat(props.columns);

      it("it renders the table", () => {
        expect(mockFunction).toHaveBeenCalled();
      });

      it("adds the check box header to columns table", () => {
        expect(mockFunction.mock.calls[0][0][0].id).toEqual("checkboxHeader");
        expect(mockFunction.mock.calls[0][0].length).toEqual(
          props.columns.length
        );
      });

      it("sets the correct data cells", () => {
        expect(mockFunction.mock.calls[0][1].length).toEqual(props.data.length);
        expect(mockFunction.mock.calls[0][1][0].selected).toEqual(false);
        expect(mockFunction.mock.calls[0][1][1].selected).toEqual(true);
      });
    });

    describe("state of individual rows", () => {
      it("sets 'selected' attribute to appropriate value", () => {
        wrapperInstance.selectRow({ id: "1", selected: true });
        expect(wrapperInstance.state.rows["1"].selected).toEqual(true);
      });
    });

    describe("'allRowsSelected' state", () => {
      it("manages value of 'allRowsSelected' state", () => {
        wrapperInstance.handleAllSelectionChange({ target: { checked: true } });
        expect(wrapperInstance.state.allRowsSelected).toEqual(true);
      });
    });
  });
});
