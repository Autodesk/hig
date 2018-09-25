import combineEventHandlers, {
  memoizeCombineEventHandlers
} from "./combineEventHandlers";

describe("utils/combineEventHandlers", () => {
  describe("combineEventHandlers", () => {
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

  describe("memoizeCombineEventHandlers", () => {
    it("memoizes combineEventHandlers", () => {
      const createHandlers = memoizeCombineEventHandlers();
      const handler1 = () => {};
      const handler2 = () => {};
      const handler3 = () => {};
      const handler4 = () => {};

      expect(createHandlers(handler1, handler2)).toEqual(
        createHandlers(handler1, handler2)
      );
      expect(createHandlers(handler3, handler4)).toEqual(
        createHandlers(handler3, handler4)
      );
      expect(createHandlers(handler1, handler2)).not.toEqual(
        createHandlers(handler3, handler4)
      );
    });
  });
});
