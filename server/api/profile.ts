import { Octokit } from "octokit";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const octokit = new Octokit();

  const {
    data: {
      avatar_url,
      bio,
      followers,
      following,
      login,
      name,
    },
  } = await octokit.request('GET /users/{username}', {
    username: String(query.username),
  });

  if (login !== query.username) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User Not Found'
    });
  }

  return {
    avatar_url,
    bio,
    followers,
    following,
    login,
    name,
  };
});

