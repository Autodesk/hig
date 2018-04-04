import { configure, addDecorator } from "@storybook/react";
import "../shared/config";
import TestDecorator from "./TestDecorator";

addDecorator(TestDecorator);

const req = require.context("../../packages", true, /stories-test.js$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
