module.exports = function lastCallOfMock(mockFn) {
  return mockFn.mock.calls[mockFn.mock.calls.length - 1];
};
