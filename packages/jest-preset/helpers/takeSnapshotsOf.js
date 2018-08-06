const React = require("react");
const renderer = require("react-test-renderer");

module.exports = function takeSnapshotsOf(Component, cases) {
  cases.forEach(({ desc, props }) => {
    it(desc, () => {
      const presenter = React.createElement(Component, props);
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
};
