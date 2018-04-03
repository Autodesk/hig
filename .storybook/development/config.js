import { configure } from "@storybook/react";
import "../shared/config";

const req = require.context("../../packages", true, /stories.js$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
