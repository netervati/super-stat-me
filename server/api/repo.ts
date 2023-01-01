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
  totalStars: number,
}

export default defineEventHandler(async (event): Promise<RepoStats> => {
  const query = getQuery(event);
  const octokit = new Octokit();

  // Appending query params seems to result to a warning on the map
  // destructure: Binding element <key> implicitly has an 'any' type
  const { data } = await octokit.request(
    'GET /users/{username}/repos?sort=updated&direction=desc',
    {
      username: String(query.username),
    }
  );

  let totalStars = 0;
  const repos: UserRepositories = data.map(({
      description,
      forks_count,
      full_name,
      html_url,
      language,
      open_issues_count,
      stargazers_count,
      size,
      watchers_count,
  }) => {
    totalStars += (stargazers_count || 0);

    return {
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
    };
  });

  return {
    repos,
    totalStars,
  };
});

