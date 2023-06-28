require("jest-extended");
const createSerializer = require("@emotion/jest").createSerializer;
const emotion = require("emotion");
const enzyme = require("enzyme");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");

enzyme.configure({ adapter: new Adapter() });

require("./matchers");
require("./utils");

expect.addSnapshotSerializer(createSerializer());
