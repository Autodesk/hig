jest.mock("./createButtonEventHandlers", () => jest.fn(() => Math.random()));

const createButtonEventHandlers = require("./createButtonEventHandlers");
const {
  default: memoizeCreateButtonEventHandlers,
} = require("./memoizeCreateButtonEventHandlers");

describe("utils/memoizeCreateButtonEventHandlers", () => {
  const handler1 = () => {};
  const handler2 = () => {};

  it("returns a function that calls createButtonEventHandlers", () => {
    const result = memoizeCreateButtonEventHandlers();

    result(handler1);

    expect(createButtonEventHandlers).toHaveBeenCalledWith(handler1);
  });

  it("memoizes createButtonEventHandlers", () => {
    const createHandlers = memoizeCreateButtonEventHandlers();

    expect(createHandlers(handler1)).toEqual(createHandlers(handler1));
    expect(createHandlers(handler2)).toEqual(createHandlers(handler2));
    expect(createHandlers(handler1)).not.toEqual(createHandlers(handler2));
  });
});
