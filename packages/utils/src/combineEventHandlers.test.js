import combineEventHandlers from "./combineEventHandlers";

describe("utils/combineEventHandlers", () => {
  it("returns an event handler", () => {
    expect(combineEventHandlers()).toEqual(expect.any(Function));
  });

  it("returns a function", () => {
    const values = [{}, 1, "2", true];
    const handlers = [jest.fn(), jest.fn()];
    const result = combineEventHandlers(...handlers);

    result(...values);

    handlers.forEach(handler => {
      expect(handler).toBeCalledWith(...values);
    });
  });
});
