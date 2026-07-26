async function fetchTopRepos(username, count) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    headers: { 'User-Agent': 'readme-generator' },
  });
  if (!res.ok) return [];
  const repos = await res.json();
  return repos
    .filter((r) => !r.fork && r.name.toLowerCase() !== username.toLowerCase())
    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, count)
    .map((r) => r.name);
}

module.exports = { fetchTopRepos };
