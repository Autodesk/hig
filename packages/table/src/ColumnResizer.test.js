import React from "react";
import delay from "delay";
import renderer from "react-test-renderer";
import { DraggableCore } from "react-draggable";
import { mount } from "enzyme";

import ColumnResizer from "./ColumnResizer";

function getDraggableCoreProps() {
  return DraggableCore.mock.calls[0][0];
}

describe("ColumnResizer", () => {
  const className = "test-inner-div";
  const innerDivSelector = `.${className}`;
  const width = 50;

  beforeEach(() => {
    DraggableCore.mockClear();
  });

  it("renders with only a width", () => {
    const tree = renderer.create(<ColumnResizer width={width} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders disabled", () => {
    mount(<ColumnResizer disabled width={width} />);

    const { disabled } = getDraggableCoreProps();

    expect(disabled).toEqual(true);
  });

  it("renders the given class name", () => {
    const wrapper = mount(
      <ColumnResizer disabled className={className} width={width} />
    );
    const innerDiv = wrapper.find(innerDivSelector);

    expect(innerDiv).toBePresent();
  });

  describe("event handling", () => {
    let column;
    let props;

    beforeEach(() => {
      column = {
        width: 50,
        minWidth: 1,
        maxWidth: 100
      };
      props = {
        className,
        column,
        width
      };
    });

    describe("when a click occurs", () => {
      it("stops propagation", () => {
        const wrapper = mount(<ColumnResizer {...props} />);
        const innerDiv = wrapper.find(innerDivSelector);
        const fakeEvent = { stopPropagation: jest.fn() };

        innerDiv.simulate("click", fakeEvent);

        expect(fakeEvent.stopPropagation).toBeCalled();
      });
    });

    describe("when dragging starts", () => {
      const onResizeStart = jest.fn();

      beforeEach(() => {
        onResizeStart.mockClear();
      });

      it("calls the onResizeStart prop", () => {
        mount(<ColumnResizer {...props} onResizeStart={onResizeStart} />);

        const { onStart } = getDraggableCoreProps();

        expect(onResizeStart).not.toBeCalled();

        onStart();

        expect(onResizeStart).toBeCalledWith(props.column);
      });
    });

    describe("when dragging stops", () => {
      const onResizeStop = jest.fn();

      beforeEach(() => {
        onResizeStop.mockClear();
      });

      it("calls the onResizeStop prop", () => {
        mount(<ColumnResizer {...props} onResizeStop={onResizeStop} />);

        const { onStop } = getDraggableCoreProps();

        expect(onResizeStop).not.toBeCalled();

        onStop();

        expect(onResizeStop).toBeCalledWith(props.column);
      });
    });

    describe("when a drag occurs", () => {
      const onResize = jest.fn();

      let fakeEvent;
      let fakeData;

      beforeEach(() => {
        fakeEvent = {};
        fakeData = { lastX: 10, x: 15 };
        onResize.mockClear();
      });

      it("calls the onResize prop ", async () => {
        mount(<ColumnResizer {...props} onResize={onResize} />);

        const { onDrag } = getDraggableCoreProps();
        const expectedColumnWidth = 5;

        expect(onResize).not.toBeCalled();

        onDrag(fakeEvent, fakeData);
        // Wait for throttling
        await delay(100);
        onDrag(fakeEvent, fakeData);

        expect(onResize).toBeCalledWith(props.column, expectedColumnWidth);
      });
    });
  });
});
