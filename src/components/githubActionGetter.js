const { Octokit } = require("octokit")

const octokit = new Octokit({auth: github_auth_token})

class CommitObject{
    constructor(_repo, _name, _message, _date) {
        this.repo = _repo
        this.name = _name
        this.message = _message
        this.date = _date
    }
}

var commitHistory = []

async function getContributedRepos(username) {
    try {
      const reposResponse = await octokit.rest.repos.listForUser({
        username: username,
        type: 'all',
        per_page: 10,
      });
  
      const repositories = reposResponse.data;
  
      // Now iterate over each repository and fetch the workflow runs
      for (const repo of repositories) {
        // console.log(`Fetching commits for repo: ${repo.name}`);
        await getCommitsForRepo(username, repo.name);
      }
      commitHistory = commitHistory.sort((a, b) => a.date - b.date)
      console.log(commitHistory.reverse())
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  }
  
async function getCommitsForRepo(owner, repo) {
    
    try {
      // Fetch commits for the given repository
      const commitsResponse = await octokit.rest.repos.listCommits({
        owner: owner,   // Repository owner's username
        repo: repo,     // Repository name
        per_page: 5,   // Limit the number of results (optional)
      });
  
      const commits = commitsResponse.data;
  
      // Display commits for the repository
      if (commits.length > 0) {
        // console.log(`Commits for ${repo}:`);
        commits.forEach(commit => {
        //   console.log(`- Commit repo: ${repo}, Author: ${commit.commit.author.name}, Message: ${commit.commit.message}, date: ${new Date(commit.commit.committer.date)}`);
          commitHistory.push(new CommitObject(repo, commit.commit.author.name, commit.commit.message, new Date(commit.commit.committer.date)))
        });
      } else {
        console.log(`No commits found for ${repo}`);
      }
    } catch (error) {
      console.error(`Error fetching commits for repo ${repo}:`, error);
    }
    return commitHistory
  }

export default getContributedRepos