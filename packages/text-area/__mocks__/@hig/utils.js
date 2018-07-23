function generateIdMock(key) {
  return "text-area-1";
}

exports = module.exports = {
  generateId: jest.fn(generateIdMock)
};
