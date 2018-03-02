import { configure } from "@storybook/react";
import "hig-vanilla/lib/hig.css";

const req = require.context("../stories", true);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
