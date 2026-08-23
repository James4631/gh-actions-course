const core = require('@actions/core');
const exec = require('@actions/exec');

const validateBranchName = ({ branchName }) => /[^a-zA-Z0-9_\-\.\/]+$/.test(branchName);
const validateDirectoryName = ({ dirName }) => /[^a-zA-Z0-9_\-\/]+$/.test(dirName);

    

async function run() {
    const baseBranch = core.getInput('base-branch');
    const targetBranch = core.getInput('target-branch');
    const ghToken = core.getInput('gh-token');
    const workingDir = core.getInput('working-directory');
    const debug = core.getBooleanInput('debug');

    core.setSecret(ghToken);

    if (!validateBranchName({ branchName: baseBranch})){
        core.setFailed('Invalid base branch name ')
        return;
    }
     if (!validateBranchName({ branchName: targetBranch})){
        core.setFailed('Invalid target-branch name ')
        return;
    }
     if (!validateDirectoryName({ dirName: workingDir})) {
        core.setFailed('Invalid working-dir name ')
        return;

    }
    core.info(`[js-dependency-update]: base branch is ${baseBranch}`);
    core.info(`[js-dependency-update]: target branch is ${targetBranch}`);
    core.info(`[js-dependency-update]: working dir branch is ${workingDir}`)
    
    await exec.exec('npm update', [], {
    cwd: workingDir
    });
    const gitStatus = await exec.getExecOutput('git status -s package*.json', [], {

    });
    if (gitStatus.stdout > 0) {
        core.info('[js-dependency-update]: there are updates availible')
    } else {
        core.info('[js-dependency-update]: no updates at this time')

    }
    /*

   [Done] 1. Parse inputs: 
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