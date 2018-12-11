const React = require("react");
const renderer = require("react-test-renderer");

module.exports = function takeSnapshotsOf(Component, cases, rendererOptions) {
  cases.forEach(({ description, props }) => {
    it(description, () => {
      const vDom = React.createElement(Component, props);
      const tree = renderer.create(vDom, rendererOptions).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
};
