/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }

const cucumber = require('cypress-cucumber-preprocessor').default;
const generate = require('multiple-cucumber-html-reporter').generate; 
const removeSync = require("fs-extra").removeSync;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  on('after:run', (results) => {
    generate({
      // Required
      // This part needs to be the same path where you store the JSON files
      // default = '.tmp/json/'
      jsonDir: "cypress/cucumber-report/json/",
      reportPath: "cypress/cucumber-report/html/",
      // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
    });
  })
  on('before:run', (details) => {
    removeSync("cypress/cucumber-report")
  })
}