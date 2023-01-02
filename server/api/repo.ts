import { Octokit } from "octokit";

interface RepositoryItem {
  description: string | null,
  forks: number,
  fullName: string,
  language: string | null | undefined,
  stars: number,
  totalScore: number,
  url: string,
  watchers: number,
}

interface UserRepositories extends Array<RepositoryItem>{}

interface RepoStats {
  repos: UserRepositories,
  totalRepos: number,
  totalStars: number,
}

export default defineEventHandler(async (event): Promise<RepoStats> => {
  const query = getQuery(event);
  const octokit = new Octokit();

  let fetchRepos = true;
  let totalStars = 0;
  let page = 1;
  const repos: UserRepositories = [];

  while (fetchRepos === true) {
    const { data } = await octokit.request(
      `GET /users/{username}/repos?sort=updated&direction=desc&per_page=100&page=${page}`,
      {
        username: String(query.username),
      }
    );

    if (data.length === 0) {
      fetchRepos = false;
    }

    for( const {
        description,
        forks_count,
        full_name,
        html_url,
        language,
        open_issues_count,
        stargazers_count,
        size,
        watchers_count,
    } of data) {
      totalStars += (stargazers_count || 0);

      repos.push({
        description,
        forks: forks_count || 0,
        fullName: full_name,
        language: language,
        stars: stargazers_count || 0,
        totalScore: ((stargazers_count || 0) * 0.6) + 
          ((watchers_count || 0) * 0.2) + 
          ((open_issues_count || 0) * 0.15) +
          (((size || 0) / 1000) * 0.05),
        url: html_url,
        watchers: watchers_count || 0,
      });
    }

    if (data.length < 100) {
      fetchRepos = false;
    }

    page += 1;
  }

  return {
    repos,
    totalRepos: repos.length,
    totalStars,
  };
});

