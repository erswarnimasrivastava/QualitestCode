
## Introduction
This repository consists of UI tests for acceptance criteria for testing https://cms.demo.katalon.com/

## Pre-requisites:
1. Ensure that Node.js is installed on your machine at https://nodejs.org/en.
2. Ensure Cypress has been installed https://www.cypress.io/


## Retrieving the repository
In your terminal, navigate to the correct folder location for you repository and enter
```
git clone 'repo name''
```

This will copy your repository to your local machine.

## Running your tests
Run the below command in your terminal to install the node packages
```
npm install cypress
```
To open Cypress run 
```
npx cypress open
```
The E2E tests will have been configured so you can click on E2E Testing as the type of testing and 'Start E2E Testing in ...' your browser of choice

Click on feature 'cart'' to test and the test will start running. For further information on Cypress https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test



## Writing tests
The tests can be written in `e2e/feature_files`. A new feature folder can be created within there and then both the `.feature` and step definition file `.js` can be added. <br/>
The tests are written in BDD scripts using Cucumber. For more information https://cucumber.io/docs/installation/javascript/ 
