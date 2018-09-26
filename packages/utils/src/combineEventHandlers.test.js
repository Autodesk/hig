import combineEventHandlers from "./combineEventHandlers";

describe("utils/combineEventHandlers", () => {
  it("returns an event handler", () => {
    expect(combineEventHandlers()).toEqual(expect.any(Function));
  });

  describe("combined event handler", () => {
    const args = [{}, 1, "2", true];
    const handler1 = jest.fn();
    const handler2 = jest.fn();

    beforeEach(() => {
      jest.resetAllMocks();
    });

    it("calls each handler with the given arguments", () => {
      const result = combineEventHandlers(handler1, handler2);

      result(...args);

      expect(handler1).toBeCalledWith(...args);
      expect(handler2).toBeCalledWith(...args);
      expect(handler1).toHaveBeenCalledTimes(1);
      expect(handler2).toHaveBeenCalledTimes(1);
    });

    it("ignores falsy values for handlers", () => {
      const result = combineEventHandlers(
        undefined,
        handler1,
        null,
        handler2,
        false
      );

      result(...args);

      expect(handler1).toBeCalledWith(...args);
      expect(handler2).toBeCalledWith(...args);
      expect(handler1).toHaveBeenCalledTimes(1);
      expect(handler2).toHaveBeenCalledTimes(1);
    });
  });
});
