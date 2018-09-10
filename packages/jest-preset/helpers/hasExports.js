module.exports = function hasExports(index, cases) {
  cases.forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
};
