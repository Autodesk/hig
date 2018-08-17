import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import renderOptions from "./renderOptions";
import OptionPresenter from "./OptionPresenter";

describe("Dropdown/presenters/renderOptions", () => {
  describe("using no custom option rendering", () => {
    let options;
    let props;
    let result;

    beforeEach(() => {
      options = [1, 2, 3, 4];
      props = { options };
      result = renderOptions(props);
    });

    it("renders each option", () => {
      expect(result.length).toEqual(options.length);
    });

    it("returns an OptionPresenter for each option", () => {
      expect(mount(result[0]).find(OptionPresenter)).toBePresent();
    });

    it("has options as children on OptionPresenter", () => {
      expect(result.map(comp => comp.props.children)).toEqual(
        options.map(opt => opt.toString())
      );
    });
  });

  describe("with Dropdown.formatOption", () => {
    let formatOptionFunction;
    let options;
    let props;
    let result;

    beforeEach(() => {
      formatOptionFunction = sinon.spy();
      options = [1, 2, 3, 4];
      props = {
        options,
        formatOption: formatOptionFunction
      };
      result = renderOptions(props);
    });

    it("renders each option", () => {
      expect(result.length).toEqual(options.length);
    });

    it("uses formatOption function", () => {
      expect(formatOptionFunction.called).toBeTrue();
    });

    it("uses formatOption function to render each option", () => {
      expect(formatOptionFunction.callCount).toEqual(options.length);
    });

    it("returns an OptionPresenter for each option", () => {
      expect(mount(result[0]).find(OptionPresenter)).toBePresent();
    });
  });

  describe("with Dropdown.renderOption", () => {
    let options;
    let props;
    let renderOptionFunction;
    let result;

    beforeEach(() => {
      options = [1, 2, 3, 4];
      renderOptionFunction = sinon.spy();
      props = {
        options,
        renderOption: renderOptionFunction
      };
      result = renderOptions(props);
    });

    it("renders each option", () => {
      expect(result.length).toEqual(options.length);
    });

    it("doesn't use OptionPresenter", () => {
      expect(
        mount(<div>{result[0]}</div>).find("OptionPresenter")
      ).not.toBePresent();
    });

    it("uses renderOption function", () => {
      expect(renderOptionFunction.called).toBeTrue();
    });

    it("uses renderOption function to render each option", () => {
      expect(renderOptionFunction.callCount).toEqual(options.length);
    });
  });

  describe("with Option.render", () => {
    let options;
    let props;
    let renderFunction;
    let result;

    beforeEach(() => {
      renderFunction = sinon.spy();
      options = [
        { label: "Red", value: "#ff0000", render: renderFunction },
        { label: "Green", value: "#00ff00", render: renderFunction },
        { label: "Blue", value: "#0000ff", render: renderFunction }
      ];
      props = { options };
      result = renderOptions(props);
    });

    it("renders each option", () => {
      expect(result.length).toEqual(options.length);
    });

    it("doesn't use OptionPresenter", () => {
      expect(
        mount(<div>{result[0]}</div>).find("OptionPresenter")
      ).not.toBePresent();
    });

    it("uses render function", () => {
      expect(renderFunction.called).toBeTrue();
    });

    it("uses render function to render each option", () => {
      expect(renderFunction.callCount).toEqual(options.length);
    });
  });
});
