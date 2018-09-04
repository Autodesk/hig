require("jest-enzyme");
require("jest-extended");
const createSerializer = require("jest-emotion").createSerializer;
const emotion = require("emotion");

require("./matchers");
require("./utils");

expect.addSnapshotSerializer(createSerializer(emotion));
