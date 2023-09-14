const { defineConfig } = require('cypress');
const path = require('path');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);

      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ["./cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    supportFile: 'cypress/support/e2e.js'
  },
  env: {
    
  },
  clientCertificates: [
    {
    
    },
  ],
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  hideCredentials: true,

  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": false,
    "overwrite": false,
    "html": false,
    "json": false,
    "reportDir": "./cypress/reports/"
  }

})
