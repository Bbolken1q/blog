const { Octokit } = require("octokit")
// const github_auth_token = ""

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
  commitHistory = []
  try {
    const reposResponse = await octokit.rest.repos.listForUser({
      username: username,
      type: 'all',
      per_page: 10,
    });

    const repositories = reposResponse.data;

    // Fetch commits for each repository sequentially
    for (const repo of repositories) {
      await getCommitsForRepo(username, repo.name);  // Wait for each commit fetch to complete before continuing
    }

    // Now that all commits have been collected, sort them
    commitHistory.sort((a, b) => a.date - b.date);
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

    // Push commits to the history array
    commits.forEach(commit => {
      commitHistory.push(new CommitObject(repo, commit.commit.author.name, commit.commit.message, new Date(commit.commit.committer.date)));
    });
  } catch (error) {
    console.error(`Error fetching commits for repo ${repo}:`, error);
  }
}

export default getContributedRepos;