jest.mock("./combineEventHandlers", () => jest.fn(() => Math.random()));

const combineEventHandlers = require("./combineEventHandlers");
const {
  default: memoizeCombineEventHandlers,
} = require("./memoizeCombineEventHandlers");

describe("utils/memoizeCombineEventHandlers", () => {
  const handler1 = () => {};
  const handler2 = () => {};
  const handler3 = () => {};
  const handler4 = () => {};

  it("returns a function that calls combineEventHandlers", () => {
    const result = memoizeCombineEventHandlers();

    result(handler1, handler2);

    expect(combineEventHandlers).toHaveBeenCalledWith(handler1, handler2);
  });

  it("memoizes combineEventHandlers", () => {
    const result = memoizeCombineEventHandlers();

    expect(result(handler1, handler2)).toEqual(result(handler1, handler2));
    expect(result(handler3, handler4)).toEqual(result(handler3, handler4));
    expect(result(handler1, handler2)).not.toEqual(result(handler3, handler4));
  });
});
