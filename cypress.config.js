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
    ARN_ATS_IMF: 'arn:aws:iam::886037714351:role/TestImfReceiptTestingInfrastructu-EndToEndTestRole-18BGC3HV3DQGC',
    ARN_FBD_DEV: 'arn:aws:iam::537989602554:role/TestFbdTestingInfrastructure-EndToEndTestRole-J2FJCHRQCOB2',
    ARN_FBD_MEDIA: 'arn:aws:iam::180790766189:role/TestFbdTestingInfrastructure-EndToEndTestRole-I2GS79XBJMKX',
    CORE_NUMBER: 'TEST123A',
    IMF_ARRIVALS_BUCKET: 'testimfreceiptsharedresources-arrivalsbucket-oobzyxydiv4s',
    REGION: 'eu-west-1',
    TEST_MEDIA_BUCKET: 'testfbdtestinginfrastructure-testmediabucket-190bcnionyagx',
  },
  clientCertificates: [
    {
      url: 'https://imf-receipt-commissions.test.api.bbci.co.uk',
      certs: [
        {
          key: path.relative(process.env.IMF_REPO_PATH, process.env.BBC_CLIENT_KEY),
          cert: path.relative(process.env.IMF_REPO_PATH, process.env.BBC_CLIENT_CERT)
        },
      ],
      url: 'https://fbd-dashboard.test.tools.bbc.co.uk/',
      certs: [
        {
          key: path.relative(process.env.IMF_REPO_PATH, process.env.BBC_CLIENT_KEY),
          cert: path.relative(process.env.IMF_REPO_PATH, process.env.BBC_CLIENT_CERT)
        },
      ],
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