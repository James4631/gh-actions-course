const core = require('@actions/core')

async function run() {
    /*
    1. Parse inputs: 
    1.1 Base-branch from which to check for updates
    1.2 Target-branch to use to create the PR
    1.3 Github token for authentication purposes (To create PRs)
    1.4 Working dir for which to check for dependencies
    2.0 Execute the npm update command within the working directory
    3.0 check whether there are modified package*.json files
    4.0 If there are mofified files:
    4.1 add and commit  to target branch
    4.2 if there are modified files, create a PR
    4.2 otherwise , conclude the custom action

    */
  core.info('I am a custom JS action')

}

run()