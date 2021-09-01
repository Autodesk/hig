// require("jest-enzyme");
require("jest-extended");
const createSerializer = require("jest-emotion").createSerializer;
const emotion = require("emotion");
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

require("./matchers");
require("./utils");

expect.addSnapshotSerializer(createSerializer(emotion));
