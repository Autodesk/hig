import stylesheet from "./ModalPresenter.stylesheet";

describe("ModalPresenter/stylesheet", () => {
  it("returns an object", () => {
    expect(stylesheet({}, {})).toEqual(expect.any(Object));
  });
});
