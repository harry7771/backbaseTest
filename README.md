# backbaseTest

## Pre-Requisites
- NodeJS (https://nodejs.org/en/)
- git (https://gitforwindows.org/)
- an IDE (Visual Studio Code preferred, https://code.visualstudio.com/)


## Install TestCafe test framework
- After cloning this project, execute the following commands from the project root folder:  
   - npm install
   - npm install -g testcafe
   - npm install testcafe-reporter-html  (for test run with optional report)


## Run the TestCafe test
- Execute the following command from the project root folder:  testcafe chrome tests\bblogComment.test.js -e
- Observe console output for executed workflow.
- You may substitue any locally installed browser (firefox, edge) in place of 'chrome'


### (alternative run command to generate test report)
- command from the project root folder:  testcafe chrome tests\bblogComment.test.js -e --reporter html:C:\<project_root_folder>\backbaseTest\report\testreport.html