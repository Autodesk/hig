function generateIdMock(key) {
  return "checkbox-1";
}

exports = module.exports = {
  generateId: jest.fn(generateIdMock)
};
