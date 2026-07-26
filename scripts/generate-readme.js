#!/usr/bin/env node
// Reads profile-config.json and writes README.md so the profile is
// updated by editing config values instead of hand-editing README.md.
// Run: node scripts/generate-readme.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'profile-config.json'), 'utf8'));

const TECH_BADGES = {
  'c++': { color: '00599C', logo: 'cplusplus', logoColor: 'white' },
  c: { color: '00599C', logo: 'c', logoColor: 'white' },
  python: { color: '3776AB', logo: 'python', logoColor: 'white' },
  javascript: { color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  typescript: { color: '3178C6', logo: 'typescript', logoColor: 'white' },
  react: { color: '61DAFB', logo: 'react', logoColor: 'black' },
  'node.js': { color: '339933', logo: 'node.js', logoColor: 'white' },
  'next.js': { color: '000000', logo: 'next.js', logoColor: 'white' },
  java: { color: 'ED8B00', logo: 'openjdk', logoColor: 'white' },
  go: { color: '00ADD8', logo: 'go', logoColor: 'white' },
  git: { color: 'F05032', logo: 'git', logoColor: 'white' },
  html: { color: 'E34F26', logo: 'html5', logoColor: 'white' },
  css: { color: '1572B6', logo: 'css3', logoColor: 'white' },
  sql: { color: '4479A1', logo: 'mysql', logoColor: 'white' },
  docker: { color: '2496ED', logo: 'docker', logoColor: 'white' },
  linux: { color: 'FCC624', logo: 'linux', logoColor: 'black' },
};

function techBadge(name) {
  const meta = TECH_BADGES[name.toLowerCase()] || { color: '333333', logo: name.toLowerCase().replace(/[^a-z0-9]/g, ''), logoColor: 'white' };
  const label = encodeURIComponent(name).replace(/-/g, '--');
  return `![${name}](https://img.shields.io/badge/-${label}-${meta.color}?style=flat&logo=${meta.logo}&logoColor=${meta.logoColor})`;
}

function socialBadge(label, color, logo, url) {
  return `[![${label}](https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=flat&logo=${logo}&logoColor=white)](${url})`;
}

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

async function main() {
  const { github, hero, platforms, repoShowcase, theme } = config;

  const techBadges = hero.techStack.map(techBadge).join('\n');
  const socialBadges = [
    hero.social.linkedin && socialBadge('LinkedIn', '0A66C2', 'linkedin', `https://www.linkedin.com/in/${hero.social.linkedin}`),
    hero.social.twitter && socialBadge('X', '000000', 'x', `https://twitter.com/${hero.social.twitter}`),
    hero.social.portfolio && socialBadge('Portfolio', '000000', 'vercel', hero.social.portfolio),
    hero.social.email && socialBadge('Email', 'D14836', 'gmail', `mailto:${hero.social.email}`),
  ]
    .filter(Boolean)
    .join('\n');

  const repos = repoShowcase.repos.length > 0
    ? repoShowcase.repos
    : await fetchTopRepos(github.username, repoShowcase.count || 4);

  const md = `<div align="center">

# Hi 👋, I'm ${hero.name}

### ${hero.role}

**Focus:** ${hero.currentFocus}

${techBadges}

${socialBadges}

</div>

---

## 📊 GitHub Stats

<div align="center">

![${hero.name}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${github.username}&show_icons=true&theme=${theme}&hide_border=true)
![GitHub Streak](https://streak-stats.demolab.com?user=${github.username}&theme=${theme}&hide_border=true)

</div>

---

## 🧠 Coding Profiles

<div align="center">

![LeetCode stats for ${platforms.leetcode.username}](https://leetcard.jacoblin.cool/${platforms.leetcode.username}?theme=dark&font=Baloo%202&ext=heatmap)
![Codeforces stats for ${platforms.codeforces.username}](https://codeforces-readme-stats.vercel.app/api/card?username=${platforms.codeforces.username}&theme=dark)
![CodeChef stats for ${platforms.codechef.username}](https://codechef-readme-stats.onrender.com/${platforms.codechef.username}?v=1)

</div>

---

## 📈 Contribution Activity

<div align="center">

![${hero.name}'s GitHub activity graph](https://github-readme-activity-graph.vercel.app/graph?username=${github.username}&theme=tokyo-night&hide_border=true)

</div>

---

## 📌 Repository Showcase

<div align="center">

${repoTable(github.username, repos, theme)}

</div>

---

## 🛠 Tech Stack

<div align="center">

${techBadges}

</div>
`;

  fs.writeFileSync(path.join(ROOT, 'README.md'), md);
  console.log(`README.md generated from profile-config.json (${repos.length} repos showcased).`);
}

main().catch((err) => {
  console.error('Failed to generate README:', err.message);
  process.exit(1);
});