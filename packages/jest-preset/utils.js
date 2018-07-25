jest.mock("@hig/utils", () => {
  return {
    generateId: jest.fn(key => `${key}-1`)
  };
});
