import stylesheet from "./stylesheet";

function expectIsActive(subject) {
  expect(subject).toHaveProperty("color");
}

function expectIsNotActive(subject) {
  expect(subject).not.toHaveProperty("color");
}

describe("stylesheet", () => {
  describe("when active", () => {
    const active = true;
    const subject = stylesheet({ active }, {});

    it("renders correctly", () => {
      expectIsActive(subject.wrapper["&:before"]);
      expectIsActive(subject.wrapper["&:focus:before, &:hover:before"]);
      expect(subject.wrapper).toHaveProperty("& svg *");
      expectIsActive(subject.link["&:hover:before, &:focus:before"]);
    });
  });

  describe("when inactive", () => {
    const active = false;
    const subject = stylesheet({ active }, {});

    it("renders correctly", () => {
      expectIsNotActive(subject.wrapper["&:before"]);
      expectIsActive(subject.wrapper["&:focus:before, &:hover:before"]);
      expect(subject.wrapper).not.toHaveProperty("& svg *");
      expectIsActive(subject.link["&:hover:before, &:focus:before"]);
    });
  });

  it("renders correctly", () => {
    const subject = stylesheet({}, {});
    [
      "wrapper",
      "module",
      "submodule",
      "link",
      "row",
      "icon",
      "externalIcon",
      "title",
    ].forEach((x) => {
      expect(subject).toHaveProperty(x);
    });
  });
});
