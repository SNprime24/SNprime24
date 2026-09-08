const { fetchTopRepos } = require('../lib/github-api');

function pinCard(username, repo, theme) {
  return `![${repo} repository card](https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=${theme}&hide_border=true)`;
}

function repoTable(username, repos, theme) {
  if (repos.length === 0) return '_No repositories to showcase yet._';
  const cards = repos.map((r) => pinCard(username, r, theme));
  const rows = [];
  for (let i = 0; i < cards.length; i += 2) {
    rows.push(`| ${cards[i]} | ${cards[i + 1] || ''} |`);
  }
  return ['| | |', '|---|---|', ...rows].join('\n');
}

async function buildRepoShowcaseSection({ github, repoShowcase, theme }) {
  const repos = repoShowcase.repos.length > 0
    ? repoShowcase.repos
    : await fetchTopRepos(github.username, repoShowcase.count || 4);

  return `## 📌 Repository Showcase

<div align="center">

${repoTable(github.username, repos, theme)}

</div>`;
}

module.exports = { buildRepoShowcaseSection };
