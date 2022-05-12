import createButtonEventHandlers from "./createButtonEventHandlers";

describe("utils/createButtonEventHandlers", () => {
  it("returns an object of handlers", () => {
    const handlers = createButtonEventHandlers(() => {});

    expect(handlers).toHaveProperty("handleClick", expect.any(Function));
    expect(handlers).toHaveProperty("handleKeyDown", expect.any(Function));
  });

  describe("when no handler is provided", () => {
    it("returns an empty object", () => {
      const handlers = createButtonEventHandlers();

      expect(handlers).not.toHaveProperty("handleClick");
      expect(handlers).not.toHaveProperty("handleKeyDown");
    });
  });

  describe("ButtonEventHandlers", () => {
    const handler = jest.fn();
    const preventDefault = jest.fn();

    let args;
    let event;

    beforeEach(() => {
      event = { preventDefault };
      args = [event, 1, "2", true];

      jest.clearAllMocks();
    });

    describe("handleClick", () => {
      it("calls the handler with the given arguments", () => {
        const result = createButtonEventHandlers(handler);

        result.handleClick(...args);

        expect(handler).toBeCalledWith(...args);
      });
    });

    describe("handleKeyDown", () => {
      it("doesn't call the handler for keys that aren't space or enter", () => {
        const result = createButtonEventHandlers(handler);

        "abcdefghijklmnopqrstuvwxyz".split("").forEach((key) => {
          event.key = key;
          result.handleKeyDown(...args);
        });

        expect(handler).not.toBeCalled();
      });

      [" ", "Enter"].forEach((key) => {
        describe(`when the "${key}" key is pressed`, () => {
          beforeEach(() => {
            event.key = key;
          });

          it("calls the handler", () => {
            const result = createButtonEventHandlers(handler);

            result.handleKeyDown(...args);
            expect(handler).toBeCalledWith(...args);
          });

          it("prevents the default behavior", () => {
            const result = createButtonEventHandlers(handler);

            result.handleKeyDown(...args);
            expect(preventDefault).toBeCalled();
          });

          describe("when the `preventDefault` option is disabled", () => {
            it("doesn't prevent default behavior", () => {
              const result = createButtonEventHandlers(handler, {
                preventDefault: false,
              });

              result.handleKeyDown(...args);
              expect(preventDefault).not.toBeCalled();
            });
          });
        });
      });
    });
  });
});
