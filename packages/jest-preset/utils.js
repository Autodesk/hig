jest.mock("@hig/utils", () => ({
  generateId: jest.fn(key => `${key}-1`)
}));
