const { defineConfig } = require("cypress");
const path = require("path");
const { NormalModuleReplacementPlugin } = require("webpack");

module.exports = defineConfig({
  projectId: 'qikb9b',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  fileServerFolder: "public",
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      
    },
  },
});
